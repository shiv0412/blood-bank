import React from "react";

import { blooddata } from "../ConstData";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin:10px 5px;
  width:18.5vw;
  box-shadow:1px 1px 3px grey;
`;

const Bloodgroup = styled.div`
  width: 25%;
  background-color: orangered;
  color:#fff;
  padding:16px 0px 0px 10px;
`;

const Info = styled.div`
  width: 75%;
  padding-left:10px;
  font-family: 'Times New Roman', Times, serif;
  color:#566573 ;
`;

const Quantity = styled.h4`
    font-weight:bold;
`

const DashboardCardOne: React.FC<blooddata> = ({ bloodgroup, quantity }) => {
  return (
    <>
      <Wrapper>
          <Bloodgroup><h4>{bloodgroup}</h4></Bloodgroup>
          <Info>
            <p>Quantity in Units</p>
            <Quantity>{quantity}</Quantity>
          </Info>
      </Wrapper>
    </>
  );
};

export default DashboardCardOne;
