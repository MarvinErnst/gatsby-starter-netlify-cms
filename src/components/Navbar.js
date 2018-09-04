import React, { Component } from 'react'
import styled from 'styled-components'
import NavItem from './navbar-item';

const StyledNavbar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1201;
  width: 100px;
  height: 100vh;
  background-color: #fff;
`

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e6e6e6;
`;

const Nav= styled.nav`
  position: absolute;
  left: 0;
  top: 50%;
  right: 0;
  margin-top: 200px;
  float: none;
  transform: translate(0,-50%) rotate(-90deg);
  display: flex;
`;

const LogoLink = styled.a`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 52px;
  padding-bottom: 60px;
  padding-left: 5px;
  font-size: 2.8em;
  font-weight: 700;
  text-align: center;
`;


export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <NavContainer>
          <LogoLink>B.</LogoLink>
          <Nav>
            <NavItem href="/about" >About</NavItem>
            <NavItem href="/contact" >Contact</NavItem>
            <NavItem href="/portfolio" >Portfolio</NavItem>
            <NavItem href="/contract" >Contract</NavItem>
            <NavItem href="/" >Home</NavItem>
          </Nav>
          <div className="nav-add-menu">

          </div>
        </NavContainer>
      </StyledNavbar>
    )
  }
}
