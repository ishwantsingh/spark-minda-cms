import { Component } from "react";
import styled from "styled-components";

import { attributes } from "../content/home.md";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

export default class Home extends Component {
  render() {
    let { title } = attributes;
    return <Container>{title}</Container>;
  }
}
