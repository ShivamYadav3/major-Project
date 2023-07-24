import { useState } from "react";
import Mapping from "./map";
import {
  HomeCleaningServices,
  RepairsAndMaintenance,
  saloon,
} from "../fix/data";
import Slider from "./slider";

function Cards() {
  return (
    <div className="fragment">
      <Slider />
      <div className="text-center my-10">
        <h2 className="font-bold text-3xl m-5">Saloon & Skin Care</h2>
        <div className="flex flex-wrap justify-evenly gap-4">
          <Mapping items={saloon} />
        </div>
      </div>

      <div className="text-center my-10 gap-y-3">
        <h2 className="font-bold text-3xl m-5"> Home Cleaning</h2>
        <div className="flex flex-wrap justify-evenly gap-4">
          <Mapping items={HomeCleaningServices} />
        </div>
      </div>

      <div className="text-center my-10">
        <h2 className="font-bold text-3xl m-5">Repairs and Maintenance</h2>
        <div className="flex flex-wrap justify-evenly gap-4">
          <Mapping items={RepairsAndMaintenance} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
