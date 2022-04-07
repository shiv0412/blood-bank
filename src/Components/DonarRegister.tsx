import React from "react";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import CustomErrorMessage from "./CustomErrorMessage";
import { connect } from "react-redux";
import { dataAction, updateDonar } from "../Redux/actions/actionData";
import { useLocation, useHistory, Link } from "react-router-dom";
import { DropdownField } from "./CustomDropdown";


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

interface Data_Value {
  id: string;
  name: string;
  phone: Number;
  DateOfBirth: Date;
  Bloodgroup: string;
  Gender: string;
  City: string;
  State: string;
  Pincode: Number;
  RegDate: string;
  Address: string;
  Bloodbank: string;
  medical: string;
}

interface Data {
  id: string;
}

let DonarRegister = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const state = location.state as Data;
  const id = state.id;
  const notify = () =>
    toast.success("Donar Registered Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notify_update = () =>
    toast.success("Details Successfully Updated", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    let today = new Date();
    let day;
    let month;
    if (today.getDate() < 10) {
      day = 0 + "" + today.getDate();
    } else {
      day = today.getDate();
    }
  
    if (today.getMonth() + 1 < 10) {
      month = 0 + "" + (today.getMonth() + 1);
    } else {
      month = today.getMonth() + 1;
    }
    let date = today.getFullYear() + "-" + month + "-" + day;

    let data;
    if(id!==""){
       data = props.values.filter((cvalue:Data_Value)=>{
        return cvalue.id === id;
      })
    }
    else {
      data= [
      {
        name: "",
        phone: "",
        DateOfBirth: "",
        Bloodgroup: "",
        Gender: "",
        City: "",
        State: "",
        Pincode: "",
        RegDate: date,
        Address: "",
        Bloodbank: "",
        medical:""
      },
    ]
  }


  return (
    <div className="main_container_donarergister">
      <div>
        <h2 className="header_donarregister_form">Donar Registration</h2>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          id: id||"",
          name: data[0].name,
          phone: data[0].phone,
          DateOfBirth: data[0].DateOfBirth,
          Bloodgroup: data[0].Bloodgroup,
          Gender: data[0].Gender,
          City: data[0].City,
          State: data[0].State,
          Pincode: data[0].Pincode,
          RegDate: data[0].RegDate,
          Address: data[0].Address,
          Bloodbank: data[0].Bloodbank,
          medical: data[0].medical,
        }}
        onSubmit={(values: Data_Value) => {
          if (values.id === "") {
            notify();
            props.dispatch(dataAction(values));
            history.push("/admin");
          } else {
            notify_update();
            props.dispatch(updateDonar(values));
            history.push("/admin");
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
                <p className="donarregister_fields">{data[0].RegDate}</p>
                <CustomErrorMessage name="RegDate"></CustomErrorMessage>
              </div>
            </div>

            <div className="row" id="form_data_row">
              <div className="col-md-12">
                <label className="label_donarregister">Blood Bank*</label>
                <Field
                  placeholder="Select Blood Bank"
                  name="Bloodbank"
                  component={DropdownField}
                  options={[
                    {
                      key: "Kanaklata Civil Hospital,Tezpur",
                      text: "Kanaklata Civil Hospital,Tezpur",
                      value: "Kanaklata Civil Hospital,Tezpur",
                    },
                    {
                      key: "Blood Bank, Kushal Konwar Hospital",
                      text: "Blood Bank, Kushal Konwar Hospital",
                      value: "Blood Bank, Kushal Konwar Hospital",
                    },
                    {
                      key: "Rotary Blood Bank and Resource Centre",
                      text: "Rotary Blood Bank and Resource Centre",
                      value: "Rotary Blood Bank and Resource Centre",
                    },
                    {
                      key: "Indian Red Cross Society",
                      text: "Indian Red Cross Society",
                      value: "Indian Red Cross Society",
                    },
                    {
                      key: "Sheth L.G. General Hospital (MUN)",
                      text: "Sheth L.G. General Hospital (MUN)",
                      value: "Sheth L.G. General Hospital (MUN)",
                    },
                    {
                      key: "Bhavnagar Blood Bank",
                      text: "Bhavnagar Blood Bank",
                      value: "Bhavnagar Blood Bank",
                    },

                    {
                      key: "Blood Bank,P.S. Medical College",
                      text: "Blood Bank,P.S. Medical College",
                      value: "Blood Bank,P.S. Medical College",
                    },

                    {
                      key: "Jamshedpur Blood Bank",
                      text: "Jamshedpur Blood Bank",
                      value: "Jamshedpur Blood Bank",
                    },
                  ]}
                />
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
              <div className="col-md-12">
                <label className="label_donarregister">
                  Medical Description
                </label>
                <Field
                  name="medical"
                  type="textara"
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
                <Link to="/admin">
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

function mapStateToProps(state: { dataReducer: Data_Value }) {
  return {
    values: state.dataReducer,
  };
}
export default connect(mapStateToProps)(DonarRegister);
