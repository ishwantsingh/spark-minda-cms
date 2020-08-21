import {Component} from "react";
import styled from "styled-components";

import {attributes} from "../../content/projects.md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 3.5rem;
    height: 10%;
    width: 100%;
    justify-self: flex-start;
    text-align: center;
  }
  h2 {
    font-size: 2.6rem;
  }
  img {
    width: 20vw;
    height: 25vw;
  }
  .project-content {
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    align-self: center;
    text-align: left;
  }
`;

export default class Projects extends Component {
  render() {
    let {title, project} = attributes;
    return (
      <Container>
        <h1 className="text">{title}</h1>
        <div className="project-content">
          <h2 className="text">{project.title}</h2>
          <img src={project.image} alt="project" />
          <div className="text">{project.body}</div>
        </div>
      </Container>
    );
  }
}
