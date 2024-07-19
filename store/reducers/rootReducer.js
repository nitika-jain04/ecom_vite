import cartReducer from "./cartReducer";
import { combineReducers } from "redux";
import wishlistCartReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistCartReducer,
});

export default rootReducer;
