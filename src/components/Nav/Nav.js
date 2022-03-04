import { useState, useEffect } from 'react';
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, []);

  return (
    <div className="navbar">
      {(screenWidth < 580 ? (
        <nav>
          <img
            src={
              "https://cdn.shopify.com/s/files/1/2386/2119/t/12/assets/logo-green.svg"
            }
            alt="logo"
            className="logo-image"
          />
          {
            toggleMenu && (
              <ul className="list">
                <li className="items">Shop</li>
                <li className="items">About Us</li>
                <li className="items">Help</li>
                <li className="items">Sign In</li>
                <li className="items">Cart</li>
              </ul>
            )
          }
          <button className="menu-btn" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </nav>
      ) : (
          <nav>
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
          </nav>
        ))}

    </div>
  );
};

export default Nav;
