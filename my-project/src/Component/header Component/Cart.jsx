import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddQ, RemoveQ, clearCart } from "../../fix/redux/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const finalPay = cartItems.reduce(
    (acc, data) => acc + data.price * data.qty,
    0
  );

  const HandleClearCart = () => {
    dispatch(clearCart());
  };

  const AddQty = (data) => {
    dispatch(AddQ(data));
  };

  const RemoveQty = (data) => {
    dispatch(RemoveQ(data));
  };

  const loadScript = (src1) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src1;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("you are offline check your connection");
      return;
    }

    const options = {
      key: "rzp_test_uv5yiT1eAXgJYm",
      currency: "INR",
      amount: finalPay * 100,
      name: "Urban Services",
      description: "thanks For purchasing",
      image: "",
      handler: function (response) {
        HandleClearCart();
        alert(response.razorpay_payment_id);
        alert("payment Done");
      },
      prefill: {
        name: "Shivam",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className=" flex items-center justify-center border p-8 min-h-[517px]">
      <div className=" flex flex-col gap-y-10 font-bold text-4xl">
        {cartItems.length === 0 ? (
          <div> Your cart is empty</div>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="flex gap-10 text-lg">
              <div className="w-5">No</div>
              <div className="w-40">Name</div>
              <div className="w-40">Price</div>
              <div className="w-40">Qty</div>
              <div className="w-40">Final</div>
            </div>
            {cartItems.map((data, index) => {
              return (
                <div key={index} className="flex gap-10 text-lg">
                  <div className="w-5">{index + 1}</div>
                  <div className="w-40">{data.service_name}</div>
                  <div className="w-40">{data.price}</div>
                  <div className="w-40 flex gap-7">
                    <button onClick={() => AddQty(data)}>+</button>
                    {data.qty}
                    <button onClick={() => RemoveQty(data)}>-</button>
                  </div>
                  <div className="w-40">{data.price * data.qty}</div>
                </div>
              );
            })}
            <div className="text-xl">Total Items - {cartItems.length}</div>
            <div className="text-2xl">Total amount - {finalPay}</div>
            <button
              onClick={() => HandleClearCart()}
              className="bg-slate-300 py-1 px-2 rounded-lg ml-2 font-medium text-lg w-40"
            >
              Clear Cart
            </button>
            <button
              onClick={() => displayRazorPay(finalPay)}
              className="bg-slate-300 py-1 px-2 rounded-lg ml-2 font-medium text-lg w-40"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
