import React, { Component } from 'react'
import styled from 'styled-components';

const Steckbrief = styled.div``;
const Item = styled.div`
  margin-bottom: 2em;
`;
const Title = styled.h3`
  font-size: .8em;
  line-height: 42px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin:0;
`;
const Text = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: .2px;
`;


export default class SteckbriefComponet extends Component {
  render() {
    return (
      <Steckbrief>
        {this.props.data.map(({title,text}) =>
          <Item>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Item>
        )}
      </Steckbrief>
    )
  }
}
