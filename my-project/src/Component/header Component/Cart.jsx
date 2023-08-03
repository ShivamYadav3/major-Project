import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../fix/redux/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const HandleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" flex items-center justify-center border h-[523px]">
      <div className=" flex flex-col gap-y-10 font-bold text-4xl">
        {cartItems.length === 0 ? (
          <div> Your cart is empty</div>
        ) : (
          <div className="flex flex-col gap-8">
            {cartItems.map((data, index) => {
              return (
                <div key={index} className="flex gap-10 text-lg">
                  <div className="w-40">
                    {index + 1} {data.service_name}
                  </div>
                  <div>Price - {data.price}</div>
                </div>
              );
            })}
            <div className="text-xl">Total Items - {cartItems.length}</div>
            <div className="text-2xl">
              Total amount -{" "}
              {cartItems.reduce((acc, data) => acc + data.price, 0)}
            </div>
            <button
              onClick={() => HandleClearCart()}
              className="bg-slate-300 py-1 px-2 rounded-lg ml-2 font-medium text-lg"
            >
              Clear Cart
            </button>
            <button className="bg-slate-300 py-1 px-2 rounded-lg ml-2 font-medium text-lg">
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
