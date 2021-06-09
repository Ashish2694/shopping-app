import React from 'react'
import "./allcomponent.css"
const Address = () => {
    return (
        <div>
            <div className="container">
                    <h1>Shipping</h1>
                    <hr />
                    <div className="form">
    
                    <div className="fields fields--2">
                    
                    <input className="field__input" type="text" id="firstname" placeholder="First Name" />
        
                    <input className="field__input" type="text" id="lastname" placeholder="Last Name" />
    
                    </div>
                   
                    <input className="field__input" type="text" id="address" placeholder="Address" />
                    <input className="field__input" type="text" id="zipcode" placeholder="Zip Code"/>
                    <input className="field__input" type="text" id="city" placeholder="City"/>
                    <label className="field">
                        <span className="field__label" >Country</span>
                        <select className="field__input" id="country" placeholder="Country">
                        <option value=""></option>
                        <option value="unitedstates">United States</option>
                        </select>
                    </label>
                    <div className="fields fields--3">
                        <label className="field">
                        <span className="field__label" >State</span>
                        <select className="field__input" id="state">
                            <option value=""></option>
                        </select>
                        </label>
                        <button className ="button_add" >Submit</button>
                    </div>
                    </div>
                    <hr/>
                    
            </div>
        </div>
    )
}

export default Address
