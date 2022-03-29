import React from "react";
import ServiceCard from "./ServiceCard";
import img1 from "../Images/donarcard.jpg";
import admin from "../Images/admincard.png";
import bloodbank from "../Images/bloodbandcard.jpg";
import finddonar from "../Images/find donar.jpg";
import { Link } from "react-router-dom";

let Services = () => {
  return (
    <div>
      <div className="Container-fluid">
        <div className="servicepage_header_container">
          <h2 className="services_heading" id="servicespage_heading">
            Our Services
          </h2>
          <hr id="servicepage_hr" />
        </div>
        <div className="row" id="servivepage_cards_row">
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <Link to="/donarsearch">
              <ServiceCard image={finddonar} val="Find Donar"></ServiceCard>
            </Link>
          </div>
          <div className=" col-6 col-sm-6 col-md-3 col-lg-3">
            <Link to="/donarregister">
              <ServiceCard image={admin} val="Admin Pannel"></ServiceCard>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <ServiceCard image={bloodbank} val="Blood Banks"></ServiceCard>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <ServiceCard image={img1} val="Donate Blood"></ServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
