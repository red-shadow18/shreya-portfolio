import React from "react";
import styled from "@emotion/styled";
import { articles } from "../constants";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    return <Container>
        <h2>My articles</h2>
        <div className="allArticles">
        {
                articles.map(article => <ArticleCard key={article.id} props={article} />)
}
</div>
    </Container>
}

export default Articles;

const Container=styled.div`
   
    padding: 20px;

    .allArticles {
         display: flex;
    flex-wrap: wrap;
    gap: 30px;
    }
`

