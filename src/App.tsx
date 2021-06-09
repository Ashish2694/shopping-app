import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";
import Cart from "./components/Cart";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import checkout from "./components/checkout"
import Emptycart  from "./components/Emptycart"
import Popup from "./components/Popup"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/cart/:productId" component={Cart}/>
          <Route path="/checkout/:price" component={checkout}/>
          <Route path="/emptycart" component={Emptycart }/>
          <Route path="/popup" component={Popup }/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;