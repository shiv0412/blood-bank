/* library imports */
import React from "react";
import styled from "styled-components";

/* custom imports */
import { IBloodStockInfo } from "../../models/models";


/* styled components */

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin:10px 5px;
  width:18.5vw;
  box-shadow:1px 1px 3px grey;
`;

const BloodgroupNameContainer = styled.div`
  width: 25%;
  background-color: orangered;
  color:#fff;
  padding:16px 0px 0px 10px;
`;

const InformationContainer = styled.div`
  width: 75%;
  padding-left:10px;
  font-family: 'Times New Roman', Times, serif;
  color:#566573 ;
`;

const Heading = styled.h4`
    font-weight:bold;
`
/* main component */

const DashboardCardOne: React.FC<IBloodStockInfo> = ({ bloodgroup, quantity }) => {
  return (
    <>
      <Wrapper key={bloodgroup}>
          <BloodgroupNameContainer><h4>{bloodgroup}</h4></BloodgroupNameContainer>
          <InformationContainer>
            <p>Quantity in Units</p>
            <Heading>{quantity}</Heading>
          </InformationContainer>
      </Wrapper>
    </>
  );
};

export default DashboardCardOne;
