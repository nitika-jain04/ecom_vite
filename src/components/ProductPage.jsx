// import { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { allData } from "../../data";
import { useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";

function ProductPage() {
  const param = useParams();
  const dispatch = useDispatch();

  const selectedProduct = allData.find((prod) => prod.id === +param.id);

  if (!selectedProduct) {
    return <div className="mx-36 my-20">No product found</div>;
  }

  return (
    <div>
      <div>
        <Toaster position="top-center" />
      </div>
      <ProductCard
        key={selectedProduct.id}
        selectedProduct={selectedProduct}
        dispatch={dispatch}
      />
    </div>
  );
}

function ProductCard({ selectedProduct, dispatch }) {
  function handleAddToCart() {
    dispatch(addToCart(selectedProduct));
    toast.success("Added to Cart");
  }
  return (
    <div>
      <Navbar />

      {selectedProduct.images ? <Carousel /> : ""}

      <div className="p-5 xl:px-36 xl:py-20 xl:w-full">
        <div className="flex justify-center font-bold text-3xl">
          <h3 className="z-40 font-extrabold">{selectedProduct.name}</h3>
        </div>

        <div className="xl:flex">
          <div className="xl:flex xl:flex-col xl:w-1/2">
            <div className="flex items-center justify-center mt-10">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[420px] w-[300px] object-fill"
              />
            </div>
          </div>

          <div className="px-10 py-5 flex flex-col gap-5 border border-black bg-[#e5e6e9] w-1/2 mt-10">
            {/* <p className="text-xl styles.blinker leading-8">
              {selectedProduct.description}
            </p> */}

            <div className="flex gap-5 items-center">
              <p className="text-xl font-bold styles.blinker md:text-2xl flex items-center">
                {selectedProduct.price ? <MdCurrencyRupee /> : ""}
                {selectedProduct.price ? `${selectedProduct.price}.00` : ""}
              </p>
              {/* <div className="flex items-center font-bold">
                <button className="border-2 border-black bg-white px-5 py-3 text-xl hover:bg-transparent transition-all duration-200 ease-in">
                  <FaMinus size={12} />
                </button>
                <p className="text-xl border-y-2 border-black px-5 py-1">1</p>
                <button className="border-2 border-black bg-white px-5 py-3 text-xl hover:bg-transparent transition-all duration-200 ease-in">
                  <FaPlus size={12} className="font-semibold" />
                </button>
              </div> */}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 self-center items-center">
              <button
                className="font-bold text-lg border-2 w-fit border-red-600 text-red-600 p-2 hover:cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => handleAddToCart()}
              >
                ADD +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
