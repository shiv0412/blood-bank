/* library imports */
import React from "react";
import styled from "styled-components";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsCursorFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Formik, Form, Field } from "formik";

/* styled components */

const Header = styled.h3`
  color: #ff821a;
  text-align: center;
  font-weight: bold;
  padding-top: 3%;
`;

const Paragraph = styled.p`
  text-align: center;
  color: #808b96;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 5% auto 0% auto;
  border-radius: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: none;
  }
`;

const CustomDiv = styled.div`
  width: 50%;
  padding: 5% 5%;
  background-color: #120346;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubHeading = styled.h4`
  color: #fff;
  font-family: Times New Roman;
`;

const ParagraphTypeSecond = styled.p`
  color: white;
  font-family: Times New Roman;
`;

const Table = styled.table`
  color: #fff;
  margin: 30px 0px;
`;

const Tr = styled.tr`
  padding: 15px 0px;
`;

const Td = styled.td`
  padding: 15px 0px;
  color: #ff821a;
  font-size: 15px;
`;

const Tdtwo = styled.td`
  padding: 15px 0px 15px 25px;
`;

const Trtwo = styled.tr`
  text-align: center;
`;

const Tdthree = styled.td`
  padding: 30px 0px 0px 0px;
  font-size: 25px;
  color: #abb2b9;
  &:hover {
    color: orangered;
  }
`;

const Label = styled.label`
  display: block;
  font-family: Times New Roman;
  padding-top: 10px;
`;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
`;

const Button = styled.button`
  display: block;
  padding: 5px 25px;
  background-color: orangered;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 15px 0px;
  box-shadow: 1px 1px 4px 1px #abb2b9;
  &:hover {
    background-color: #fff;
    border: 2px solid orangered;
    color: orangered;
  }
`;

const StyledField = styled(Field)`
  border: 1.5px solid lightgray;
  &:focus {
    outline: none;
  }
`;

/* main component */

const ContactUs = () => {
  return (
    <>
      <Header>Contact Us</Header>
      <Paragraph>Any question or remarks ? just write us a message!</Paragraph>
      <Container>
        <CustomDiv>
          <SubHeading>Contact Information</SubHeading>
          <ParagraphTypeSecond>
            Fill the form and our team will reach get back to you soon..
          </ParagraphTypeSecond>
          <Table>
            <Tr>
              <Td>
                <BsFillTelephoneFill />
              </Td>
              <Tdtwo>1101-222621</Tdtwo>
            </Tr>
            <Tr>
              <Td>
                <BsEnvelopeFill />
              </Td>
              <Tdtwo>bloodbank@ngo.org</Tdtwo>
            </Tr>
            <Tr>
              <Td>
                <BsCursorFill />
              </Td>
              <Tdtwo>Plot 102 , Model Town , New Delhi</Tdtwo>
            </Tr>
            <Trtwo>
              <Tdthree>
                <BsFacebook />
              </Tdthree>
              <Tdthree>
                <BsInstagram />
              </Tdthree>
              <Tdthree>
                <BsTwitter />
              </Tdthree>
            </Trtwo>
          </Table>
        </CustomDiv>
        <CustomDiv>
          <Wrapper>
            <Formik
              initialValues={{
                Name: "",
                Email: "",
                Message: "",
              }}
              onSubmit={(values: any) => {}}
            >
              <Form>
                <Label>Name</Label>
                <StyledField
                  name="Name"
                  type="text"
                  className="Contact_Field"
                ></StyledField>
                <Label>Email</Label>
                <StyledField
                  name="Email"
                  type="email"
                  className="Contact_Field"
                ></StyledField>
                <Label>Message</Label>
                <StyledField
                  name="Message"
                  type="textarea"
                  className="Contact_Message_Field"
                ></StyledField>
                <Button>Send</Button>
              </Form>
            </Formik>
          </Wrapper>
        </CustomDiv>
      </Container>
    </>
  );
};

export default ContactUs;
