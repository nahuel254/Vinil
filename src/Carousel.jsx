import { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel() {
  const images = [
    "/src/assets/ramma.jpg",
    "/src/assets/kalma.jpg",
    "/src/assets/sza.jpg",
    "/src/assets/thew.png",
    "/src/assets/tini.jpg",
    "/src/assets/colorada.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Cambia la imagen automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`slide ${i === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default Carousel;