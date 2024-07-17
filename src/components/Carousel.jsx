"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { allData, carousel } from "../../data";

const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const slides = allData;

  console.log(allData);

  //   const slides = [
  //     "https://via.placeholder.com/600x400?text=Slide+1",
  //     "https://via.placeholder.com/600x400?text=Slide+2",
  //     "https://via.placeholder.com/600x400?text=Slide+3",
  //   ];

  function nextSlide(x) {
    console.log(slides);
    setCurrIndex((prevIndex) => (prevIndex + 1) % x.length);
  }

  function prevSlide(x) {
    console.log("x", x);
    setCurrIndex((prevIndex) => (prevIndex - 1 + x.length) % x.length);
  }

  function goToSlide(index) {
    setCurrIndex(index);
  }

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative w-full max-w-lg mx-auto" {...handlers}>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 relative"
          style={{ transform: `translateX(-${currIndex * 100}%)` }}
        >
          {allData.map((slide) => {
            return slide.images?.map((image, index) => {
              return (
                <div key={index} className="min-w-full relative">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full relative"
                  />
                  <button
                    onClick={() => prevSlide(slide.images)}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => nextSlide(slide.images)}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1"
                  >
                    Next
                  </button>
                </div>
              );
            });
          })}
        </div>
        {/* <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1"
        >
          Next
        </button> */}
      </div>
      {/* <div className="flex justify-center mt-4">
        {carousel.images.map((_, index) => {
          return (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                currIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default Carousel;
