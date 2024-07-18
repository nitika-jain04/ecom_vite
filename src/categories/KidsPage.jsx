"use client";

import React from "react";
import { kids } from "../../data";
import Products from "../components/Products";
import ProductNav from "../components/ProductNav";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const KidsPage = () => {
  return (
    <div>
      <div>
        <Toaster position="top-center" />
      </div>
      <Navbar />
      <div className="mx-3 my-5 flex flex-col items-center gap-5">
        <p className="text-center font-bold text-3xl blinker-semibold">Kids</p>

        <ProductNav />

        <div className="grid grid-cols-2 gap-5 lg:gap-10 md:flex md:flex-wrap justify-center">
          {kids.map((data, index) => {
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

export default KidsPage;
