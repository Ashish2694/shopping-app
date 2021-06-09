import React from "react";
import { NavLink } from "react-router-dom";
import "./allcomponent.css";
import "bootstrap/dist/css/bootstrap.css";
import {FaShoppingCart } from 'react-icons/fa';
import logo from "./images/Ashishicon.png"



const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <img className='logo' src={logo} alt='i' />
        <h4 className='title'></h4>
       
        <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>
                Login
              </NavLink>
            </li>
           
            <li className='nav-item'>
              <NavLink className='nav-link' to = {`/emptycart`}>
                <FaShoppingCart style={{height:"30px",width:"30px"}}/>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
