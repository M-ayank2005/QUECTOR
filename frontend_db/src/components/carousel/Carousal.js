import React, { useState, useEffect } from "react";
import car1 from "../../lib/car1.jpg";
import car2 from "../../lib/car2.jpg";
import car3 from "../../lib/car3.jpg";
import car4 from "../../lib/car4.jpg";
import car5 from "../../lib/car5.jpg";

const images = [car1, car2, car3, car4, car5];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-96 h-full carousel rounded-box relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item w-full absolute transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image} className="w-full" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousal;
