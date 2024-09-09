import React from "react";
import { Link } from "react-router-dom";

const ProductNav = () => {
  return (
    <ul className="flex flex-wrap gap-3 items-center my-5 justify-center">
      {/* <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/all">All</Link>
      </li> */}
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/household">Household</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/diwali">Diwali</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/pooja">Pooja</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/rakhi">Rakhi</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/bangles">Bangles</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/personalised">Personalised</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/kids">Kids</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/accessories">Accessories</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/hariyali">Hariyali</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/tricolor">Tricolor</Link>
      </li>
      <li className="border-2 border-red-400 p-2 blinker-semibold">
        <Link to="/categories/decorations">Decorations</Link>
      </li>
    </ul>
  );
};

export default ProductNav;
