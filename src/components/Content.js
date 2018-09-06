import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: ${props => props.size};
  position: relative;
`;
const Right = styled.div`
  flex: ${props => props.size};
  position: relative;
`;

export default class content extends Component {
  render() {
    return (
      <Container>
        <Left size={this.props.largeRight ? 46 : 6 }>
          {this.props.left}
        </Left>
        <Right size={this.props.largeRight ? 54 : 4 }>
          {this.props.right}
        </Right>
      </Container>
    )
  }
}
