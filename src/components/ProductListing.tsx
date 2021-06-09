import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductsActions";
import ProductComponent from "./ProductComponent2";
import './allcomponent.css'

const ProductPage = () => {
  const products = useSelector((state:any) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response :any = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="containers">
      <ProductComponent />
      </div>

  );
};

export default ProductPage;