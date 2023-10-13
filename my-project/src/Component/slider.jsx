import React, { useState, useEffect } from "react";
import { images } from "../fix/image";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center py-5">
      <div className="w-3/4 h-[400px] border">
        <img
          src={images[currentImage]}
          alt="Slider"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};
export default Slider;
