import React from "react";

let Footer = () => {
  return (
    <div className="main_footer_container">
      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-12" id="footer_container_two">
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 m-b-30">
                    <div className="m-t-5 m-b-20 p-b-8 styles.footer-title">
                      <h2>About us</h2>
                    </div>
                    <p className="white-text">
                    Safe and Adequate Blood Supplies.<br/>
                    Web Based Application.<br/>
                    Appointment for Blood Bank.<br/>
                    Add your Blood Bank.
                    </p>
                  </div>
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      Our Services
                    </div>
                    <div className="footer-links">
                      <a href="#">Appointment</a>
                      <a href="#">Blood Banks</a>
                      <a href="#">Find Donar</a>
                      <a href="#">Donate Blood</a>
                    </div>
                  </div>
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      Quick Links
                    </div>
                    <div className="footer-links">
                      <a href="#">Blog</a>
                      <a href="#">FAQ</a>
                      <a href="#">Terms & conditions</a>
                      <a href="#">Privacy policy</a>
                    </div>
                  </div>
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      Support
                    </div>
                    <div className="footer-links">
                      <a href="#">Affiliate</a>
                      <a href="#">Admin Login</a>
                      <a href="#">Contact Us</a>
                      <a href="#">Support forum</a>
                    </div>

                    <div className="footer-social-links m-t-30">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <div className="footer-bottom">
              Copyright © 2022, Shivom Demo App
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
