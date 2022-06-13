/* library imports */
import React, { useState } from "react";
import styled from "styled-components";
/* custom imports */
import ManageRequestForm from "./admin/manage-request-form";

/* styled components */

const Wrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: #808b96;
  font-size: 12.5px;
  position: relative;
  margin-bottom: 5px;
`;

const Status = styled.span`
  background-color: green;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
`;
const Bloodgroup = styled.span`
  background-color: red;
  color: #fff;
  padding: 5px 5px;
  font-weight: bold;
  border-radius: 50%;
`;

const Heading = styled.h5`
  color: #566573;
  padding: 0 0 5px 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

const RequiredDate = styled.span`
  color: red;
`;
const Span = styled.span`
  color: #566573;
  font-weight: bold;
  padding-left: 15px;
  &:nth-child(1) {
    padding-left: 0;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 5px 0 5px 0;
`;

const Button = styled.button`
  position: absolute;
  right: 20px;
  top: 15px;
  padding: 5px 5px;
  background-color: orangered;
  color: #fff;
  border: none;
  font-weight: bold;
  &:hover {
    background-color: red;
  }
`;

function RequestsDataDisplay(props: any) {
  const [show, setShow] = useState(false);
  const [blood_bank, setBloodbankName] = useState<string>();
  const [patient_name, setPatientName] = useState<string>();
  return (
    <div className="post">
      <ManageRequestForm
        onClose={() => setShow(false)}
        show={show}
        blood_bank={blood_bank}
        patient_name={patient_name}
      />
      <Wrapper>
        <Paragraph>
          <Status>{props.data.requestProcessing.requestStatus}</Status>
          &nbsp;&nbsp; |&nbsp;&nbsp;{" "}
          <Bloodgroup>{props.data.bloodgroup}</Bloodgroup>&nbsp;&nbsp;
          |&nbsp;&nbsp; {props.data.requestDate}&nbsp;&nbsp; |&nbsp;&nbsp;{" "}
          {props.data.phone}
        </Paragraph>
        <Paragraph>
          <Heading>{props.data.patient_name}</Heading>
          <span>{props.data.reason}</span>
        </Paragraph>
        <Paragraph>
          <Span>Required Date: </Span>
          <RequiredDate>{props.data.requiredDate}</RequiredDate>
          <Span>Units: </Span>
          {props.data.units} &nbsp;|
          <Span>Updated on: </Span>
          {props.data.requestProcessing.updatingDate} &nbsp;|
          <Span>Approver comment: </Span>
          {props.data.requestProcessing.comment}
        </Paragraph>
        {props.data.requestProcessing.requestStatus === "Completed" ? (
          <Button
          >
            Delete Request
          </Button>
        ) : (
          <Button
            onClick={() => {
              setBloodbankName(props.data.bloodbank);
              setPatientName(props.data.patient_name);
              setShow(true);
            }}
          >
            Manage Request
          </Button>
        )}
      </Wrapper>
    </div>
  );
}

export default RequestsDataDisplay;
