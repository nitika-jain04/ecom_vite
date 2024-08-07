import { FaRegHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../store/actions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

const Products = ({ data }) => {
  // let clicked = false;
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  function handleAddTocart() {
    dispatch(addToCart(data));
    toast.success("Added to Cart");
  }

  function handleWishlist() {
    // clicked = !clicked;

    // if (clicked === true) {
    //   dispatch(addToWishlist(data));
    //   toast.success("Wishlisted ❤️");
    //   console.log("added");
    // } else {
    //   dispatch(removeFromWishlist(data.id));
    //   toast.success("Removed from Wishlist");
    //   console.log("removed");
    // }
    // console.log(clicked);

    setClicked((prevClicked) => {
      const newClicked = !prevClicked;

      if (newClicked) {
        dispatch(addToWishlist(data));
        toast.success("Wishlisted ❤️");
        // console.log("added");
      } else {
        dispatch(removeFromWishlist(data.id));
        toast.success("Removed from Wishlist");
        // console.log("removed");
      }

      console.log(newClicked);
      return newClicked;
    });
  }

  return (
    <div
      className={`flex flex-col justify-center gap-5 relative drop-shadow-lg shadow-red-500 py-3 px-2 rounded-md bg-purple-50 min-h-80 max-h-80 w-[160px] ${
        data.stockOut && "brightness-[0.75]"
      } `}
    >
      {data.stockOut && (
        <p className="absolute text-red-500 font-semibold text-lg top-0 right-8 brightness-100">
          Stocked Out
        </p>
      )}
      <Link to={data.stockOut ? "#" : `/product/${data.id}`}>
        <img
          src={data.image}
          alt={data.name}
          className="aspect-square rounded-md"
          height={200}
          width={200}
        />
      </Link>

      <div className="flex justify-center gap-3 items-center">
        <p className="blinker-semibold text-center text-base max-w-40">
          {data.name}
        </p>

        <div className="flex items-center min-h-10">
          {data.price && <MdCurrencyRupee />}
          <p className="relative">
            {data.mrp ? (
              <>
                <span className="absolute -top-5 right-2">{data.price}</span>
                <span className="mr-2 line-through decoration-red-600 decoration-2">
                  {data.mrp}
                </span>
              </>
            ) : (
              <span>{data.price}</span>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div>
          <button onClick={() => handleWishlist()}>
            {clicked ? "❤️" : <FaRegHeart />}
          </button>
        </div>

        <div>
          <button
            className="border-2 border-red-400 text-red-400 w-fit px-3 rounded-md"
            onClick={() => handleAddTocart()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
