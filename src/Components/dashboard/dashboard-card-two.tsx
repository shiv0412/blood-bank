/* library imports */
import React from "react";
import styled from "styled-components";
/* library imports */
import { IDashboardInfo } from "../../models/models";

/* styled components */

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 5px;
  width: 18.5vw;
  box-shadow: 1px 1px 3px grey;
  position: relative;
  padding: 10px 10px;
`;

const Image = styled.img`
  position: absolute;
  top: 10px;
  right: 5px;
`;

const Paragraph = styled.p`
  position: absolute;
  bottom: 5px;
  font-weight: bold;
  color: #566573;
`;

const Heading = styled.h5`
  padding-bottom: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #566573;
`;

/* main component */

const DashboardCardTwo:React.FC<IDashboardInfo>=(props) => {
  return (
      <Wrapper key={props.headtext}>
        <Heading>{props.headtext}</Heading>
        <Image
          src={process.env.PUBLIC_URL + props.infoimg}
          height="25"
          width="30"
          alt="text"
        ></Image>
        <Paragraph>{props.info}</Paragraph>
      </Wrapper>
  );
};

export default DashboardCardTwo;
