import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";

import { IReduxStore } from "../Redux/reducers/initialState";
import { DropdownField } from "./custom-components/custom-dropdown";
import CustomErrorMessage from "./custom-components/custom-error-message";
import { registerBloodbank } from "../Redux/actions/actionData";
import { autoClose } from "./../constants";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  bloodbank_name: yup
    .string()
    .matches(/^[a-z,A-Z_ ]*$/, "name must be in alphabets")
    .required(),
  contact_person: yup
    .string()
    .matches(/^[a-zA-Z_ ]*$/, "name must be in alphabets")
    .required(),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "email should be in correct format"
    )
    .required(),
  phone: yup
    .number()
    .min(1000000000, "not a valid phone number")
    .max(999999999999, "not a valid phone number")
    .required("phone number must be required"),
  city: yup.string().required(),
  state: yup.string().required(),
  pincode: yup
    .number()
    .min(100000, "pincode must be of six digit")
    .max(999999, "pincode must be of six digit")
    .required(),
  address: yup.string().required(),
  password: yup.string().required(),
});

const RegisterBloodbank: React.FC = (props: any) => {
  const history = useHistory();
  const notify = (bloodbank:string) =>
    toast.success("Welcome!!! " + bloodbank, {
      position: "top-center",
      autoClose: autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <>
      <div className="main_container_donarergister">
        <div>
          <h2 className="header_donarregister_form">Blood Bank Registration</h2>
        </div>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            key: "",
            isLogin: false,
            id: Date.now(),
            bloodbank_name: "",
            contact_person: "",
            phone: "",
            state: "",
            city: "",
            address: "",
            pincode: "",
            email: "",
            password: "",
          }}
          onSubmit={(values: any) => {
            props.dispatch(registerBloodbank(values));
            notify(values.bloodbank_name);
            history.push("/adminlogin");
          }}
        >
          <Form className="donarregister_form_comp">
            <div className="container">
              <div className="row" id="form_data_row">
                <div className="col-md-4">
                  <label className="label_donarregister">Bloodbank Name*</label>
                  <Field
                    name="bloodbank_name"
                    type="text"
                    className="donarregister_fields"
                  ></Field>
                  <CustomErrorMessage name="bloodbank_name"></CustomErrorMessage>
                </div>
                <div className="col-md-4">
                  <label className="label_donarregister">Contact Person*</label>
                  <Field
                    name="contact_person"
                    type="text"
                    className="donarregister_fields"
                  ></Field>
                  <CustomErrorMessage name="contact_person"></CustomErrorMessage>
                </div>
                <div className="col-md-4">
                  <label className="label_donarregister">Contact Number*</label>
                  <Field
                    name="phone"
                    type="number"
                    className="donarregister_fields"
                  ></Field>
                  <CustomErrorMessage name="phone"></CustomErrorMessage>
                </div>
              </div>

              <div className="row" id="form_data_row">
                <div className="col-md-6">
                  <label className="label_donarregister">State*</label>
                  <Field
                    placeholder="Select State"
                    name="state"
                    component={DropdownField}
                    options={[
                      {
                        key: "Uttar Pradesh",
                        text: "Uttar Pradesh",
                        value: "Uttar Pradesh",
                      },
                      {
                        key: "Delhi",
                        text: "Delhi",
                        value: "Delhi",
                      },
                      {
                        key: "Karnataka",
                        text: "Karnataka",
                        value: "Karnataka",
                      },
                    ]}
                  />
                  <CustomErrorMessage name="state"></CustomErrorMessage>
                </div>
                <div className="col-md-6">
                  <label className="label_donarregister">City*</label>
                  <Field
                    placeholder="Select City"
                    name="city"
                    component={DropdownField}
                    options={[
                      {
                        key: "Lucknow",
                        text: "Lucknow",
                        value: "Lucknow",
                      },
                      {
                        key: "Noida",
                        text: "Noida",
                        value: "Noida",
                      },
                      {
                        key: "Ghaziabad",
                        text: "Ghaziabad",
                        value: "Ghaziabad",
                      },
                      {
                        key: "South Delhi",
                        text: "South Delhi",
                        value: "South Delhi",
                      },
                      {
                        key: "Aanand Vihar",
                        text: "Aanand Vihar",
                        value: "Aanand Vihar",
                      },
                      {
                        key: "Bangalore",
                        text: "Bangalore",
                        value: "Bangalore",
                      },
                      {
                        key: "Mysore",
                        text: "Mysore",
                        value: "Mysore",
                      },
                    ]}
                  />
                  <CustomErrorMessage name="city"></CustomErrorMessage>
                </div>
              </div>

              <div className="row" id="form_data_row">
                <div className="col-md-8">
                  <label className="label_donarregister">Address*</label>

                  <Field
                    name="address"
                    type="textarea"
                    className="donarregister_fields"
                  ></Field>
                  <CustomErrorMessage name="address"></CustomErrorMessage>
                </div>
                <div className="col-md-4">
                  <label className="label_donarregister">Pincode*</label>
                  <Field
                    name="pincode"
                    type="number"
                    className="donarregister_fields"
                  ></Field>
                  <CustomErrorMessage name="pincode"></CustomErrorMessage>
                </div>
              </div>

              <div className="row" id="form_data_row">
                <div className="col-md-6">
                  <label className="label_donarregister">Email*</label>

                  <Field
                    name="email"
                    type="text"
                    className="donarregister_fields"
                  ></Field>
                  <CustomErrorMessage name="email"></CustomErrorMessage>
                </div>
                <div className="col-md-6">
                  <label className="label_donarregister">Password*</label>

                  <Field
                    name="password"
                    type="password"
                    className="donarregister_fields"
                  ></Field>
                  <CustomErrorMessage name="password"></CustomErrorMessage>
                </div>
              </div>

              <div className="row" id="form_data_row">
                <div className="col-md-12 button_container_donarregister">
                  <button type="submit" className="donar_form_submit_button">
                    Register
                  </button>
                  <Link to="/">
                    <button className="donar_form_cancel_button">Cancel</button>
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {};
}

export default connect(mapStateToProps)(RegisterBloodbank);
