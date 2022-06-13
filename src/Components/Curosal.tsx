/* library imports */
import React from "react";
import { Link } from "react-router-dom";

/* custom imports */
import banner1 from "../Images/bnew3.jpg";
import banner2 from "../Images/mainfive.jpg";
import banner3 from "../Images/bnew.jpg";

/* main component //Bootstrap5 based component */

const Curosal = () => {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={banner2}
              className="d-block w-100 curosal_img_styling"
              alt="..."
              height="450"
            />
            <Link to="/donarsearch">
              <button className="find_donar_curosal_button">
                Find Blood Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curosal;
