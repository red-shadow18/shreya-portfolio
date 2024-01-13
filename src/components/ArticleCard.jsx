import React from "react";
import styled from "@emotion/styled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ArticleCard = ({props}) => {
    const { imgSrc, link, title } =props
    const articleLink = () => {
        if (link.length > 20) {
            return link.substring(0,19)+"..."
        }else return link
    }
    return <Container>
        <span className="title">{title}</span>
        <img loading="lazy" alt={title} src={imgSrc} />
       <a href={link} target="_blank"><span className="linkText"><LinkedInIcon/>: {articleLink()}</span></a>
    </Container>
}

export default ArticleCard

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        height: 300px;
        width: 400px;
        border-radius:4px;
        gap:15px;
        box-shadow:rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;;

        .title {
            font-size: 24px;
            font-weight: 700;
        }
    img {
        height: 250px;
        width: 250px;
    }
    .linkText {
        display: flex;
        align-items: center;
        gap:10px;
    }
`