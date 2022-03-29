import React from "react";
import styled, { css } from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteDonar, updateDonar } from "../Redux/actions/actionData";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Form, Field, Formik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import CustomErrorMessage from "./CustomErrorMessage";

const validationSchema = yup.object({
  name: yup.string().matches(/^[a-zA-Z]*$/, "name must be in alphabets"),
  phone: yup
    .number()
    .min(1000000000, "not a valid phone number")
    .max(999999999999, "not a valid phone number"),
});

const Wrapper = styled.div`
  background-color: #566573;
  margin-top: 5%;
`;

const Title = styled.p`
  font-size: 2vw;
  font-weight: bold;
  margin: 2% 2%;
  color: white;
  font-family: "Times New Roman";
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Button = styled.button`
  background-color: orangered;
  color: white;
  padding: 5px 10px;
  font-size: 13px;
  margin: 2.5% 2%;
  border: none;
  &:hover {
    background-color: #eb984e;
  }
`;

const Iconstyle = {
  fontSize: "20px",
  paddingBottom: "2px"
}


const ButtonContainer = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Datatable = styled.table`
  width: 100%;
  margin-top: 10px;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #d5d8dc;
`;

const Th = styled.th`
  border-bottom: 1px solid #d5d8dc;
  border-top: 1px solid #d5d8dc;
  padding: 10px 5px;
  font-size: 14px;
`;

const Td = styled.td`
  padding: 10px 5px;
  font-size: 13px;
`;

const Actions = styled.button`
  background-color: white;
  border: none;
`;
const ActionDel = styled(Actions)`
  margin-left: 10px;
  color: red;
  font-size: 18px;
`;

const Label = styled.label`
  display: block;
  padding: 10px 0px;
  font-family: "Times-New-Roman";
`;

const LabelWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Edittitle = styled.span`
  font-family: "Times-New-Roman";
  font-size: 2vw;
  padding-top: 5px;
  color: #808b96;
`;

const Closebutton = styled.button`
  border: none;
  background-color: white;
  position: absolute;
  right: 5px;
`;

const SubmitWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px 0px;
`;

const AdminPannel = (props: any) => {

  const notify = () =>
    toast.success("Donar Data Updated", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-6">
            <Title>Manage Donars</Title>
          </div>
          <ButtonContainer className="col-md-6">
            <Link to="/donarregister">
              <Button>
                <AiOutlinePlusCircle style={Iconstyle}/>
                &nbsp;Add New Donar
              </Button>
            </Link>
          </ButtonContainer>
        </div>
      </Wrapper>
      <div className="container">
        <Datatable className="table-responsive">
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Bloodgroup</Th>
            <Th>BloodBank</Th>
            <Th>Action</Th>
          </Tr>
          {props.values.map((cvalue: any) => {
            return (
              <Tr key={cvalue.id}>
                <Td>{cvalue.name}</Td>
                <Td>{cvalue.phone}</Td>
                <Td>{cvalue.Bloodgroup}</Td>
                <Td>{cvalue.Bloodbank}</Td>
                <Td>
                  <Popup trigger={<Actions>&#9998; </Actions>} modal>
                    {(
                      close:
                        | React.MouseEventHandler<HTMLButtonElement>
                        | undefined
                    ) => (
                      <div>
                        <LabelWrapper>
                          <Edittitle>Edit Donar Data</Edittitle>
                          <Closebutton onClick={close}>&#10060;</Closebutton>
                        </LabelWrapper>
                        <hr />
                        <Formik
                          validationSchema={validationSchema}
                          initialValues={{
                            name: cvalue.name,
                            phone: cvalue.phone,
                            Bloodgroup: cvalue.Bloodgroup,
                            Bloodbank: cvalue.Bloodbank,
                          }}
                          onSubmit={(values) => {
                            notify();
                            props.dispatch(updateDonar(values));
                          }}
                        >
                          <Form>
                            <div>
                              <div className="row">
                                <div className="md-12">
                                  <LabelWrapper>
                                    <Label>Name</Label>
                                  </LabelWrapper>
                                  <Field
                                    name="name"
                                    type="text"
                                    className="set_UpdateField"
                                  ></Field>
                                  <LabelWrapper>
                                  <CustomErrorMessage name="name"></CustomErrorMessage>
                                  </LabelWrapper>
                                </div>
                                <div className="md-12">
                                  <LabelWrapper>
                                    <Label>Phone</Label>
                                  </LabelWrapper>
                                  <Field
                                    name="phone"
                                    type="number"
                                    className="set_UpdateField"
                                  ></Field>
                                  <LabelWrapper>
                                  <CustomErrorMessage name="phone"></CustomErrorMessage>
                                  </LabelWrapper>
                                </div>

                                <div className="md-12">
                                  <LabelWrapper>
                                    <Label>Bloodgroup</Label>
                                  </LabelWrapper>
                                  <Field
                                    name="Bloodgroup"
                                    as="select"
                                    className="set_UpdateField"
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

                                <div className="md-12">
                                  <LabelWrapper>
                                    <Label>Bloodbank</Label>
                                  </LabelWrapper>
                                  <Field
                                    name="Bloodbank"
                                    as="select"
                                    className="set_UpdateField"
                                  >
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
                                </div>
                                <SubmitWrapper>
                                  <button
                                    type="submit"
                                    className="donar_form_submit_button"
                                  >
                                    Update
                                  </button>
                                </SubmitWrapper>
                              </div>
                            </div>
                          </Form>
                        </Formik>
                      </div>
                    )}
                  </Popup>
                  <ActionDel
                    title="Delete"
                    onClick={() => props.dispatch(deleteDonar(cvalue.id))}
                  >
                    <AiFillDelete />
                  </ActionDel>
                </Td>
              </Tr>
            );
          })}
        </Datatable>
      </div>
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    values: state.dataReducer,
  };
}

export default connect(mapStateToProps)(AdminPannel);
