import React from "react";
import { Formik, Form, Field} from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import CustomErrorMessage from "./CustomErrorMessage";
import { connect } from "react-redux";
import { dataAction } from "../Redux/actions/actionData";

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Z]*$/, "name must be in alphabets")
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
    .matches(/^[a-zA-Z]*$/, "state name must be in alphabets")
    .required(),
  Pincode: yup
    .number()
    .min(100000, "pincode must be of six digit")
    .max(999999, "pincode must be of six digit")
    .required(),
  RegDate: yup.date().required(),
  Address: yup.string().required(),
  Bloodbank: yup.string().required("Blood Bank must be required"),
  DateOfBirth: yup
    .date()
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
    <div className="main_container_donarergister">
      <div>
        <h2 className="header_donarregister_form">Donar Registration</h2>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          id: "",
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
          Bloodbank: "",
        }}
        onSubmit={(values) => {
          notify();
          props.dispatch(dataAction(values));
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
                <Field
                  name="RegDate"
                  type="date"
                  className="donarregister_fields"
                ></Field>
                <CustomErrorMessage name="RegDate"></CustomErrorMessage>
              </div>
            </div>

            <div className="row" id="form_data_row">
              <div className="col-md-12">
                <label className="label_donarregister">Blood Bank*</label>

                <Field
                  name="Bloodbank"
                  as="select"
                  className="donarregister_fields"
                >
                  <option>Select Blood Bank</option>
                  <option value="Kanaklata Civil Hospital,Tezpur">
                    Kanaklata Civil Hospital,Tezpur
                  </option>
                  <option value="Blood Bank, Kushal Konwar Hospital">
                    Blood Bank, Kushal Konwar Hospital
                  </option>
                  <option value="Rotary Blood Bank and Resource Centre">
                    Rotary Blood Bank and Resource Centre
                  </option>
                  <option value="Indian Red Cross Society">
                    Indian Red Cross Society
                  </option>
                  <option value="Sheth L.G. General Hospital (MUN)">
                    Sheth L.G. General Hospital (MUN)
                  </option>
                  <option value="Bhavnagar Blood Bank">
                    Bhavnagar Blood Bank
                  </option>
                  <option value="Blood Bank,P.S. Medical College">
                    Blood Bank,P.S. Medical College
                  </option>
                  <option value="Jamshedpur Blood Bank">
                    Jamshedpur Blood Bank
                  </option>
                </Field>
                <CustomErrorMessage name="Bloodbank"></CustomErrorMessage>
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
              <div className="col-md-12 button_container_donarregister">
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

function mapStateToProps(state: any) {
  return {
    values: state.dataReducer,
  };
}
export default connect(mapStateToProps)(DonarRegister);
