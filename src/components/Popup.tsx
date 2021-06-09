import React from 'react'
import { Link } from "react-router-dom";
function Popup() {
    return (
        <div style={{alignItems:'center',textAlign:"center"}}className="popup">
            <div className="popup-inner">
            <h3>Hi, Your order is succesfully Placed<span className="span"></span></h3>
            <br></br>
                 <br></br>
             <Link to="/"><button className="button" >Home</button></Link>
                
            </div>
        </div>
    );
}

export default Popup;