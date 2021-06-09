import React from "react";
import { Link } from "react-router-dom";
import './allcomponent.css'
import { useSelector } from "react-redux";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

export const ProductComponent = () => {
  const products = useSelector((state: any) => state.allProducts.products);
  const renderList = products.map((product:any) => {
    const { id, title, image, price, category } = product;
    return (
            
            
            <Card style={{width:'23%',height:"30rem"}}>   
            <Link to={`/product/${id}`}>      
            <CardImg style={{height:"18rem"}} top width="100%" src={image} alt={title} />
            </Link>
            <CardBody style={{height:"auto"}}>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">₹{price}</CardSubtitle>
            <CardText>{category}</CardText>
            </CardBody>
            </Card>
            
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;