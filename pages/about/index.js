import { Component } from "react";
import styled from "styled-components";

import { attributes } from "../../content/about.md";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  h1 {
    font-size: 2.5rem;
    height: 10%;
    width: 100%;
    justify-self: flex-start;
    text-align: center;
  }
  .text {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-content {
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    align-self: center;
  }
`;

export default class About extends Component {
  render() {
    let { title, about } = attributes;
    return (
      <Container>
        <h1>{title}</h1>
        <div className="about-content">
          <div className="text">{about}</div>
        </div>
      </Container>
    );
  }
}
