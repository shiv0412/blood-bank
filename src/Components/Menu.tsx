import React from "react";
import logo from "../Images/logomain.png";
import {NavLink} from "react-router-dom";

let Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid nav_mar_more">
            <NavLink to='/'>
            <img src={logo} alt="logo" height="65" className="manage_logo_img"></img>
           </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          
            <ul className="navbar-nav menu_ul_manage">
            <NavLink to='/'  className="menu_links">
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  Home
                </a>
              </li>
              </NavLink>
            <NavLink to='/donarsearch' className="menu_links">
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  Find Donar
                </a>
              </li>
              </NavLink>
              <NavLink to='/admin' className="menu_links">
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  Admin
                </a>
              </li>
              </NavLink>
              <NavLink to='/contactus' className="menu_links">
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
              </NavLink>
              <NavLink to='/aboutus' className="menu_links">
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              </NavLink>  
             </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Menu;
