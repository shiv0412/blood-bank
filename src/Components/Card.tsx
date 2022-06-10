/* library imports */
import React from "react";
import styled from "styled-components";

/*styled components */

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const InnerContainer = styled.div`
  width: 25%;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 10px lightgrey;
`;

/* main component */

const Card = () => {
  return (
    <>
      <Container>
        <InnerContainer></InnerContainer>
      </Container>
    </>
  );
};

export default Card;
