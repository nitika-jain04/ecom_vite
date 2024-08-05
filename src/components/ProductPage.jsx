import { allData } from "../../data";
import { MdCurrencyRupee } from "react-icons/md";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";

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
          className="rounded-md self-center max-h-[300px] min-w-[250px] max-w-[300px]"
        />

        <div className="flex flex-col gap-5 items-center justify-start w-full md:w-1/2 my-5 md:my-10">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              {selectedProduct.price ? <MdCurrencyRupee /> : ""}
              <p className="blinker-semibold text-lg">
                {selectedProduct.price ? selectedProduct.price : ""}
              </p>
            </div>

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
