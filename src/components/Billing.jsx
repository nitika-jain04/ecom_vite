import { useDispatch, useSelector } from "react-redux";
import { MdClose, MdCurrencyRupee } from "react-icons/md";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/actions";
import { MdDelete } from "react-icons/md";
import { emptycart } from "../assets/img";
import { Link } from "react-router-dom";

function Billing({ handleCart }) {
  const cart = useSelector((state) => state.cart);
  const cartData = cart.cartItems;
  const cartSize = cart.totalCartSize;

  const totalAmount = cartData.reduce(
    (acc, item) => (acc += item.price * item.qty),
    0
  );

  return (
    <div className="bg-white absolute top-0 right-0 h-[100vh] sm:w-1/2 w-[90vw] px-5 py-5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <p className="text-xl blinker-semibold tracking-wide">
          Shopping Cart({cartSize})
        </p>
        <MdClose
          size={22}
          onClick={() => handleCart(false)}
          className="cursor-pointer"
        />
      </div>

      <div className="min-h-[60vh] max-h-[60vh] flex flex-col gap-1 overflow-y-auto overscroll-none custom-scrollbar">
        {cart && cartData.length > 0 ? (
          <Cart cartData={cartData} />
        ) : (
          <EmptyCart />
        )}
      </div>

      <hr className="border-t-2 border-red-400" />

      <div className="flex items-center gap-5">
        <p className="blinker-semibold text-lg">Subtotal</p>
        <p className="blinker-semibold flex items-center text-lg">
          <span>
            <MdCurrencyRupee />
          </span>
          {totalAmount ? totalAmount : 0}
        </p>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <img src={emptycart} alt="Empty Cart" height={150} width={150} />
      <p className="blinker-semibold text-lg">Your cart is Empty</p>
      <Link to="/">
        <button className="border-red-400 border-2 p-1">Keep Browsing</button>
      </Link>
    </div>
  );
}

function Cart({ cartData }) {
  const dispatch = useDispatch();

  return cartData.map((data) => (
    <div className="flex justify-between p-2 blinker-semibold shadow-md">
      <div key={data.id} className="flex items-start justify-between gap-5">
        <img
          src={data.image}
          alt={data.name}
          className="w-24 h-24 object-fill rounded-md"
        />
        <div className="flex flex-col gap-3">
          <p className="sm:max-w-16 md:max-w-32">{data.name}</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <button
                className="px-2 border"
                onClick={() => dispatch(decrementQuantity(data.id))}
              >
                -
              </button>
              <p className="px-2">{data.qty}</p>
              <button
                className="px-2 border"
                onClick={() => dispatch(incrementQuantity(data.id))}
              >
                +
              </button>
            </div>
            <div>{data.price && `${data.price * data.qty}`}</div>
          </div>
        </div>
      </div>

      <div>
        <MdDelete
          onClick={() => dispatch(removeFromCart(data.id))}
          className="cursor-pointer"
        />
      </div>
    </div>
  ));
}

export default Billing;
