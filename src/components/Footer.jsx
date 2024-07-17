import React from "react";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-red-400 px-40 py-20 mt-20 flex items-center justify-between font-semibold text-lg">
      <div className="flex flex-col gap-10">
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Shipping & Delivery Available</li>
        </ul>
      </div>
      <div className="flex flex-col gap-10">
        <p>Connect with us</p>
        <div className="flex gap-5">
          <IoCall />
          <p>7830088189</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
