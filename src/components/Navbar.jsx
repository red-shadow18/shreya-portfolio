import styled from "@emotion/styled";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { paths } from "../constants";

const Navbar = () => {
    const location =useLocation()
    return <Container>
        {
                    paths.map((path, index) => (
                        <Link key={index} className={`navigationLink ${location.pathname === path.to ? "active" : ""}`} to={path.to}>{path.linkText}</Link>
                    ))
                }
    </Container>

}

export default Navbar

const Container=styled.div`
    position:fixed;
top:0;
left:0;
right:0;
    display: flex;
    padding: 10px;
    gap: 20px;
    padding-right: 20px;
    justify-content: flex-end;
backdrop-filter: blur(5px);
.navigationLink {
    font-weight: 800;
    text-decoration:none;
}

.active{
     color:#8e13db;
     text-decoration: underline;
}

`