import React from "react";
import {ErrorMessage} from "formik";

const CustomErrorMessage =({name}:{name:any}) =>{
    return( 
   <span style={{color:"red"}}>
    <ErrorMessage name={name}/>
  </span>
    );
}
export default CustomErrorMessage;
