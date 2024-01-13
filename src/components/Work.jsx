import React from "react";
import styled from "@emotion/styled";
import ComingSoon from "../assets/comingSoon.jpg"

const Work = () => {
    return <Container>
        <img loading="lazy" src={ComingSoon}/>
    </Container>
}

export default Work;

const Container=styled.div`
    img {
        width: 60vw;
    }
`