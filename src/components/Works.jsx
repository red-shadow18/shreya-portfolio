import React from "react";
import styled from "@emotion/styled";
import ComingSoon from "../assets/comingSoon.jpg"

const Works = () => {
    return <Container>
        <img loading="lazy" src={ComingSoon}/>
    </Container>
}

export default Works;

const Container=styled.div`
    img {
        width: 60vw;
    }
`