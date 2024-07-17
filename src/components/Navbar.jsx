import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Billing from "./Billing";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleCart(click) {
    setOpen(click);
  }

  return (
    <nav className="flex items-center justify-between bg-red-400 px-5 py-5 sticky top-0 z-50">
      <Link to="/">
        <p className="text-lg text-gray-900 font-bold heading text-center">
          Home Mart
        </p>
      </Link>

      <div className="flex gap-5 items-center">
        <FaCartShopping
          size={23}
          onClick={() => {
            handleCart(true);
          }}
        />
      </div>

      {open && <Backdrop handleCart={handleCart} />}
      {open && <Billing handleCart={handleCart} />}
    </nav>
  );
}

export default Navbar;
