import React from "react";
import * as yup from "yup";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";

import CustomErrorMessage from "../custom-components/custom-error-message";
import { DropdownField } from "../custom-components/custom-dropdown";
import {
  customSelectBoxOptions,
  dateFinder,
  toastNotification,
} from "../functions/functions";
import { IReduxStore } from "../../Redux/reducers/initialState";
import { manageRequest } from "../../Redux/actions/actionData";

/* form validation */
const validationSchema = yup.object({
  comment: yup.string().required(),
  requestStatus: yup.string().required(),
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
  z-index: 1;
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
  &:nth-child(even) {
    padding: 15px 5px;
  }
`;
const FieldWrapper = styled.div`
  width: 100%;
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

const ManageRequestModalForm = (props: any) => {
  if (!props.show) {
    return null;
  }
  return (
    <ModalContainer onClick={props.onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Manage Request</ModalTitle>
          <Span>
            <AiOutlineCloseCircle onClick={props.onClose} />
          </Span>
        </ModalHeader>
        <ModalBody>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              patient_name: props.patient_name,
              bloodbank: props.blood_bank,
              requestStatus: "",
              updatingDate: dateFinder(),
              comment: "",
            }}
            onSubmit={(values: any) => {
              props.dispatch(manageRequest(values));
              toastNotification("updated successfully!!!");
              props.onClose();
            }}
          >
            <Form>
              <FormContainer>
                <FieldWrapper>
                  <Label>Update Status*</Label>
                  <StyledField
                    placeholder="Select Status"
                    name="requestStatus"
                    component={DropdownField}
                    options={customSelectBoxOptions("requeststatus")}
                  />
                  <CustomErrorMessage name="requestStatus"></CustomErrorMessage>
                </FieldWrapper>
                <FieldWrapper>
                  <Label>Approver Comment*</Label>
                  <StyledField type="textarea" name="comment"></StyledField>
                  <CustomErrorMessage name="comment"></CustomErrorMessage>
                </FieldWrapper>
              </FormContainer>
              <Button type="submit">Update</Button>
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

export default connect(mapStateToProps)(ManageRequestModalForm);
