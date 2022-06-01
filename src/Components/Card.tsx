import React from "react";
import styled from "styled-components";

const Card =()=>{
    
    const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    `;

    const Card = styled.div`
    width:25%;
    border-radius:5px;
    box-shadow:2px 2px 2px 10px lightgrey;
    `

    return(
        <>
        <Container>
            <Card>
                
            </Card>
        </Container>
        </>
    )
}

export default Card;