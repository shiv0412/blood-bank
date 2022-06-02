import React from "react";
import logo from "../Images/logomain.png";
import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import UID from "uniquebrowserid";
import { adminLogout } from "../Redux/actions/actionData";

let Menu = (props: any) => {

  const history = useHistory();
  const key = new UID().completeID();

  const authenticate = () => {

    const isLogin = props.values.filter((cvalue: any) => {
      return cvalue.key === key;
    });

    if(isLogin.length===0){
      history.push("/adminlogin");
    }
    else{
      history.push("/admin");
    }
  };

  const userLogout = () =>{
    props.dispatch(adminLogout(key))
    history.push("/adminlogin");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid nav_mar_more">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              height="65"
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
                    href="#"
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
                    href="#"
                  >
                    Find Donar
                  </a>
                </li>
              </NavLink>
              <span className="menu_links" onClick={() => authenticate()}>
                <li className="nav-item link_menu_item">
                  <a
                    className="anchor_link_menu_manage"
                    aria-current="page"
                    href="#"
                  >
                    Blood Bank
                  </a>
                </li>
              </span>
              <NavLink to="/contactus" className="menu_links">
                <li className="nav-item link_menu_item">
                  <a
                    className="anchor_link_menu_manage"
                    aria-current="page"
                    href="#"
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
                    href="#"
                  >
                    About Us
                  </a>
                </li>
              </NavLink>
              <button onClick={userLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

function mapStateToProps(state: { authentication: any }) {
  return {
    values: state.authentication,
  };
}
export default connect(mapStateToProps)(Menu);
