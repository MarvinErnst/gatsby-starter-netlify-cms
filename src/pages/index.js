import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {
  Spring,
} from 'react-spring';

import Hider from '../components/Hider'
import ContactBox from '../components/ContactBox';
import { Main, P, mainColor, Line } from '../styles/generals';

const Container = styled.div`
  width: calc(84vw - 100px);
  height: 84vh;
  padding:  8vh 8vw;
  overflow: hidden;
  position: relative;
  background-color: rgba(0,0,0,0.5)
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

let lastX = Date.now();
let diff = 0;

const fadeInDown = {
  from: {opacity: 0, y: -100},
  to:{ opacity:1, y: 0 }
}

const fadeInUp = {
  from: {opacity: 0, y: 100},
  to:{ opacity:1, y: 0 }
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       diffX: 0,
       diffY: 0,
    }
  }

  handleMouseMove = (e) => {
    if(Date.now() - lastX > 80) {
      this.setState({
        diffX:  (window.innerWidth - e.clientX) * -.03,
        diffY:  (window.innerHeight - e.clientY) * -.03
      })
      lastX = Date.now();
    }
  }


  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div style={{
        backgroundSize: '110%',
        backgroundPosition:`${50+this.state.diffX}% ${50 +this.state.diffY}%`,
        backgroundColor: mainColor,
        backgroundImage: 'url(/img/jumbotron.jpg)',
        backgroundBlendMode: 'soft-light'}}
        onMouseMove={this.handleMouseMove}
      >
        <Hider />
        <Container>
          <TopBar>
            <Spring delay={3000} {...fadeInDown}>
              {({opacity, y}) =>  <Name style={{opacity, transform: `translate3d(0,${y}%,0)`}}>Marvin Ernst</Name>}
            </Spring>
            <Spring delay={3200} {...fadeInDown}>
              {({opacity, y}) =>  <SocialMediaBox style={{opacity, transform: `translate3d(0,${y}%,0)`}}>asd</SocialMediaBox>}
            </Spring>
          </TopBar>

          <MainContent>
            <MainContentHeadline>Hallo </MainContentHeadline>
            <div style={{position:'relative',height:1, marginLeft: '12%'}}>
              <Line width="400px" color="white" />
            </div>
            <MainContentDesc>Eaque nam totam consequatur commodi. Sint qui ut. Dolorum et quaerat sequi excepturi ut fuga aut. A perferendis quae numquam dignissimos et dolorum.</MainContentDesc>
          </MainContent>

          <BottomBar>
            <Spring delay={3500} {...fadeInUp}>
             { ({opacity, y}) => <ContactBox style={{opacity, transform: `translate3d(0,${y}%,0)`}}/>}
            </Spring>
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
