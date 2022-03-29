import React from "react";
import imginfo from "../Images/donationFact.jpg";

let Information = () => {
  return (
    <div>
      <div className="information_page_container">
        <h2 className="services_heading">Learn About Donation</h2>
        <hr id="information_page_hr" />
      </div>
      <div className="container-fluid">
        <div className="row" id="info_page_row">
          <div className="col-md-6 manage_info_container">
            <img src={imginfo} className="img_info"></img>
          </div>
          <div className="col-md-6 manage_info_container">
            <table className="table_info">
              <tr>
                <th colSpan={3} className="infopage_table_header">
                  Compatible Blood Type Donation
                </th>
              </tr>
              <tr>
                <th>Blood Type</th>
                <th>Donate Blood To</th>
                <th>Receive Blood From</th>
              </tr>
              <tr>
                <td>A+</td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td>O+</td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td>B+</td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td>AB+</td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td>A-</td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td>O-</td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td>B-</td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td>AB-</td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
