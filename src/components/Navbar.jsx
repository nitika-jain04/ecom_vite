import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Billing from "./Billing";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartSize = cart.totalCartSize;
  // console.log(cartSize);

  function handleCart(click) {
    setOpen(click);
  }

  return (
    <nav className="flex items-center justify-between bg-red-400 p-8 sticky top-0 z-50">
      <Link to="/">
        <p className="text-lg text-gray-900 font-bold heading text-center">
          Home Mart
        </p>
      </Link>

      <div className="flex gap-5 items-center relative">
        <FaCartShopping
          size={23}
          onClick={() => {
            handleCart(true);
          }}
        />
        <span className="absolute -top-4 left-4 text-sm rounded-full px-2 bg-white font-semibold">
          {cartSize > 0 && cartSize}
        </span>
      </div>

      {open && <Backdrop handleCart={handleCart} />}
      {open && <Billing handleCart={handleCart} />}
    </nav>
  );
}

export default Navbar;
