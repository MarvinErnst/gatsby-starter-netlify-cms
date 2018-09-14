import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Link from 'gatsby-link'
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Content from '../components/Content';
import Steckbrief from '../components/Steckbrief';
import { Main, P, mainColor } from '../styles/generals';






const Text = styled.p`
  margin-top: 35px;
  margin-bottom: 0;
  font-size: 1.35em;
  line-height: 1.9em;
  font-weight: 300;
`

const Description = styled.div`
  align-self:center;
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
`


const PortfolioPage = ({
  data
}) => {
  const { title, subtitle,  description, image,date,
    projekttraeger,
    zielgruppe,
    umsetzung,} = data.markdownRemark.frontmatter
  return (
    <div className="section" style={{overflowX: 'hidden'}}>
      <HeroSection image={image} title={title} desc={subtitle} />

      <Main style={{padding: '8vw 10vw'}}>
        <Content
          flex
          size={[1, 1]}
          left={(
            <Description>
              <h1>Zusammenfassung</h1>
              <Text>{description}</Text>
            </Description>
          )}
          right={(
            <div style={{    paddingLeft: '30%', flex: 1}}>
              <Steckbrief data={[
                {title: 'zeitraum', text: date},
                {title: 'projektträger', text: projekttraeger},
                {title: 'zielgruppe', text: zielgruppe},
                {title: 'umsetzung', text: umsetzung},

              ]} />
            </div>
          )}
        />
      </Main>
      <HeroSection image={image} />

       <Main style={{padding: '11vw 10vw'}}>
        <Content
          size={[1, 1]}
          left={(
            <Description>
              <h1>Prutselbaum</h1>
              <Text>{description}</Text>
            </Description>
          )}
          right={(
            <div style={{    paddingLeft: '30%', flex: 1}}>
              <Image src={image} alt=""/>
            </div>
          )}
        />
      </Main>
    </div>
  )
}



export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subtitle
        description
        tags
        image
        date
        projekttraeger
        zielgruppe
        umsetzung
      }
    }
  }
`
