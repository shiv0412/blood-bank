import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import admin from "../Images/admin.png";
import { connect } from "react-redux";
import { adminLogin } from "../Redux/actions/actionData";
import UID from "uniquebrowserid";
import { useHistory } from "react-router-dom";
import { IReduxStore } from "../Redux/reducers/initialState";

const Wrapper = styled.div`
  width: 25%;
  padding: 2% 3%;
  box-shadow: 2px 2px 10px lightgrey;
  margin: 2% auto 0 auto;
`;
const Header = styled.h4`
  color: orangered;
  text-align: center;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  padding-top: 5%;
`;

const HR = styled.hr`
  width: 10%;
  margin: 0 auto;
  color: orangered;
`;

const StyledField = styled(Field)`
  border: none;
  border-bottom: 1.5px solid lightgrey;
  outline: none;
  display: block;
  margin: auto;
  width: 100%;
  padding: 2px 0;
  &:nth-child(odd) {
    margin-bottom: 25px;
  }
`;

const ForgotPassword = styled.p`
  text-align: right;
  padding: 10px 0px;
  color: #808b96;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
`;

const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: orangered;
  border: none;
  padding: 5px 0;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  display: block;
  margin: 0 auto 15% auto;
  text-align: center;
`;

const ErrorMessage = styled.span`
  color: red;
  padding: 0;
  margin: 0;
`;

const AdminLogin = (props: any) => {

  const key = new UID().completeID();
  const history = useHistory();
  const [error, setError] = useState(false);

  return (
    <>
      <Header>Blood Bank Login</Header>
      <HR />
      <Wrapper>
        <Image src={admin}></Image>
        <Formik
          initialValues={{
            email: "",
            password: "",
            key: key,
          }}
          onSubmit={(values: any) => {
            props.dispatch(adminLogin(values));
            const isLogin = props.values.filter((cvalue: any) => {
              return cvalue.key === key;
            });
            if (isLogin.length > 0) {
              props.authenticate();
              history.push("/admin");
            } else {
              setError(true);
            }
          }}
        >
          <Form>
            <StyledField
              type="text"
              name="email"
              placeholder="&#9993; Email"
            ></StyledField>
            <StyledField
              type="password"
              name="password"
              placeholder="&#9897; &nbsp; Password"
            ></StyledField>
            <ForgotPassword>Forgot Password ?</ForgotPassword>
            {error ? (
              <ErrorMessage>invalid username or password</ErrorMessage>
            ) : (
              <></>
            )}
            <Button type="submit">Login</Button>
          </Form>
        </Formik>
      </Wrapper>
    </>
  );
};

function mapStateToProps(state:IReduxStore) {
  return {
    values: state.adminAccount,
  };
}
export default connect(mapStateToProps)(AdminLogin);
