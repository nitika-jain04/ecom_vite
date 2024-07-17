import { actionType } from "../constants/actionType";

const initialState = {
  cartItems: [],
  totalCartSize: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADDTOCART: {
      let newCartItems = state.cartItems.slice();

      let index = newCartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        newCartItems[index] = {
          ...newCartItems[index],
          qty: newCartItems[index].qty + 1,
        };
      } else {
        newCartItems.push({ ...action.payload, qty: 1 });
      }

      state.cartItems = newCartItems;
      state.totalCartSize++;
      console.log(state.cartItems);
      return { ...state };
    }

    case actionType.REMOVEFROMCART: {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      const size = state.cartItems[index].qty;

      const newCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.cartItems = newCart;
      state.totalCartSize -= size;

      return { ...state };
    }

    case actionType.INCREMENTQUANTITY: {
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        console.log("increment", item.qty);
        state.totalCartSize++;
        return item;
      });

      state.cartItems = newCartItems;
      return { ...state };
    }

    case actionType.DECREMENTQUANTITY: {
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty - 1 };
        }
        console.log("decrement", item.qty);
        return item;
      });

      const filteredArray = newCartItems.filter((item) => item.qty !== 0);
      state.cartItems = filteredArray;
      state.totalCartSize--;
      return { ...state };
    }
    default:
      return state;
  }
};

export default cartReducer;
