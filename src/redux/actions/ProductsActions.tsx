import { ActionTypes } from "../constants/action-types";

export const setProducts = (products:any) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product:any) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};


export const addProductToCart = (product:any) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: product
  };
};