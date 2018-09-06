import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Hider from '../components/Hider'
import { Main, P, mainColor, Line } from '../styles/generals';
const Container = styled.div`
  width: calc(84vw - 100px);
  height: 84vh;
  padding:  8vh 8vw;
  overflow: hidden;
  position: relative;
`
const AbsoluteElement = styled.div`
  position: absolute;
`

const TopBar = styled(AbsoluteElement)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin-left: 100px;
  padding: 48px 5%;
`;

const BottomBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: 100px;
  padding: 48px 5%;
`;

const MainContent = styled.div`
position: relative;
top: 45%;
`

const MainContentHeadline = styled.h1`
  margin-left: 12%;
  margin-top: 0;
  font-size: 130px;
  color: white;
`
const MainContentDesc = styled.div`
  margin-left: 16%;
  color: white;
  font-size: 20px;
  font-weight: 300;
  opacity: 0.75
  line-height: 1.5
  max-width: 700px
  margin-top: 35px;
`


const Name= styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  font-weight: 700;
  color: white;
  padding: 48px 5%;
`

  const SocialMediaBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
  font-weight: 700;
  color: white;
  padding: 48px 5%;
`
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

  small {
    display: block;
    margin-top: 8px;
    opacity: 0.75;

    font-size: 100%;
  }
`
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div style={{backgroundColor: mainColor}}>
        <Hider />
        <Container>
          <TopBar>
            <Name>Marvin Ernst</Name>
            <SocialMediaBox>asd</SocialMediaBox>
          </TopBar>

          <MainContent>
            <MainContentHeadline>Hallo </MainContentHeadline>
            <div style={{position:'relative',height:1, marginLeft: '12%'}}>
              <Line width="400px" color="white" />
            </div>
            <MainContentDesc>Eaque nam totam consequatur commodi. Sint qui ut. Dolorum et quaerat sequi excepturi ut fuga aut. A perferendis quae numquam dignissimos et dolorum.  </MainContentDesc>
          </MainContent>

          <BottomBar>
            <ContactBox>
              <div>
                <div>E-mail:</div>
                <small>info@ernsthaft.de</small>
              </div>
              <div>
                <div>Telefon:</div>
                <small>(+49) 564123 / 123456</small>
              </div>
            </ContactBox>
          </BottomBar>
        </Container>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
