import React from "react";

let ServiceCard = (props: any) => {
  return (
    <div>
      <div className="cardnen">
        <img className="img-ccard" src={props.image} alt="imageText"/>
        <a className="btn" href="/">
        </a>
        <small className="mtnpaiin">{props.val}</small>
      </div>
    </div>
  );
};
export default ServiceCard;
