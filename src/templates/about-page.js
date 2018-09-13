import React, { Fragment } from 'react'
import Link, { push } from 'gatsby-link'
import Header from '../components/Header';
import Content from '../components/Content';
import Gallery from '../components/Gallery';
import Hider from '../components/Hider'
import { Main, P, mainColor } from '../styles/generals';
import {
  Spring,
} from 'react-spring';

/** Animations */
const animationSpeed = {
  tension: 280, friction: 160
}

class SecondPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
       showHider: false
    }
  }


  componentDidUpdate(p,s) {
    if(!p.show && this.props.show) {
      this.setState({
        showHider: true
      })
    }
  }

  render() {
    const {frontmatter, html} = this.props.data.markdownRemark;
    const { title, subtitle, image, image2, image3 } = frontmatter;

    return (
      <div>
        <Hider show={this.state.showHider}/>
        <Content
          left={
            (
              <Fragment>
              <Header title={title} subtitle={subtitle} />
                <Spring config={animationSpeed} delay={300} from={{ opacity: 0, y: '100px'}} to={{ opacity: 1, y:'0' }}>
                   {({opacity, y}) => <Main style={{transform: `translate3d(0, ${y},0)`, opacity}} dangerouslySetInnerHTML={{ __html: html }}/>}
                </Spring>
              </Fragment>
            )
          }
          right={

             <Gallery activeImage={0}  color={mainColor} images={[image, image2, image3]}/>

          }
        />
        <p>

        </p>

      </div >
    )
  }
}
export default SecondPage


export const query = graphql`
query AboutPageData($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      title
      subtitle
      image
      image2
      image3
    }
  }
}
`