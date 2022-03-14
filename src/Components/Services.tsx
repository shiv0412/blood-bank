import React from "react";
import ServiceCard from "./ServiceCard";
import img1 from "../Images/donarcard.jpg";
import admin from "../Images/admincard.png";
import bloodbank from "../Images/bloodbandcard.jpg";
import finddonar from "../Images/find donar.jpg";
import {Link} from "react-router-dom";

let Services = () => {
    return(
        <div>
            <div className="Container-fluid">
            <div style={{textAlign:"center"}}>
                <h2 className="services_heading">Our Services</h2>
                <hr style={{width:"10%",display:"inline-block",height:"2.5px",color:"red"}}/>
            </div>
                <div className="row" style={{padding:"20px 0",margin:"0 0 50px 0",backgroundColor:"black"}}>
                
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                    <Link to='/donarsearch'>
                    <ServiceCard image = {finddonar} val="Find Donar"></ServiceCard>
                    </Link>
                    </div>
                    <div className=" col-6 col-sm-6 col-md-3 col-lg-3">
                    <Link to='/donarregister'>
                    <ServiceCard image = {admin} val="Admin Pannel"></ServiceCard>
                    </Link>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                    <ServiceCard image = {bloodbank} val="Blood Banks"></ServiceCard>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                    <ServiceCard image = {img1} val="Donate Blood"></ServiceCard>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;