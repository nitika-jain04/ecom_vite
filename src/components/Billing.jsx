import { useSelector } from "react-redux";
import { MdClose } from "react-icons/md";

function Billing({ handleCart }) {
  const cart = useSelector((state) => state.cart);
  const cartData = cart.cartItems;
  // console.log(cartData, "cart");

  // const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
  //   return totalNumberOfItems + item.quantity;
  // }, 0);

  // const cartTotal = cartCtx.items.reduce((totalCartAmount, item) => {
  //   return totalCartAmount + item.price * item.quantity;
  // }, 0);

  return (
    <div className="bg-white absolute top-0 right-0 h-[100vh] sm:w-1/2 w-full px-10 py-5 flex flex-col gap-3 justify-between">
      <div className="flex items-center justify-between">
        <p className="text-xl blinker-semibold tracking-wide">Cart</p>
        <MdClose size={20} onClick={() => handleCart(false)} />
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
  return cartData.map((data) => (
    <div
      key={data.id}
      className="flex items-start gap-5 p-2 blinker-semibold shadow-md"
    >
      <img
        src={data.image}
        alt={data.name}
        className="w-24 h-24 object-fill rounded-md"
      />
      <div className="flex flex-col gap-3">
        <p className="">{data.name}</p>
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <button className="px-2 border">-</button>
            <p className="px-2">1</p>
            <button className="px-2 border">+</button>
          </div>
          <div>${data.price}</div>
        </div>
      </div>
    </div>
  ));
}

export default Billing;
