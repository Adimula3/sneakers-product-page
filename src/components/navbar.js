import React, {useState} from "react";
import {NavLink} from "react-bootstrap";
import '../styles/style.css'
import Brand from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.png";
import Cart from "../pages/cart";
import CartIcon from '../assets/images/icon-cart.svg';
import MobileNav from "./mobileNav";


const Navbar = ({cartProductQuantity, setCartProductQuantity}) => {
    const  [openCart, setOpenCart] = useState(false)
  return (
      <div>
          <nav id="navbar" className="navbar navbar-expand-lg d-flex">
              <div className="container">
                  <MobileNav />
                  <NavLink className="navbar-brand" to="/"><img src={Brand} alt="brand"/></NavLink>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <NavLink to=""  className="nav-link">Collections</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="" className="nav-link">Men</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to=""  className="nav-link">Women</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to=""  className="nav-link">About</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to=""  className="nav-link">Contact</NavLink>
                      </li>
                  </ul>
                  <div className="right-nav d-flex">
                      <NavLink to=""  className="nav-link" onClick={(e) => e.preventDefault()}><img src={CartIcon} alt="" className="cart" onClick={() => setOpenCart(true)}/></NavLink>
                      {cartProductQuantity > 0 && (
                          <span className="basket">{cartProductQuantity}</span>

                      )}

                      <NavLink to=""  className="nav-link"><img className="avatar" src={Avatar} alt="brand"/></NavLink>
                  </div>
                  {openCart && (
                      <Cart
                          setOpenCart={setOpenCart}
                          cartProductQuantity={cartProductQuantity}
                          setCartProductQuantity={setCartProductQuantity}
                      />
                  )}

              </div>
          </nav>
      </div>


  );
}
export default Navbar;
