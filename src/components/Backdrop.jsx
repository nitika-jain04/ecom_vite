import React from "react";

function Backdrop({ handleCart }) {
  return (
    <div
      className="w-full h-screen absolute top-0 left-0 bg-stone-600 opacity-40"
      onClick={() => handleCart(false)}
    ></div>
  );
}

export default Backdrop;
