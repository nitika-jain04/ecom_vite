"use client";
import React from "react";
import { tricolor } from "../../data";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Household() {
  return (
    <div className="mx-5 my-10 mt-20 lg:mx-10" id="household">
      <div className="flex items-center justify-between">
        <p className="text-start text-2xl my-5 blinker-semibold">
          Independence Day / Republic Day
        </p>

        <Link to="/categories/tricolor">
          <div className="flex gap-3 items-center">
            <p className="blinker-semibold text-lg">View All</p>
            <MdOutlineArrowForwardIos />
          </div>
        </Link>
      </div>
      <div className="overflow-x-auto mx-5" id="products-page">
        <div className="flex space-x-8">
          {tricolor.slice(0, 6).map((data, index) => (
            <Link to={`/product/${data.id}`} key={index}>
              <div
                key={data.id}
                className="flex-shrink-0 flex flex-col gap-5 items-center justify-center border-2 border-red-400 p-3 rounded-md transition-all 3s ease-in-out"
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
                </div>
              </div>
            </Link>
          ))}
          <Link to="/categories/tricolor">
            <button className="flex items-center justify-center gap-3 border-2 border-red-400 rounded-md p-10 h-full transition-all 3s ease-in-out">
              <p className="blinker-semibold text-lg">View More</p>
              <MdOutlineArrowForwardIos size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
