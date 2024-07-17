import { actionType } from "../constants/actionType";

export const addToCart = (value) => {
  return { type: actionType.ADDTOCART, payload: value };
};

export const removeFromcart = (value) => {
  return { type: actionType.ADDTOCART, payload: value };
};

export const incrementQuantity = (value) => {
  return { type: actionType.INCREMENTQUANTITY, payload: value };
};

export const decrementQuantity = (value) => {
  return { type: actionType.DECREMENTQUANTITY, payload: value };
};
