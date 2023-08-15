import React from "react";

function TrackOrder() {
  return (
    <div className="flex items-center justify-center border h-[517px]">
      <div className=" flex flex-col justify-center gap-y-10 border h-60 p-11 rounded-3xl">
        <div>
          <label htmlFor="" className="text-2xl inline-block w-40">
            Order No :{" "}
          </label>
          <input
            type="text"
            placeholder="Enter your order No"
            className="border-2 w-96 p-1 pl-2 border-slate-300 rounded-md focus:outline-none focus:border-sky-500 dark:text-black"
          />
        </div>
        <div>
          <label htmlFor="" className="text-2xl inline-block w-40">
            Mobile No :{" "}
          </label>
          <input
            type="text"
            placeholder="Enter your No"
            className="border-2 w-96 p-1 pl-2 border-slate-300 rounded-md focus:outline-none focus:border-sky-500 dark:text-black"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-slate-300 py-1 px-2 rounded-lg ml-2 text-lg font-medium border  hover:text-sky-500">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;
