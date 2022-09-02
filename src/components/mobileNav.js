import React from "react";
import { slide as Menu } from 'react-burger-menu';
import {NavLink} from "react-bootstrap";

const MobileNav = () => {
  return (
      <div className="mobile-nav">
          <Menu width={ '250px' } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
              <ul className="nav">
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
          </Menu>
      </div>
  );
}
export default MobileNav;
