import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Link from 'gatsby-link'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import { Main, P, mainColor } from '../styles/generals';


const Image = styled.div`
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-image: url(${({src}) => src});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
`;


const PortfolioPage = ({
  data
}) => {
  const {date, title, description, image} = data.markdownRemark.frontmatter
  return (
    <section className="section" style={{overflow:'hidden', height: '100vh'}}>
      <HeroSection image={image} >


      </HeroSection>
      <Main>
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>
        <p>{description}</p>
      </Main>

    </section>
  )
}



export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image
      }
    }
  }
`
