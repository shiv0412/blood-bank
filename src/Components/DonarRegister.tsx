import React from "react";
import { Formik, Form, Field } from "formik";

let DonarRegister = () => {
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center", padding: "20px 0px", color: "red" }}>
          Donar Registration
        </h2>
      </div>
      <Formik
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
          console.log(values);
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
                <label>Name</label>
                <br />
                <Field
                  name="name"
                  type="text"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
              </div>
              <div className="col-md-4">
                <label>Phone</label>
                <br />
                <Field
                  name="phone"
                  type="number"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
              </div>
              <div className="col-md-4">
                <label>DateOfBirth</label>
                <br />
                <Field
                  name="DateOfBirth"
                  type="date"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
              </div>
            </div>

            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-4">
                <label>Gender</label>
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
                ></Field>
              </div>
              <div className="col-md-4">
                <label>Blood Group</label>
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
              </div>
              <div className="col-md-4">
                <label>Registration Date</label>
                <br />
                <Field
                  name="RegDate"
                  type="date"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
              </div>
            </div>
            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-12">
                <label>Address</label>
                <br />
                <Field
                  name="Address"
                  type="textarea"
                  style={{ width: "100%", padding: "15px 10px" }}
                ></Field>
              </div>
            </div>

            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-4">
                <label>District/City</label>
                <br />
                <Field
                  name="City"
                  type="text"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
              </div>
              <div className="col-md-4">
                <label>State</label>
                <br />
                <Field
                  name="State"
                  type="text"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
              </div>
              <div className="col-md-4">
                <label>Pincode</label>
                <br />
                <Field
                  name="Pincode"
                  type="number"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
              </div>
            </div>

            <div className="row" style={{ margin: "15px 0px", padding: 0 }}>
              <div className="col-md-12">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DonarRegister;
