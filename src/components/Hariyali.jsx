"use client";
import React, { useState } from "react";
import { hariyaliTeej } from "../../data";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function Hariyali() {
  // function handleScroll(direction) {
  //   const container = document.getElementById("products-page");
  //   const scrollAmount =
  //     direction === "left" ? -cardWidth - 10 : cardWidth + 10;
  //   container.scrollBy({
  //     left: scrollAmount,
  //     behavior: "smooth",
  //   });
  //   setScrollX(scrollX + scrollAmount);
  // }
  return (
    <div className="mx-5 my-10 mt-20  lg:mx-10" id="household">
      <div className="flex items-center justify-between">
        <p className="text-start text-2xl my-5 blinker-semibold">
          Hariyali Teej
        </p>

        {/* <div className="flex gap-2">
          <button className="text-xl bg-red-400 text-white hover:cursor-pointer p-2">
            <FaArrowLeftLong onClick={() => handleScroll("left")} />
          </button>
          <button className="text-xl bg-red-400 text-white hover:cursor-pointer p-2">
            <FaArrowRightLong onClick={() => handleScroll("right")} />
          </button>
        </div> */}

        <div className="flex gap-3 items-center">
          <p className="blinker-semibold text-lg">View All</p>
          <MdOutlineArrowForwardIos />
        </div>
      </div>
      <div className="overflow-x-auto mx-5" id="products-page">
        <div className="flex space-x-8">
          {hariyaliTeej.slice(0, 6).map((data) => (
            <div
              key={data.id}
              className="flex-shrink-0 flex flex-col gap-5 items-center justify-center border-2 border-red-400 p-3 rounded-md snap-center transition-all 3s ease-in-out hover:scale-95"
              style={{ minWidth: "200px" }}
            >
              <img
                src={data.image}
                alt="bangles"
                className="aspect-square rounded-md"
                height="200"
                width="200"
              />
              <div className="flex-col flex gap-2 items-center">
                <p className="text-center text-lg blinker-semibold">
                  {data.name}
                </p>

                {/* <div className="flex items-center gap-5">
                    <p className="flex items-center font-bold blinker-semibold">
                      <MdOutlineCurrencyRupee />
                      {data.price}
                    </p>
                    <button className="bg-red-300 border-2 border-white rounded-md text-black px-2 py-1 blinker-semibold">
                      + Add
                    </button>
                  </div> */}
              </div>
            </div>
          ))}
          <button className="flex items-center justify-center gap-3 border-2 border-red-400 rounded-md p-10 transition-all 3s ease-in-out hover:scale-95">
            <p className="blinker-semibold text-lg">View More</p>
            <MdOutlineArrowForwardIos size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hariyali;
