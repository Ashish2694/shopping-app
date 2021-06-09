import React, { useEffect } from "react";
import axios from "axios";
import "./allcomponent.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/ProductsActions";
const Cart=()=>{
    const { productId }:any = useParams();
  let product = useSelector((state:any) => state.product);
  
  const dispatch = useDispatch();
  const fetchProductDetail = async (id:any) => {
    const response:any = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  const {id,image, title, price, category,} = product;
    return(
        <div className="cart-main-div">
        <div className="container cart-container">
            <div className="row">
            <div className="col-sm-8 left">
                <div className="cart">
                    <h2>My cart</h2>
                    <hr/>
                    <div className="d-flex justify-content-around">
                    <img className="cartimage" src={image}/>
                    <div className="cart-details">
                    <h2>{title}</h2>
                    <p>({category})</p>
                    <br/>
                    <h1><span>Price</span> $ {price}</h1>
                    </div>
                    </div>
                    <hr/>
                    <Link to= {`/checkout/:${price}`}><button className ="button3" >PLACE ORDER</button></Link>
                </div>
            </div>
            <div className="col-sm-4 cart-right">
                <div className="price-details">
                    <h4>Price Details</h4>
                    <hr></hr>
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <div className="p-2 bd-highlight">
                        <div className="d-flex justify-content-between">
                            <p>Price</p>
                            <p>${price}</p>
                        </div>
                        </div>
                        <div className="p-2 bd-highlight">
                            <div className="d-flex justify-content-between">
                                <p>Discount</p>
                                <p>0</p>
                            </div>
                         </div>
                        <div className="p-2 bd-highlight">
                            <div className="d-flex justify-content-between">
                                <p>Delivery Charges</p>
                                <p>Free</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="p-2 bd-highlight">
                            <div className="d-flex justify-content-between">
                                <h3>Total</h3>
                                <h3>${price}</h3>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );

}

export default Cart;