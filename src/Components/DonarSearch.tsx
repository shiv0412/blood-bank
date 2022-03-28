import react, { useState } from "react";
import { Formik, Field, Form, isEmptyArray} from "formik";
import {useSelector} from "react-redux";
import {connect} from "react-redux";

let DonarSearch = (props:any) => {
  //const myState = useSelector((state:any) => state.dataReducer);
  const[filter,setFilter] = useState([]);
  const[showComp,setShowcomp] = useState(false);
  const[showComptwo,setShowcomptwo] = useState(false);
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
          Find A Donar
        </h2>
      </div>
      <Formik
        initialValues={{
          city: "",
          bloodgroup: "",
        }}
        onSubmit={(values) => {
           var newdata= props.values.filter((cvalue: any) => {
            return cvalue.City == values.city && cvalue.Bloodgroup==values.bloodgroup;
          });
          if(newdata.length>0){
           //console.log("if function works");
           //console.log(newdata);
           setShowcomp(true);
           setShowcomptwo(true);
           setFilter(newdata);
          }
          else{
            //console.log("else function works");
            setShowcomp(false);
            setShowcomptwo(true);
          }
        }}
      >
        <Form>
          <div className="container">
            <div className="row">
              <div className="col">
                <Field
                  type="text"
                  placeholder="Enter the City"
                  name="city"
                  style={{ width: "100%", padding: "3px 10px" }}
                ></Field>
              </div>
              <div className="col">
                <Field
                  name="bloodgroup"
                  as="select"
                  style={{ width: "100%", padding: "3px 10px" }}
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
      {showComp ? 
      <div className="container table-responsive">
        <table className="donar_search_table">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Pincode</th>
          </tr>
          {filter.map((cvalue: any) => {
            return (
              <tr>
                <td>{cvalue.name}</td>
                <td>{cvalue.phone}</td>
                <td>{cvalue.Bloodgroup}</td>
                <td>{cvalue.Gender}</td>
                <td>{cvalue.Address}</td>
                <td>{cvalue.City}</td>
                <td>{cvalue.State}</td>
                <td>{cvalue.Pincode}</td>
              </tr>
            );
          })}
        </table>
      </div> : showComptwo ? <div style={{textAlign:"center",padding:"10% 0%",fontSize:"2vw",color:"#808B96"}}>Sorry...No Donar Found</div> : <div></div>}
    </div>
  );
};

function mapStateToProps(state:any){
  return{
    values:state.dataReducer
  };
}

export default connect(mapStateToProps)(DonarSearch);
