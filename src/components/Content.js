import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: ${props => props.size};
  position: relative;
  display:  ${props => props.flex && 'flex'};

`;
const Right = styled.div`
  flex: ${props => props.size};
  position: relative;
  display:  ${props => props.flex && 'flex'};
`;

export default class content extends Component {

  static propTypes = {
    size: PropTypes.array,
  }

  static defaultProps = {
    size: [6,4]
  }

  render() {

    return (
      <Container>
        <Left size={this.props.size[0]} flex={this.props.flex}>
          {this.props.left}
        </Left>
        <Right size={this.props.size[1]} flex={this.props.flex}>
          {this.props.right}
        </Right>
      </Container>
    )
  }
}
