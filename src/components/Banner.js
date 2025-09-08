import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const images = [
  "/images/dasuwon1.jpeg",
  "/images/dasuwon4.jpeg",
  "/images/dasuwon6.jpeg",
  "/images/dasuwon9.jpeg",
  "/images/dasuwon10.jpeg",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0);
  const [direction, setDirection] = useState("right"); 
  const timeoutRef = useRef(null);

  const prev = () => {
    setDirection("left");
    setPrevIdx(current);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const next = () => {
    setDirection("right");
    setPrevIdx(current);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 자동 슬라이드
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setDirection("right");
      setPrevIdx(current);
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timeoutRef.current);
    
  }, [current]);

  return (
    <div className="banner-carousel">
    
      {prevIdx !== current && (
        <img
          key={prevIdx}
          src={process.env.PUBLIC_URL + images[prevIdx]}
          alt={`banner-prev`}
          className={`banner-img banner-img-prev slide-out-${direction}`}
        />
      )}
  
      <img
        key={current}
        src={process.env.PUBLIC_URL + images[current]}
        alt={`banner-${current + 1}`}
        className={`banner-img banner-img-current slide-in-${direction}`}
      />
      <div className="banner-controls">
        <button className="banner-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <span className="banner-index">
          {current + 1} of {images.length}
        </span>
        <button className="banner-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;