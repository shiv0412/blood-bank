/* library imports */
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import UID from "uniquebrowserid";
import styled from "styled-components";
/* custom imports */
import { adminLogout } from "../Redux/actions/actionData";
import { IReduxStore } from "../Redux/reducers/initialState";
import logo from "../Images/logomain.png";

/* styled components */

const Span = styled.span`
  font-weight: bold;
  color: #566573;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: orangered;
  }
`;

/* main component */

const Menu = (props: any) => {
  const history = useHistory();
  const key = new UID().completeID();

  const userLogout = () => {
    props.dispatch(adminLogout(key));
    props.auth();
    history.push("/adminlogin");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid nav_mar_more">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              height="40"
              className="manage_logo_img"
            ></img>
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
              <NavLink to="/" className="menu_links">
                <li className="nav-item link_menu_item">
                  <a
                    className="anchor_link_menu_manage"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink to="/donarsearch" className="menu_links">
                <li className="nav-item link_menu_item">
                  <a
                    className="anchor_link_menu_manage"
                    aria-current="page"
                    href="/"
                  >
                    Need Blood
                  </a>
                </li>
              </NavLink>
              <li className="nav-item dropdown link_menu_item">
                <a
                  className=" dropdown-toggle anchor_link_menu_manage"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blood Banks
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "#FBFCFC", border: "none" }}
                >
                  <NavLink to="/admin" className="menu_links">
                    {" "}
                    <li>
                      <a className="dropdown-item" href="/">
                        <Span>Admin Pannel</Span>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to="/registerbloodbank" className="menu_links">
                    <li>
                      <a className="dropdown-item" href="/">
                        <Span>Register</Span>
                      </a>
                    </li>
                  </NavLink>
                  {props.isActive ? (
                    <NavLink to="/adminlogin" className="menu_links">
                      <li>
                        <a className="dropdown-item" href="/">
                          <Span>Login</Span>
                        </a>
                      </li>
                    </NavLink>
                  ) : (
                    <li onClick={userLogout}>
                      <span className="dropdown-item" >
                        <Span>Logout</Span>
                      </span>
                    </li>
                  )}{" "}
                </ul>
              </li>
              <NavLink to="/contactus" className="menu_links">
                <li className="nav-item link_menu_item">
                  <a
                    className="anchor_link_menu_manage"
                    aria-current="page"
                    href="/"
                  >
                    Contact Us
                  </a>
                </li>
              </NavLink>
              <NavLink to="/aboutus" className="menu_links">
                <li className="nav-item link_menu_item">
                  <a
                    className="anchor_link_menu_manage"
                    aria-current="page"
                    href="/"
                  >
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

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.adminAccount,
  };
}
export default connect(mapStateToProps)(Menu);
