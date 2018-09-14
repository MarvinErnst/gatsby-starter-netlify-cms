import React, { Fragment } from 'react'
import Link, { push } from 'gatsby-link'
import styled from 'styled-components'
import {
  AnimatedValue,
  animated,
  interpolate,
  controller as spring,
  Spring,
} from 'react-spring'
import Content from '../components/Content';
import Gallery from '../components/Gallery';
import Hider from '../components/Hider';
import { Main, P, mainColor, Line } from '../styles/generals';

const animation = new AnimatedValue('#28d79f')
const hover = () => spring(animation, { to: '#c23369' }).start()

const Container = styled(Main)`
  margin-top: 200px;
  padding: 5vw 48px 2vw 8vw
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
  transition: all 0.25s
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
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
      showHider: false,
      activeElement: this.props.data.allMarkdownRemark.edges[0].node.id,
    }
  }

  componentDidUpdate(p,s) {
    if(!p.show && this.props.show) {
      this.setState({
        showHider: true
      })
    }
  }
  activateElement = ({id, index}) => {

    this.setState({activeImage: index, activeElement:id})
  }

  showElement = (path) => {
    this.setState({
      animateTransition: true
    });
    setTimeout(() => {
      push(path)
    }, 750);
  }


  render() {

    const {edges} = this.props.data.allMarkdownRemark;
    const images = [];
    const elements = edges.map(({node}, index) =>{
      images.push(node.frontmatter.image)
      return(
      <Item key={node.id} onClick={() => this.showElement(node.fields.slug)} active={node.id === this.state.activeElement} onMouseEnter={() => this.activateElement({index,id: node.id})}>
        <LineContainer>
          <Line width="100%" top="0" />
        </LineContainer>

        <ItemTitle >{node.frontmatter.title}</ItemTitle>
        <ItemSubtitle>{node.frontmatter.subtitle}</ItemSubtitle>

      </Item>)
    })

    const animate =  this.state.animateTransition ? {
      from:{width: '60%'},
      to:{width: '100%'},
    }: { from:{width: '50%'},
    to:{width: '50%'},};

    return (
      <div>
        <Hider show={this.state.showHider}/>
        <Content
          size={[46, 54 ]}
          left={
            (
              <Container>
                {elements}
              </Container>
            )
          }
          right={
            <Spring {...animate}>
            { ({width}) => <Gallery width={width} scroll={false} activeImage={this.state.activeImage} color={mainColor} images={images}/>}
            </Spring >
          }
        />
      </div >
    )
  }
}
export default Portfolio;


export const query = graphql`
query GetPortfolioPages {
  allMarkdownRemark(filter: {
    frontmatter: {
      templateKey: {eq: "portfolio-page"}
    }
  }) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          subtitle
          image
        }
      }
    }
  }
}
`