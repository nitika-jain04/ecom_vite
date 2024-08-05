import React, { useState } from "react";
import { household } from "../../data";
import Products from "../components/Products";
import ProductNav from "../components/ProductNav";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { BsSearch } from "react-icons/bs";

const HouseholdPage = () => {
  const [search, setSearch] = useState("");
  const [filteredHousehold, setFilteredHousehold] = useState(household);

  const handleSearch = () => {
    const filtered = household.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredHousehold(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Household & Kitchen</title>
      </Helmet>
      <div>
        <Toaster position="top-center" />
      </div>
      <Navbar />
      <div className="mx-3 my-5 flex flex-col items-center gap-5">
        <p className="text-center font-bold text-3xl blinker-semibold">
          Household
        </p>
        <ProductNav />

        <div className="flex gap-3 items-center border-2 border-stone-600 rounded-md px-2 py-1">
          <BsSearch />
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => setSearch(e.target.value)}
            className="focus:outline-none"
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="grid grid-cols-2 gap-5 lg:gap-10 md:flex md:flex-wrap justify-center">
          {filteredHousehold.length > 0
            ? filteredHousehold.map((data, index) => (
                <div key={index}>
                  <Products data={data} />
                </div>
              ))
            : household.map((data, index) => (
                <div key={index}>
                  <Products data={data} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default HouseholdPage;
