import React, { useEffect, useLayoutEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Billing from "./Billing";
import Backdrop from "./Backdrop";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartSize = cart.totalCartSize;
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  function handleCart(click) {
    setOpen(click);
  }

  return (
    <>
      {/* <Outlet /> */}
      <nav className="flex items-center justify-between bg-red-400 p-8 sticky top-0 z-50">
        <Link to="/">
          <p className="text-lg text-gray-900 font-bold heading text-center">
            Home Mart
          </p>
        </Link>

        <div className="flex gap-5 items-center relative">
          <FaRegHeart size={22} />
          <FaCartShopping
            size={23}
            onClick={() => {
              handleCart(true);
            }}
          />
          <span className="absolute -top-4 left-14 text-sm rounded-full px-2 bg-white font-semibold">
            {cartSize > 0 && cartSize}
          </span>
        </div>

        {open && <Backdrop handleCart={handleCart} />}
        {open && <Billing handleCart={handleCart} />}
      </nav>
    </>
  );
}

export default Navbar;
