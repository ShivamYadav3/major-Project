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
    <div className=" flex items-center justify-center border">
      <div className=" flex flex-col gap-y-10 font-bold text-4xl">
        {cartItems.length === 0 ? (
          <div> Your cart is empty</div>
        ) : (
          <div>
            {cartItems.map((data, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <div>{data.service_name}</div>
                  <div>Price {data.price}</div>
                </div>
              );
            })}
            <button onClick={() => HandleClearCart()}>Clear Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
