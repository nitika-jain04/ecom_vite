"use client";

import React from "react";
import { accessories } from "../../data";
import Products from "../components/Products";
import ProductNav from "../components/ProductNav";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const AccessoriesPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accessories</title>
      </Helmet>

      <div>
        <Toaster position="top-center" />
      </div>
      <Navbar />
      <div className="mx-3 my-5 flex flex-col items-center gap-5 justify-evenly">
        <p className="text-center font-bold text-3xl blinker-semibold">
          Kids Accessories
        </p>

        <ProductNav />

        <div className="grid grid-cols-2 gap-3 lg:gap-10 md:flex md:flex-wrap justify-center">
          {accessories.map((data, index) => {
            return (
              <div key={index}>
                <Products data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AccessoriesPage;
