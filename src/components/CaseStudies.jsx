import React from "react";
import styled from "@emotion/styled";
import { caseStudies } from "../constants";
import CaseStudiesCard from "./CaseStudiesCard";

const CaseStudies = () => {
    return <Container>
        <h2>My case studies</h2>
        <div className="allArticles">
        {
                caseStudies.map(article => <CaseStudiesCard key={article.id} props={article} />)
}
</div>
    </Container>
}

export default CaseStudies;

const Container=styled.div`
        padding: 20px;

    .allArticles {
         display: flex;
    flex-wrap: wrap;
    gap: 30px;
    }
`