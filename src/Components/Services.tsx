import React from "react";
import { Link } from "react-router-dom";

import ServiceCard from "./service-card";
import donationImg from "../Images/donarcard.jpg";
import adminImg from "../Images/admincard.png";
import bloodbankImg from "../Images/bloodbandcard.jpg";
import finddonarImg from "../Images/find donar.jpg";


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
              <ServiceCard image={finddonarImg} val="Search Blood"></ServiceCard>
            </Link>
          </div>
          <div className=" col-6 col-sm-6 col-md-3 col-lg-3">
            <Link to="/admin">
              <ServiceCard image={adminImg} val="Admin Pannel"></ServiceCard>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <ServiceCard image={bloodbankImg} val="Register Bloodbank"></ServiceCard>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <ServiceCard image={donationImg} val="Track Request"></ServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
