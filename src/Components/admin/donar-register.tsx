/* library imports */
import React from "react";
import { Formik, Form, Field } from "formik";
import { useLocation, useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import { connect } from "react-redux";
/* custom imports */
import { dataAction, updateDonar } from "../../Redux/actions/actionData";
import { IReduxStore } from "../../Redux/reducers/initialState";
import CustomErrorMessage from "../custom-components/custom-error-message";
import { IRegisteredDonor } from "../../models/models";
import { dateFinder, toastNotification } from "../functions/functions";
interface Data {
  id: string;
}

/* form validation */
const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Z_ ]*$/, "name must be in alphabets")
    .required(),
  phone: yup
    .number()
    .min(1000000000, "not a valid phone number")
    .max(999999999999, "not a valid phone number")
    .required("phone number must be required"),
  Gender: yup.string().required("gender is required field"),
  Bloodgroup: yup.string().required("blood group must required"),
  City: yup
    .string()
    .matches(/^[a-zA-Z]*$/, "city name must be in alphabets")
    .required(),
  State: yup
    .string()
    .matches(/^[a-zA-Z_ ]*$/, "state name must be in alphabets")
    .required(),
  Pincode: yup
    .number()
    .min(100000, "pincode must be of six digit")
    .max(999999, "pincode must be of six digit")
    .required(),
  RegDate: yup.string().required(),
  Address: yup.string().required(),
  Bloodbank: yup.string().required("Blood Bank must be required"),
  DateOfBirth: yup
    .date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
});

/* main component */

let DonarRegister = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const userID = location.state as Data;
  let donorDetails;
  if (userID.id !== "") {
    donorDetails = props.values.filter((donorDetails: IRegisteredDonor) => {
      return donorDetails.id === userID.id;
    });
  } else {
    donorDetails = [
      {
        name: "",
        phone: "",
        DateOfBirth: "",
        Bloodgroup: "",
        Gender: "",
        City: "",
        State: "",
        Pincode: "",
        RegDate: dateFinder(),
        Address: "",
        Bloodbank: props.admin[0].bloodbank_name,
        medical: "",
      },
    ];
  }

  return (
    <div className="main_container_donarergister">
      <div>
        <h2 className="header_donarregister_form">Donor Entry Form</h2>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          id: userID.id || "",
          name: donorDetails[0].name,
          phone: donorDetails[0].phone,
          DateOfBirth: donorDetails[0].DateOfBirth,
          Bloodgroup: donorDetails[0].Bloodgroup,
          Gender: donorDetails[0].Gender,
          City: donorDetails[0].City,
          State: donorDetails[0].State,
          Pincode: donorDetails[0].Pincode,
          RegDate: donorDetails[0].RegDate,
          Address: donorDetails[0].Address,
          Bloodbank: donorDetails[0].Bloodbank,
          medical: donorDetails[0].medical,
          Status: "Approved",
        }}
        onSubmit={(donorDetails: IRegisteredDonor) => {
          if (donorDetails.id === "") {
            toastNotification("Register successfully !!!");
            props.dispatch(dataAction(donorDetails));
            history.push("/adminpannel");
          } else {
            toastNotification("Donor details successfully updated");
            props.dispatch(updateDonar(donorDetails));
            history.push("/adminpannel");
          }
        }}
      >
        <Form className="donarregister_form_comp">
          <div className="container">
            <div className="row" id="form_data_row">
              <div className="col-md-4">
                <label className="label_donarregister">Name*</label>
                <Field
                  name="name"
                  type="text"
                  className="donarregister_fields"
                ></Field>
                <CustomErrorMessage name="name"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label className="label_donarregister">Phone*</label>
                <Field
                  name="phone"
                  type="number"
                  className="donarregister_fields"
                ></Field>
                <CustomErrorMessage name="phone"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label className="label_donarregister">DateOfBirth*</label>
                <Field
                  name="DateOfBirth"
                  type="date"
                  className="donarregister_fields"
                ></Field>
                <CustomErrorMessage name="DateOfBirth"></CustomErrorMessage>
              </div>
            </div>
            <div className="row" id="form_data_row">
              <div className="col-md-4">
                <label>Gender*</label>
                <br />
                <label>Male</label>
                <Field
                  name="Gender"
                  value="Male"
                  type="radio"
                  className="radio_button_donarregister"
                ></Field>
                <label>Female</label>
                <Field
                  name="Gender"
                  value="Female"
                  type="radio"
                  className="radio_button_donarregister"
                ></Field>
                <br />
                <CustomErrorMessage name="Gender"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label className="label_donarregister">Blood Group*</label>
                <Field
                  name="Bloodgroup"
                  as="select"
                  className="donarregister_fields"
                >
                  <option>Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                  <option value="B-">B-</option>
                </Field>
                <CustomErrorMessage name="Bloodgroup"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label className="label_donarregister">
                  Registration Date*
                </label>
                <p className="donarregister_fields">
                  {donorDetails[0].RegDate}
                </p>
                <CustomErrorMessage name="RegDate"></CustomErrorMessage>
              </div>
            </div>
            <div className="row" id="form_data_row">
              <div className="col-md-12">
                <label className="label_donarregister">Address*</label>

                <Field
                  name="Address"
                  type="textarea"
                  className="donarregister_fields"
                ></Field>
                <CustomErrorMessage name="Address"></CustomErrorMessage>
              </div>
            </div>

            <div className="row" id="form_data_row">
              <div className="col-md-4">
                <label className="label_donarregister">District/City*</label>

                <Field
                  name="City"
                  type="text"
                  className="donarregister_fields"
                ></Field>
                <CustomErrorMessage name="City"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label className="label_donarregister">State*</label>

                <Field
                  name="State"
                  type="text"
                  className="donarregister_fields"
                ></Field>
                <CustomErrorMessage name="State"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label className="label_donarregister">Pincode*</label>

                <Field
                  name="Pincode"
                  type="number"
                  className="donarregister_fields"
                ></Field>
                <CustomErrorMessage name="Pincode"></CustomErrorMessage>
              </div>
            </div>

            <div className="row" id="form_data_row">
              <div className="col-md-12">
                <label className="label_donarregister">
                  Medical Description
                </label>
                <Field
                  name="medical"
                  type="textarea"
                  className="donarregister_fields_textarea"
                ></Field>
                <CustomErrorMessage name="medical"></CustomErrorMessage>
              </div>
            </div>

            <div className="row" id="form_data_row">
              <div className="col-md-12 button_container_donarregister">
                <button type="submit" className="donar_form_submit_button">
                  Submit
                </button>
                <Link to="/adminpannel">
                  <button className="donar_form_cancel_button">Cancel</button>
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.registeredDonars,
  };
}
export default connect(mapStateToProps)(DonarRegister);
