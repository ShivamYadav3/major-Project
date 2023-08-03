import React from "react";
import { addItem } from "../../fix/redux/cartSlice";
import { useDispatch } from "react-redux";

function PageLayout({ Product }) {
  const dispatch = useDispatch();
  const HandleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col gap-8 p-10">
      {Product.service_categories.map((item, index) => {
        return (
          <div key={index} className="border flex flex-col gap-2 p-5 ">
            <div className="flex gap-8">
              <div>
                <div>{index + 1}</div>
                <div>service - {item.service_name}</div>
                <div>Description - {item.description}</div>
                <div>Price - {item.price}</div>
              </div>
              <div>
                <img src={item.image_url} alt="" className="h-40 w-40" />
              </div>
            </div>
            <div>
              <button
                className="bg-slate-300 py-1 px-2 rounded-lg ml-2 "
                onClick={() => HandleAddItems(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PageLayout;
