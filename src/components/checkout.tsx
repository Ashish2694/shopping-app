import React,{useState} from 'react'
import Address from './Address'
import Payment from './payment'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./allcomponent.css"
import { Collapse, Button } from 'reactstrap';
const Checkout = () => {
    const { price}:any = useParams();
    
    const [isOpen, setIsOpen] = useState<any>(false);
    const toggle = () => setIsOpen(!isOpen);

    
    const [isOpens, setIsOpens] = useState<any>(false);
    const toggles = () => setIsOpens(!isOpens);
    


    return (
        
        <div>

            
                <div className="container-fluid checkout-container">
            <div className="row">
            <div className="col-sm-8 ">
                <div className="checkout-left">
                    <h2>checkout</h2>
                    <hr/>
                <Button className="address-collapse" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Shipping Address</Button>
                <Collapse isOpen={isOpen}>
                    <Address/>
                </Collapse>
                <Button className="address-collapse" color="primary" onClick={toggles} style={{ marginBottom: '1rem' }}>Payments</Button>
                <Collapse isOpen={isOpens}>
                    <Payment/>
                </Collapse>
                  
                    {/* <Link to="/checkout"><button className ="button3" >PLACE ORDER</button></Link> */}
                </div>
            </div>
            <div className="col-sm-4 cart-right">
                <div className="prices-details">
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
               <Link to="/popup" ><button className ="button_conferm" >Conferm Order</button></Link>
                
                </div>
            </div>
            </div>
        </div>
            
            
        </div>
    )
}

export default Checkout
