import React from 'react'

const Payment = () => {
    return (
        <div>
            
<div className="container">
  <div id="Checkout" className="inline">
      <h1>Pay Invoice</h1>
      <div className="card-row">
          <span className="visa"></span>
          <span className="mastercard"></span>
          <span className="amex"></span>
          <span className="discover"></span>
      </div>
      <form>
          <div className="form-group">
              <label >Payment amount</label>
              <div className="amount-placeholder">
              </div>
          </div>
          <div className="form-group">
              <label >Name on card</label>
              <input id="NameOnCard" className="form-control" type="text"></input>
          </div>
          <div className="form-group">
              <label >Card number</label>
              <input id="CreditCardNumber" className="null card-image form-control" type="text"></input>
          </div>
          <div className="expiry-date-group form-group">
              <label >Expiry date</label>
              <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY"></input>
          </div>
          <div className="security-code-group form-group">
              <label >Security code</label>
              <div className="input-container" >
                  <input id="SecurityCode" className="form-control" type="text" ></input>
                  <i id="cvc" className="fa fa-question-circle"></i>
              </div>
              <div className="cvc-preview-container two-card hide">
                  <div className="amex-cvc-preview"></div>
                  <div className="visa-mc-dis-cvc-preview"></div>
              </div>
          </div>
          <div className="zip-code-group form-group">
              <label >ZIP/Postal code</label>
              <div className="input-container">
                  <input id="ZIPCode" className="form-control" type="text" ></input>
                  <a  role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i className="fa fa-question-circle"></i></a>
              </div>
          </div>
          <button id="PayButton" className="btn btn-block btn-success submit-button" type="submit">
              <span className="submit-button-lock"></span>
              <span className="align-middle">Pay</span>
          </button>
      </form>
  </div>
</div>
        </div>
    )
}

export default Payment;
