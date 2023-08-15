import { useState } from "react";
import Mapping from "./map";
import Slider from "./slider";
import { MainData } from "../fix/Main";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function Cards() {
  const input = useSelector((store) => store.inputValue.value);

  const filteredProducts = useMemo(() => {
    const filteredItems = MainData.map((category) => ({
      head: category.head,
      data: category.data.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      ),
    }));
    return filteredItems;
  }, [input]);

  return (
    <div>
      {input.length == 0 && <Slider />}
      <div>
        <div className="text-center my-10">
          {filteredProducts.map((item, i) => {
            if (item.data.length > 0) {
              return (
                <div key={i}>
                  <h2 className="font-bold text-3xl m-5">{item.head}</h2>
                  <div className="flex flex-wrap justify-evenly gap-4">
                    <Mapping items={item.data} />
                  </div>
                </div>
              );
            } else return;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
