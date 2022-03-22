import React from "react";
import logo from "../Images/logomain.png";
import {Link} from "react-router-dom";

let Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid nav_mar_more">
            <Link to='/'>
            <img src={logo} alt="logo" height="65" className="manage_logo_img"></img>
           </Link>
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
            <Link to='/donarsearch' style={{textDecoration:"none"}}>
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  Find Donar
                </a>
              </li>
              </Link>
              <Link to='/aboutus' style={{textDecoration:"none"}}>
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              </Link>
              <Link to='/' style={{textDecoration:"none"}}>
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
              </Link>
              <Link to='/donarregister' style={{textDecoration:"none"}}>
              <li className="nav-item link_menu_item">
                <a className="anchor_link_menu_manage" aria-current="page" href="#">
                  Admin
                </a>
              </li>
              </Link>
             </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Menu;
