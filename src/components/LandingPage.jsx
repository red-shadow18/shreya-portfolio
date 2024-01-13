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
                    <LocalPhoneIcon /> : <span className="posAbs">+91-8095800476</span>
                </span>
            </div>
            
        </div>
        <div className="aboutMe">
            <h3 className="typeWriter">Hi! I am Shreya Dwivedi</h3>
            <p>I'm a versatile professional with a diverse background centered around driving product excellence. My journey in the tech world encompasses crafting code for innovative solutions, orchestrating business strategies, and extracting actionable insights from data.
Passionate about coding, I have innovated solutions that elevate product functionality. As an accomplished business analyst, I specialized in navigating product development journeys and translating objectives into strategic plans to enhance product value and drive growth. Leveraging my expertise as a data analyst, I optimize products by identifying and capitalizing on insightful trends. By integrating growth hacking techniques, I strategically propel product success.
I excel in connecting technology, business goals, and data insights, offering a unique blend of technical prowess, strategic thinking, and analytical insight.</p>
        </div>
    </Container>
}

export default LandingPage

const Container = styled.div`

padding: 20px;

@media (max-width:1240px){
    flex-direction: column;
    align-items: center;
}

display: flex;

.picAndLinks {
        display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width:1240px){
        width: 40%;
    }
}
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
    flex-direction: column;

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

    .aboutMe {

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;

              @media (min-width:1240px){
        width: 60%;
         margin-top: 0 !important;
        
    }

        p {
            text-align: left;
        }
    }

    .typeWriter { 
        max-width: 250px;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.09em;
    animation: typing 6s steps(70, end),  blink-caret .75s step-end infinite;
  }

  @keyframes typing {
    from {
      width: 0%;
      border-right: .15em solid orange;
    }
    to {
      width: 100%;
      border-right: none !important;
    }
  }
  @keyframes blink-caret {
  from{ border-color: transparent }
  50% { border-color: orange; }
}
`