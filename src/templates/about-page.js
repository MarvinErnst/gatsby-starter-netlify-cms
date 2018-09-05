import React, { Fragment } from 'react'
import Link, { push } from 'gatsby-link'
import Header from '../components/header';
import Content from '../components/content';
import Gallery from '../components/gallery';
import Hider from '../components/Hider'
import { Main, P, mainColor } from '../styles/generals';
import {
  AnimatedValue,
  animated,
  Spring,
  interpolate,
  controller as spring
} from 'react-spring';

/** Animations */
const animationSpeed = {
  tension: 280, friction: 160
}

// const animation = new AnimatedValue(window.innerWidth-100);
// const show = (daata) => spring(animation, { to: window.innerWidth }).start((fata) => {
//   push(daata);
// });
// const hide = () => spring(animation, { to: 0, ...animationSpeed}).start();

class SecondPage extends React.Component {
  render() {
    const {frontmatter, html} = this.props.data.markdownRemark;
    const { title, subtitle, image, image2, image3 } = frontmatter;

    return (
      <div>
        <Hider />
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