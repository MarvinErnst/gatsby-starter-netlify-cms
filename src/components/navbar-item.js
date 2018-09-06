import React, { Component } from 'react'
import styled from 'styled-components'
import Link, {push} from 'gatsby-link';

const NavItem = styled(Link)`
text-decoration: none;
  display: inline-block;
  color: #222;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 0 1.2vw;
  opacity: .4;
  transition: opacity .3s ease;
  font-size: .9em;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover:not(.active) {
    color: #000;
    opacity: 1;
  }

  &.active {
    color: #000;
    opacity: 1;
  }
`

export default class NavbarItem extends Component {
  render() {
    const {href, children, onClick} = this.props
    return (
      <NavItem exact to={href} onClick={(e) => onClick(e,href)} activeClassName="active">{children}</NavItem>
    )
  }
}
