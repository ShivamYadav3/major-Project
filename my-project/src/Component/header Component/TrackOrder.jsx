import React from "react";

function TrackOrder() {
  return (
    <div className="flex items-center justify-center border h-[523px]">
      <div className=" flex flex-col gap-y-10">
        <div>
          <label htmlFor="" className="text-2xl">
            Order No :{" "}
          </label>
          <input
            type="text"
            placeholder="Enter your order No"
            className="border-2 w-96 p-1 pl-2 border-slate-300 rounded-md focus:outline-none focus:border-sky-500 dark:text-black"
          />
        </div>
        <div>
          <label htmlFor="" className="text-2xl">
            Mobile No :{" "}
          </label>
          <input
            type="text"
            placeholder="Enter your No"
            className="border-2 w-96 p-1 pl-2 border-slate-300 rounded-md focus:outline-none focus:border-sky-500 dark:text-black"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-slate-300 py-1 px-2 rounded-lg ml-2 text-lg font-medium">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;
