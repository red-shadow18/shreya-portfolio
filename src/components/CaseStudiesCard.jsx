import React from "react";
import styled from "@emotion/styled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CoPresentIcon from '@mui/icons-material/CoPresent';

const CaseStudiesCard = ({props}) => {
    const {title,question,prd,presentation, icon} = props
    const articleLink = (link) => {
        if (link.length > 40) {
            return link.substring(0,39)+"..."
        }else return link
    }
    return <Container>
        <span className="title">{title}</span>
        <img loading="lazy" src={icon} alt={title} />
        <span id="question" className="dp-flx"><PsychologyAltIcon />: <span className="question">{question}</span></span>
        {prd && <span className="linkText"><EmojiObjectsIcon/>: <a id="prd" href={prd} target="_blank">{articleLink(prd)}</a></span>}
       {presentation && <span className="linkText"><CoPresentIcon/>: <a id="presentation" href={presentation} target="_blank">{articleLink(presentation)}</a></span>}
    </Container>
}

export default CaseStudiesCard

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        min-height: 380px;
        width: 450px;
        border-radius:4px;
        gap:15px;
        box-shadow:rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


        .dp-flx {
            display: flex;
            /* align-items: center; */
            gap: 10px;
        }


        .title {
            font-size: 24px;
            font-weight: 700;
        }
    img {
        height: 250px;
        width: 350px;
    }

    .question {
        text-align: left;
    }
    .linkText {
        display: flex;
        align-items: center;
        gap:10px;
        width: 100%;
    }

    a{
        width: 100%;
        text-align:left;
    }
`