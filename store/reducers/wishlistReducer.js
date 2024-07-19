import { actionType } from "../constants/actionType";

const initialState = {
  wishListItems: [],
};

const wishlistCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADDTOWISHLIST: {
      state.wishListItems.push(action.payload);
      console.log(state.wishListItems);

      return { ...state };
    }

    case actionType.REMOVEFROMWISHLIST: {
      const newWishlistItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );

      state.wishListItems = newWishlistItems;
      console.log(state.wishListItems);

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default wishlistCartReducer;
