import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/actions";
import { MdDelete } from "react-icons/md";

function Billing({ handleCart }) {
  const cart = useSelector((state) => state.cart);
  const cartData = cart.cartItems;
  const cartSize = cart.totalCartSize;
  console.log(cartSize, "cart");

  // const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
  //   return totalNumberOfItems + item.quantity;
  // }, 0);

  // const cartTotal = cartCtx.items.reduce((totalCartAmount, item) => {
  //   return totalCartAmount + item.price * item.quantity;
  // }, 0);

  return (
    <div className="bg-white absolute top-0 right-0 h-[100vh] sm:w-1/2 w-[80vw] px-10 py-5 flex flex-col gap-3 justify-between">
      <div className="flex items-center justify-between">
        <p className="text-2xl blinker-semibold tracking-wide">
          Cart({cartSize})
        </p>
        <MdClose size={25} onClick={() => handleCart(false)} />
      </div>

      <div className="min-h-[70vh] max-h-[70vh] flex flex-col gap-1 overflow-y-auto overscroll-none custom-scrollbar">
        {cart && cartData.length > 0 ? (
          <Cart cartData={cartData} />
        ) : (
          <EmptyCart />
        )}
      </div>

      <div className="flex">
        <p>Subtotal</p>
      </div>
    </div>
  );
}

function EmptyCart() {
  return <div>Empty Cart</div>;
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
          <p className="">{data.name}</p>
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
            <div>{data.price && `${data.price}`}</div>
          </div>
        </div>
      </div>

      <div>
        <MdDelete onClick={() => dispatch(removeFromCart(data.id))} />
      </div>
    </div>
  ));
}

export default Billing;
