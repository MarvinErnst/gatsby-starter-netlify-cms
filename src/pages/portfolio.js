import React, { Fragment } from 'react'
import Link, { push } from 'gatsby-link'
import styled from 'styled-components'
import Header from '../components/header';
import Content from '../components/content';
import Gallery from '../components/gallery';
import Hider from '../components/hider';
import { Main, P, mainColor, Line } from '../styles/generals';


const Container = styled(Main)`
  margin-top: 200px;
  padding-right:0;
`;

const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 8px;
`;

const ItemSubtitle = styled.div`
  font-size: 16px;
  opacity: 0.6;
  margin-top:2px
`;

const LineContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  margin-right: 16px;
  width:30px;
  transition: all 0.5s
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  margin-bottom: 40px;
  line-height:1;
  opacity: ${ ({active}) => active ? 1 : 0.3};
  align-items: center;
  &:hover {
    opacity: 1;
  }

  ${ItemTitle} {
    color:  ${ ({active}) => active ? mainColor : '#333'};
  }

  ${LineContainer} {
    width:  ${ ({active}) => active ? '32px' : '0'};
  }
`;







class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeImage: 0,
      activeElement: this.props.data.allMarkdownRemark.edges[0].node.id,
    }
  }

  activateElement = ({id, index}) => {

    this.setState({activeImage: index, activeElement:id})
  }


  render() {

    const {edges} = this.props.data.allMarkdownRemark;
    const images = [' /img/products-grid2.jpg',
      '/img/jumbotron.jpg',
      ' /img/products-grid3.jpg'];
    const elements = edges.map(({node}, index) =>{
      //images.push(node.frontmatter.images)
      return(
      <Item key={node.id} active={node.id === this.state.activeElement} onMouseEnter={() => this.activateElement({index,id: node.id})}>
        <LineContainer>
          <Line width="100%" top="0" />
        </LineContainer>

        <ItemTitle >{node.frontmatter.title}</ItemTitle>
        <ItemSubtitle>{node.frontmatter.date}</ItemSubtitle>

      </Item>)
    })
    return (
      <div>
        <Hider />
        <Content
          left={
            (
              <Container>
                {elements}
              </Container>
            )
          }
          right={
             <Gallery activeImage={this.state.activeImage}  color={mainColor} images={images}/>
          }
        />
      </div >
    )
  }
}
export default Portfolio;


export const query = graphql`
query GetBlogPosts {
  allMarkdownRemark(filter: {
    frontmatter: {
      templateKey: {eq: "blog-post"}
    }
  }) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          image
        }
      }
    }
  }
}
`