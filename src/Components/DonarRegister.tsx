import React from "react";
import { Formik, Form, Field ,ErrorMessage} from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import CustomErrorMessage from "./CustomErrorMessage";

const validationSchema = yup.object({
  name:yup.string().matches(/^[a-zA-Z]*$/,"name must be in alphabets").required(),
  phone:yup.number().min(1000000000,"not a valid phone number").max(999999999999,"not a valid phone number").required("phone number must be required"),
  Gender:yup.string().required("gender is required field"),
  Bloodgroup:yup.string().required("blood group must required"),
  City:yup.string().matches(/^[a-zA-Z]*$/,"city name must be in alphabets").required(),
  State:yup.string().matches(/^[a-zA-Z]*$/,"state name must be in alphabets").required(),
  Pincode:yup.number().min(100000,"pincode must be of six digit").max(999999,"pincode must be of six digit").required(),
  RegDate: yup.date().required(),
  Address: yup.string().required(),
  DateOfBirth: yup.date()
  .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
  .required("Required"),
});

let DonarRegister = (props: any) => {

  const notify = () =>
    toast.success("Donar Registered Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        <h2
          style={{
            textAlign: "center",
            padding: "20px 0px",
            color: "red",
            textShadow: "2px 2px 6px #566573",
          }}
        >
          Donar Registration
        </h2>
      </div>
      <Formik
      validationSchema={validationSchema}
        initialValues={{
          name: "",
          phone: "",
          DateOfBirth: "",
          Bloodgroup: "",
          Gender: "",
          City: "",
          State: "",
          Pincode: "",
          RegDate: "",
          Address: "",
        }}
        onSubmit={(values) => {
          notify();
          props.setData([...props.user, values]);
        }}
      >
        <Form
          style={{
            border: "2px solid red",
            width: "80%",
            margin: "auto",
            boxShadow: "2px 2px 10px black",
          }}
        >
          <div className="container">
            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-4">
                <label>Name*</label>
                <br />
                <Field
                  name="name"
                  type="text"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
                <CustomErrorMessage name="name"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label>Phone*</label>
                <br />
                <Field
                  name="phone"
                  type="number"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
                 <CustomErrorMessage name="phone"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label>DateOfBirth*</label>
                <br />
                <Field
                  name="DateOfBirth"
                  type="date"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
                <CustomErrorMessage name="DateOfBirth"></CustomErrorMessage>
              </div>
            </div>

            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-4">
                <label>Gender*</label>
                <br />
                <label>Male</label>
                <Field
                  name="Gender"
                  value="Male"
                  type="radio"
                  style={{ margin: "15px 15px" }}
                ></Field>
                <label>Female</label>
                <Field
                  name="Gender"
                  value="Female"
                  type="radio"
                  style={{ margin: "15px 15px" }}
                ></Field><br/>
                <CustomErrorMessage name="Gender"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label>Blood Group*</label>
                <br />
                <Field
                  name="Bloodgroup"
                  as="select"
                  style={{ width: "100%", padding: "3px 10px" }}
                >
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
                <label>Registration Date*</label>
                <br />
                <Field
                  name="RegDate"
                  type="date"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
                <CustomErrorMessage name="RegDate"></CustomErrorMessage>
              </div>
            </div>
            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-12">
                <label>Address*</label>
                <br />
                <Field
                  name="Address"
                  type="textarea"
                  style={{ width: "100%", padding: "15px 10px" }}
                ></Field>
                <CustomErrorMessage name="Address"></CustomErrorMessage>
              </div>
            </div>

            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-4">
                <label>District/City*</label>
                <br />
                <Field
                  name="City"
                  type="text"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
                <CustomErrorMessage name="City"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label>State*</label>
                <br />
                <Field
                  name="State"
                  type="text"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
                <CustomErrorMessage name="State"></CustomErrorMessage>
              </div>
              <div className="col-md-4">
                <label>Pincode*</label>
                <br />
                <Field
                  name="Pincode"
                  type="number"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
                <CustomErrorMessage name="Pincode"></CustomErrorMessage>
              </div>
            </div>

            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-12" style={{ textAlign: "center" }}>
                <button type="submit" className="donar_form_submit_button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DonarRegister;
