import { FaRegHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { addToCart } from "../../store/actions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Products = ({ data }) => {
  const dispatch = useDispatch();

  function handleAddTocart() {
    dispatch(addToCart(data));
    toast.success("Added to Cart");
  }

  return (
    <div className="flex flex-col justify-center gap-5 drop-shadow-lg shadow-red-500 p-5 rounded-md bg-purple-50 min-h-72 max-h-72 w-[180px]">
      <Link to={`/product/${data.id}`}>
        <img
          src={data.image}
          alt={data.name}
          className="aspect-square rounded-md"
          height={200}
          width={200}
        />
      </Link>

      <div className="flex justify-center gap-5 items-center">
        <p className="blinker-semibold text-center text-base">{data.name}</p>

        <div className="flex items-center min-h-10 max-h-10">
          {data.price ? <MdCurrencyRupee /> : ""}
          <p>{data.price}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <FaRegHeart />
        <button
          className=" border-2 border-red-400 text-red-400 w-fit px-3 rounded-md"
          onClick={() => handleAddTocart()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Products;
