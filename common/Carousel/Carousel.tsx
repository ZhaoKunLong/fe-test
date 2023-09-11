import React, { useState, useEffect, useRef } from "react";

import type { CarouselProps } from "./type";
import "./carousel.module.less";

export const Carousel: React.FC<CarouselProps> = (props) => {
  const { autoPlay: autoPlayProp, images } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1);
    }
  };
  
  // 暂停或恢复自动播放
  const togglePause = () => {
    setPause(!pause);
  };

  useEffect(() => {
    if (containerRef.current && trackRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      trackRef.current.style.transform = `translateX(${
        -containerWidth * currentSlide
      }px)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    let timer: number;
    if (autoPlayProp && !pause) {
      timer = window.setInterval(nextSlide, 3000);
    }
    return () => {
      window.clearInterval(timer);
    };
  }, [autoPlayProp, pause]);

  return (
    <div
      ref={containerRef}
      className="carousel-wrapper"
      onMouseEnter={togglePause}
      onMouseLeave={togglePause}
    >
      <div ref={trackRef} className="images">
        {images.map((slide, index) => (
          <div key={index} style={{ width: "100%", height: "100%" }}>
            {slide}
          </div>
        ))}
      </div>
      <div className="left-btn">
        <button onClick={prevSlide}>&lt;</button>
      </div>
      <div className="right-btn">
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};
