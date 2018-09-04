import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { H1, mainColor } from '../styles/generals';

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  padding-top: 8vw;
  padding-bottom: 8.4vw;
  padding-left: 6vw;
`;
const SublineContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  position: relative;
  margin-top: 2em;
  padding-left: 2px;
`;
const Subline = styled.div`
  display: inline-block;
  opacity: .7;
  color: ${mainColor};
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const LineContainer = styled.div`
position: absolute;
left: 0;
right: 0;
bottom: 0;
`;

const Line = styled.div`
  width: ${props => props.width};
  transition: width 2000ms ease 0s;
  position: absolute;
  height: 1px;
  top: ${props => props.top || 0}
  background-color: ${props => props.color || '#e6e6e6'}
`

const Header = ({ title, subtitle, style }) => (
  <HeaderContainer style={style}>
    <H1>
      {title}
    </H1>
    <SublineContainer>
      <div style={{
        display: 'inline-block',
        width: 22,
        marginRight: 14
      }}>
        <Line width="22px" top="8px" color={mainColor} />
      </div>
      <Subline >{subtitle}</Subline>
    </SublineContainer>
    <LineContainer>
      <Line width="100%" />
    </LineContainer>
  </HeaderContainer>

)

export default Header
