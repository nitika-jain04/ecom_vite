import { actionType } from "../constants/actionType";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADDTOCART: {
      state.cartItems.push(action.payload);
      console.log(state.cartItems);

      return { ...state };
    }

    case actionType.REMOVEFROMCART: {
      const newCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = newCart;

      return { ...state };
    }

    // case actionType.INCREMENTQUANTITY:{

    // }

    default:
      return state;
  }
};

export default cartReducer;
