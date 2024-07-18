// import { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { allData } from "../../data";
import { MdCurrencyRupee } from "react-icons/md";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../store/actions";

function ProductPage() {
  const param = useParams();

  const selectedProduct = allData.find((prod) => prod.id === +param.id);

  if (!selectedProduct) {
    return <div className="mx-36 my-20">No product found</div>;
  }

  return (
    <div>
      <div>
        <Toaster position="top-center" />
      </div>
      <ProductCard key={selectedProduct.id} selectedProduct={selectedProduct} />
    </div>
  );
}

function ProductCard({ selectedProduct }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(selectedProduct));
    toast.success("Added to Cart");
  }

  return (
    <div>
      <Navbar />

      {selectedProduct.images ? <Carousel /> : ""}

      <div className="flex items-center justify-center my-5">
        <p className="blinker-semibold text-3xl">{selectedProduct.name}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mx-10 md:mx-40 my-10">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          height={300}
          width={300}
          className="rounded-md self-center"
        />

        <div className="flex flex-col gap-5 items-center justify-start w-full md:w-1/2 my-5 md:my-10">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              {selectedProduct.price ? <MdCurrencyRupee /> : ""}
              <p className="blinker-semibold text-lg">
                {selectedProduct.price ? selectedProduct.price : ""}
              </p>
            </div>
            {/* <div className="flex items-center gap-5 text-xl border-2 border-red-500">
              <button
                className="border-r-2 border-red-500 p-2 text-xl blinker-semibold"
                m
                onClick={() => dispatch(decrementQuantity(selectedProduct.id))}
              >
                -
              </button>
              <p className="blinker-semibold">
                {selectedProduct.qty ? selectedProduct.qty : 1}
              </p>
              <button
                className="border-l-2 border-red-500 p-2 text-xl blinker-semibold"
                onClick={() => dispatch(incrementQuantity(selectedProduct.id))}
              >
                +
              </button>
            </div> */}

            <button
              className="text-lg blinker-semibold border-2 border-red-500 transition-all duration-300 ease-in p-2"
              onClick={() => handleAddToCart()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
