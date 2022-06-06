import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";

import Pagination from "./pagination";
import PaginationDataDisplay from "./pagination-data-display";

const Wrapper = styled.div`
  background-color: #566573;
  margin-top: 1%;
`;

const Title = styled.p`
  font-size: 2vw;
  font-weight: bold;
  margin: 2% 2%;
  padding-top: 2%;
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
  paddingBottom: "2px",
};

const ButtonContainer = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const WrapperTwo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1.5px solid lightgrey;
  border-top: 1.5px solid lightgrey;
  margin-top: 10px;
`;

const Content = styled.div`
  width: 16.6%;
  padding: 5px 0px;
  padding: 15px 0;
  font-weight: bold;
  font-size: 14px;
  color: #566573;
  &:nth-child(4) {
    width: 25%;
  }
  &:nth-child(5) {
    text-align: center;
  }
  &:nth-child(6) {
    text-align: center;
  }
`;


const AdminPannel = (props: any) => {
  const history = useHistory();

  const onRegister = () => {
    history.push({
      pathname: "/donarregister",
      state: { id: "" },
    });
  };

  const data = props.values.filter((cvalue:any)=>{
    return cvalue.Bloodbank === "Blood Bank, Kushal Konwar Hospital"
  })
  console.log(props.values);
console.log(data);
  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-6">
            <Title>Manage Donars</Title>
          </div>
          <ButtonContainer className="col-md-6">
            <Button onClick={() => onRegister()}>
              <AiOutlinePlusCircle style={Iconstyle} />
              &nbsp;Add New Donar
            </Button>
          </ButtonContainer>
        </div>
      </Wrapper>
      <div className="container">
        <WrapperTwo>
          <Content>Name</Content>
          <Content>Phone</Content>
          <Content>Bloodgroup</Content>
          <Content>Address</Content>
          <Content>Donar Status</Content>
          <Content>Action</Content>
        </WrapperTwo>
          {data.length > 0 ? (
          <>
            <Pagination
              data={data}
              RenderComponent={PaginationDataDisplay}
              pageLimit={5}
              dataLimit={7}
            />
          </>
        ) : (
          <h1>No Posts to display</h1>
        )}
      </div>
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    values: state.dataReducer,
    authentication: state.authentication,
  };
}

export default connect(mapStateToProps)(AdminPannel);
