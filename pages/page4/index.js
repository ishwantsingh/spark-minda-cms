import { Component } from "react";
import styled from "styled-components";

import { attributes } from "../../content/page4.md";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

export default class Page4 extends Component {
  render() {
    let { title } = attributes;
    return <Container>{title}</Container>;
  }
}
