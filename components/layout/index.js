import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 12vw;
  height: 15%;
  text-align: left;
  align-content: center;
  align-self: flex-end;
  justify-content: space-evenly;
  font-size: 1.3rem;
  margin-bottom: 5%;
  a {
    text-decoration: none;
    color: black;
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 88vw;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/projects"}>
          <a>Projects</a>
        </Link>
        <Link href={"/blog"}>
          <a>Blog</a>
        </Link>
        <Link href={"/page4"}>
          <a>Page 4</a>
        </Link>
      </Nav>
      <Div>{children}</Div>
    </Container>
  );
};

export default Layout;
