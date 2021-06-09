import React, { useEffect } from "react";
import axios from "axios";
import "./allcomponent.css"
import { Link } from "react-router-dom";
import {Container,Row,Col,Button} from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/ProductsActions";
const ProductDetails = () => {
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
  const {id,image, title, price, category, description } = product;
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
       <Container>
        <Row>
            <Col xs={6}>
              <img className="image" src={image}/>
              <br/>
              <div className="buttons">
              <ul>
                <li>
                </li>
                <li>
                  <Link to={`/cart/${id}`}><button className ="button2" >ADD TO CART</button></Link>
                  </li>
              </ul>
              </div>
              </Col>
            <Col xs={6}>
              <h1>{title}</h1>
              <h5>({category})</h5>
              <h1><span>Price</span> $ {price}</h1>
              <hr/>
              <h4>{description}</h4>
            </Col>
        </Row>
      </Container>
    
      )}
    </div>
  );
};

export default ProductDetails;