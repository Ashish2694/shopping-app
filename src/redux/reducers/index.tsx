import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,addToCartReducer } from "./productsReducer";
export const reducers = combineReducers({
  allProducts: productsReducer,
  product  : selectedProductsReducer,
  cartProduct : addToCartReducer,
});
export default reducers;