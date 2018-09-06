import React, { Component } from 'react';
import styled from 'styled-components';

const ContactBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: white;
  padding: 48px;
  display: flex;

  & > div {
    margin-left: 24px
  }

  a {
    display: block;
    margin-top: 8px;
    opacity: 0.75;
    color: white;
    font-size: 100%;
  }
`

export default class ContactBoxComponent extends Component {
  render() {
    return (
      <ContactBox style={this.props.style}>
        <div>
          <div>E-mail:</div>
          <a href="mailto:info@ernst.haft">info@ernst.haft</a>
        </div>
        <div>
          <div>Telefon:</div>
          <a href="tel:(+49) 564123 / 123456">(+49) 564123 / 123456</a>
        </div>
      </ContactBox>
    )
  }
}
