// import { useState, useEffect } from 'react';
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faBars} />
      <ul className="list">
        <li className="items">Shop</li>
        <li className="items">About Us</li>
        <img
          src={
            "https://cdn.shopify.com/s/files/1/2386/2119/t/12/assets/logo-green.svg"
          }
          alt="logo"
          className="logo-image"
        />
        <li className="items">Help</li>
        <li className="items">Sign In</li>
        <li className="items">Cart</li>
      </ul>
    </div>
  );
};

export default Nav;
