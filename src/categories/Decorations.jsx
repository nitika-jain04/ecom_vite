"use client";

import React from "react";
import { decorations } from "../../data";
import Products from "../components/Products";
import ProductNav from "../components/ProductNav";
import Navbar from "../components/Navbar";

const Decorations = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-5 my-10 flex flex-col items-center gap-5 justify-evenly">
        <p className="text-center font-bold text-3xl blinker-semibold">
          Book your next Decoration with us!🎉🎊
        </p>

        <ProductNav />

        <div className="grid grid-cols-2 gap-5 lg:gap-10 md:flex md:flex-wrap justify-center">
          {decorations.map((data, index) => {
            return (
              <div key={index}>
                <Products data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Decorations;
