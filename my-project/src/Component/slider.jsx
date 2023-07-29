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
      <div className="w-3/4 h-80 border">
        <img
          src={images[currentImage]}
          alt="Slider"
          className="h-80 w-full object-cover"
        />
      </div>
    </div>
  );
};
export default Slider;
