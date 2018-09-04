import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 6;
  position: relative;
`;
const Right = styled.div`
  flex: 4;
  position: relative;
`;

export default class content extends Component {
  render() {
    return (
      <Container>
        <Left>
          {this.props.left}
        </Left>
        <Right>
          {this.props.right}
        </Right>
      </Container>
    )
  }
}
