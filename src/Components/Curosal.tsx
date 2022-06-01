import React from "react";
import banner1 from "../Images/bnew3.jpg";
import banner2 from "../Images/mainfive.jpg";
import banner3 from "../Images/bnew.jpg";
import {Link} from "react-router-dom";

let Curosal = () => {
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
            <Link to='/donarsearch'>
            <button className="find_donar_curosal_button">
              Find Donar Now
            </button>
            </Link>
          </div>
          <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100"
              alt="..."
              height="450"
            />
            <p className="p_two_curosal">
              Your Donar Is Just One Click Away From You.<br/>
              We are Here To Help You
            </p>
          </div>
          <div className="carousel-item">
            <img
              src={banner1}
              className="d-block w-100"
              alt="..."
              height="450"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon fontIcon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon fontIcon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Curosal; 
