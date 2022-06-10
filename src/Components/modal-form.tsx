import React from "react";
import * as yup from "yup";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Field, Form, Formik } from "formik";

import CustomErrorMessage from "./custom-components/custom-error-message";
import { DropdownField } from "./custom-components/custom-dropdown";
import {
  customSelectBoxOptions,
  dateFinder,
  toastNotification,
} from "./functions/functions";
import { connect } from "react-redux";
import { IReduxStore } from "../Redux/reducers/initialState";
import { newRequest } from "../Redux/actions/actionData";

/* form validation */
const validationSchema = yup.object({
  patient_name: yup
    .string()
    .matches(/^[a-z,A-Z_ ]*$/, "name must be in alphabets")
    .required(),
  reason: yup.string().required(),
  bloodgroup: yup.string().required(),
  phone: yup
    .number()
    .min(1000000000, "not a valid phone number")
    .max(999999999999, "not a valid phone number")
    .required("phone number must be required"),
  units: yup.number().required(),
  requiredDate: yup.date().required(),
});

/* styled components */

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  top: 12%;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const ModalTitle = styled.h5`
  margin: 0;
  color: #566573;
  font-weight: bold;
`;
const ModalBody = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

const StyledField = styled(Field)`
  border: 1.5px solid lightgray;
  width: 100%;
  margin: auto;
  padding: 5px 5px;
  color: #808b96;
  &:focus {
    outline: none;
  }
  &:nth-child(6) {
    padding: 5px 5px;
    margin: 0 5px;
  }
  &:nth-child(9) {
    padding: 10px 5px;
    margin: 0 5px;
  }
`;
const FieldWrapper = styled.div`
  width: 50%;
  padding: 10px 5px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid lightgray;
  padding: 10px 10px 20px 10px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  padding: 0 0 5px 0;
  color: #808b96;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  &:nth-child(5) {
    padding: 10px 5px 5px 5px;
  }
  &:nth-child(8) {
    padding: 20px 5px 5px 5px;
  }
`;

const Button = styled.button`
  margin: 10px auto 10px auto;
  display: block;
  padding: 5px 15px;
  border: none;
  background-color: orangered;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

/* main container */

const Modal = (props: any) => {
  if (!props.show) {
    return null;
  }
  return (
    <ModalContainer onClick={props.onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Send Request</ModalTitle>
          <Span>
            <AiOutlineCloseCircle onClick={props.onClose} />
          </Span>
        </ModalHeader>
        <ModalBody>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              patient_name: "",
              bloodgroup: "",
              units: "",
              requiredDate: "",
              reason: "",
              phone: "",
              bloodbank: props.bloodbank_name,
              requestDate: dateFinder(),
            }}
            onSubmit={(values: any) => {
              props.dispatch(newRequest(values));
              toastNotification("Request sent");
              // history.push("/adminlogin");
            }}
          >
            <Form>
              <FormContainer>
                <FieldWrapper>
                  <Label>Patient Name*</Label>
                  <StyledField type="text" name="patient_name"></StyledField>
                  <CustomErrorMessage name="patient_name"></CustomErrorMessage>
                </FieldWrapper>
                <FieldWrapper>
                  <Label>Required Bloodgroup*</Label>
                  <StyledField
                    placeholder="Select Bloodgroup"
                    name="bloodgroup"
                    component={DropdownField}
                    options={customSelectBoxOptions("bloodgroup")}
                  />
                  <CustomErrorMessage name="bloodgroup"></CustomErrorMessage>
                </FieldWrapper>
                <FieldWrapper>
                  <Label>Units*</Label>
                  <StyledField type="number" name="units"></StyledField>
                  <CustomErrorMessage name="units"></CustomErrorMessage>
                </FieldWrapper>
                <FieldWrapper>
                  <Label>Contact No.*</Label>
                  <StyledField
                    type="number"
                    name="phone"
                    className="donarregister_fields"
                  ></StyledField>
                  <CustomErrorMessage name="phone"></CustomErrorMessage>
                </FieldWrapper>
                <Label>Required Date*</Label>
                <StyledField type="date" name="requiredDate"></StyledField>
                <CustomErrorMessage name="requiredDate"></CustomErrorMessage>
                <Label>Reason for Request*</Label>
                <StyledField type="textarea" name="reason"></StyledField>
                <CustomErrorMessage name="reason"></CustomErrorMessage>
              </FormContainer>
              <Button type="submit">Send</Button>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.bloodRequests,
  };
}

export default connect(mapStateToProps)(Modal);
