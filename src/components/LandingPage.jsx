import React from "react";
import styled from '@emotion/styled'
import profilePic from "../assets/profilePic.jpeg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const LandingPage = () => {
    return <Container>
        <div className="picAndLinks">
            <img src={profilePic} />
            <div className="links">
                <span className="posRel">
                    <LinkedInIcon /> : <a  className="posAbs" href="https://www.linkedin.com/in/shreyadwivedi488/">shreyadwivedi488/</a>
                </span>
                <span className="posRel">
                    <EmailIcon /> : <span className="posAbs">shreyadwivedi488@gmail.com</span>
                </span>
                <span className="posRel">
                    <LocalPhoneIcon /> : <span className="posAbs">+91-1234567890</span>
                </span>
            </div>
            
        </div>
        <div className="aboutMe">
            <h3>I am Shreya</h3>
            <p>A lot of gud thngs abt me!!!</p>
        </div>
    </Container>
}

export default LandingPage

const Container = styled.div`

@media (max-width:1240px){
    flex-direction: column;
    align-items: center;
}

display: flex;
    img {
        height: 250px;
        width:250px;
        border-radius: 50%;
        filter: drop-shadow(10px 10px 20px black);
    }

    .links {
        margin-top: 20px;
        display:flex;
        gap:10px;
        width: 270px;
        @media (max-width:1240px){
    flex-direction: column;
}
        span {
            display:flex;
            gap:10px;
        }
    }

    .posAbs {
        position: absolute;
        right: 0;
    }

    .posRel {
        position: relative;
    }
`