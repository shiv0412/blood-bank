import React from "react";
import {ErrorMessage} from "formik";

const CustomErrorMessage =({name}:{name:string}) =>{
    return( 
   <span className="custom_error">
    <ErrorMessage name={name}/>
  </span>
    );
}
export default CustomErrorMessage;
