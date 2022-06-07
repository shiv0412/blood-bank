import react, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { connect } from "react-redux";
import { IReduxStore } from "../Redux/reducers/initialState";

interface Data_Value{
  id:string,
  name:string,
  phone:Number,
  DateOfBirth:Date,
  Bloodgroup:string,
  Gender:string,
  City:string,
  State:string,
  Pincode: Number,
  RegDate: string,
  Address: string,
  Bloodbank: string,
  medical:string
}

let DonarSearch = (props: any) => {

  const [filter, setFilter] = useState([]);
  const [showComp, setShowcomp] = useState(false);
  const [showComptwo, setShowcomptwo] = useState(false);
  
  return (
    <div className="main_container_search">
      <div>
        <h2 className="header_donarregister_form">Find A Donar</h2>
      </div>
      <Formik
        initialValues={{
          city: "",
          bloodgroup: "",
        }}
        onSubmit={(values) => {
          var newdata = props.values.filter((cvalue: Data_Value) => {
            return (
              cvalue.City === values.city &&
              cvalue.Bloodgroup === values.bloodgroup
            );
          });
          if (newdata.length > 0) {
            setShowcomp(true);
            setShowcomptwo(true);
            setFilter(newdata);
          } else {
            setShowcomp(false);
            setShowcomptwo(true);
          }
        }}
      >
        <Form className="search_donar_data">
          <div className="container">
            <div className="row">
              <div className="col">
                <Field
                  type="text"
                  placeholder="Enter Your City"
                  name="city"
                  className="donarregister_fields"
                ></Field>
              </div>
              <div className="col">
                <Field
                  name="bloodgroup"
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
              </div>
              <div className="col">
                <button type="submit" className="donar_search_button">
                  Serach
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      {showComp ? (
        <div className="container table-responsive">
          <table className="donar_search_table">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Blood Group</th>
              <th>Gender</th>
              <th>Bloodbank</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
            </tr>
            {filter.map((cvalue:Data_Value) => {
              return (
                <tr>
                  <td>{cvalue.name}</td>
                  <td>{cvalue.phone}</td>
                  <td>{cvalue.Bloodgroup}</td>
                  <td>{cvalue.Gender}</td>
                  <td>{cvalue.Bloodbank}</td>
                  <td>{cvalue.City}</td>
                  <td>{cvalue.State}</td>
                  <td>{cvalue.Pincode}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : showComptwo ? (
        <div
        className="showcomp_search"        
        >
          Sorry...No Donar Found
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

function mapStateToProps(state:IReduxStore) {
  return {
    values: state.registeredDonars,
  };
}

export default connect(mapStateToProps)(DonarSearch);
