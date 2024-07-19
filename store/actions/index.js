import { actionType } from "../constants/actionType";

export const addToCart = (value) => {
  return { type: actionType.ADDTOCART, payload: value };
};

export const removeFromCart = (value) => {
  return { type: actionType.REMOVEFROMCART, payload: value };
};

export const incrementQuantity = (value) => {
  return { type: actionType.INCREMENTQUANTITY, payload: value };
};

export const decrementQuantity = (value) => {
  return { type: actionType.DECREMENTQUANTITY, payload: value };
};

export const addToWishlist = (value) => {
  return { type: actionType.ADDTOWISHLIST, payload: value };
};

export const removeFromWishlist = (value) => {
  return { type: actionType.REMOVEFROMWISHLIST, payload: value };
};
