import React from "react";
import car1 from "../../lib/car1.jpg"
import car2 from "../../lib/car2.jpg"
import car3 from "../../lib/car3.jpg"
import car4 from "../../lib/car4.jpg"
import car5 from "../../lib/car5.jpg"
const Carousal = () => {
    
  return (
    <div className="w-96 h-full carousel rounded-box">
      <div className="carousel-item w-full">
        <img
          src={car1}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={car2}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={car3}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={car4}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={car5}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={car1}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={car2}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
    </div>
  );
};

export default Carousal;
