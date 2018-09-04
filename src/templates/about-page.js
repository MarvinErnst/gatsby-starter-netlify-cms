import React, { Fragment } from 'react'
import Link, { push } from 'gatsby-link'
import Header from '../components/header';
import Content from '../components/content';
import Gallery from '../components/gallery';
import { Main, P } from '../styles/generals';
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

const animation = new AnimatedValue(window.innerWidth-100);
const show = (daata) => spring(animation, { to: window.innerWidth }).start((fata) => {
  push(daata);
});
const hide = () => spring(animation, { to: 0, ...animationSpeed}).start();

class SecondPage extends React.Component {

  constructor() {
    super();
    this.state = {
      title: 'About our team',
      subtitle: 'Dolore magni error est unde odio atque quis',
      text: `<p>Eum velit qui voluptate et autem error maiores aliquam. Repellat blanditiis qui tempore ratione qui eligendi non magni. Dignissimos ipsa cumque veniam. Est voluptas voluptas. Dolore magni error est unde odio atque quis. Saepe quam magnam libero non et tempore dolores.</p>
      <p>
      Repellat quam corporis non incidunt facere cumque. Id recusandae quidem autem commodi ex sit. Est quidem eaque dolores accusantium eveniet magni non. Eaque veritatis autem qui neque nihil deserunt. Quae quo cumque minima dolorem impedit aut hic. Animi error magni asperiores in mollitia. Quod vel sit accusantium quae iure. Ullam ut occaecati sunt placeat repellendus optio quaerat..</p><p>Eum velit qui voluptate et autem error maiores aliquam. Repellat blanditiis qui tempore ratione qui eligendi non magni. Dignissimos ipsa cumque veniam. Est voluptas voluptas. Dolore magni error est unde odio atque quis. Saepe quam magnam libero non et tempore dolores.</p>
      <p>
      Repellat quam corporis non incidunt facere cumque. Id recusandae quidem autem commodi ex sit. Est quidem eaque dolores accusantium eveniet magni non. Eaque veritatis autem qui neque nihil deserunt. Quae quo cumque minima dolorem impedit aut hic. Animi error magni asperiores in mollitia. Quod vel sit accusantium quae iure. Ullam ut occaecati sunt placeat repellendus optio quaerat..</p><h3>asldhaslkdh</h3><p>Eum velit qui voluptate et autem error maiores aliquam. Repellat blanditiis qui tempore ratione qui eligendi non magni. Dignissimos ipsa cumque veniam. Est voluptas voluptas. Dolore magni error est unde odio atque quis. Saepe quam magnam libero non et tempore dolores.</p>
      <p>
      Repellat quam corporis non incidunt facere cumque. Id recusandae quidem autem commodi ex sit. Est quidem eaque dolores accusantium eveniet magni non. Eaque veritatis autem qui neque nihil deserunt. Quae quo cumque minima dolorem impedit aut hic. Animi error magni asperiores in mollitia. Quod vel sit accusantium quae iure. Ullam ut occaecati sunt placeat repellendus optio quaerat..</p><p>Eum velit qui voluptate et autem error maiores aliquam. Repellat blanditiis qui tempore ratione qui eligendi non magni. Dignissimos ipsa cumque veniam. Est voluptas voluptas. Dolore magni error est unde odio atque quis. Saepe quam magnam libero non et tempore dolores.</p>
      <p>
      Repellat quam corporis non incidunt facere cumque. Id recusandae quidem autem commodi ex sit. Est quidem eaque dolores accusantium eveniet magni non. Eaque veritatis autem qui neque nihil deserunt. Quae quo cumque minima dolorem impedit aut hic. Animi error magni asperiores in mollitia. Quod vel sit accusantium quae iure. Ullam ut occaecati sunt placeat repellendus optio quaerat..</p>`
    }

  }
  componentDidMount = () => {
    // hadling cover parallax
    window.addEventListener('scroll', this.handleOnScroll)
  //  setTimeout(hide, 1500);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll)
  }

  handleOnScroll = (e) => {
    console.log(e)
  }

  render() {
    const { title, subtitle, text } = this.state;

    return (
      <div>
          <Spring config={animationSpeed} delay={100} from={{ opacity: 1, x: '0%'}} to={{ opacity: 0, x:'-100%' }}>
            {({opacity,x}) =>  <animated.div className="hider" style={{transform: `translate3d(${x}, 0,0)` }} />}
          </Spring>
        <Content
          left={
            (
              <Fragment>
                <Spring config={animationSpeed} delay={200} from={{ opacity: 0, y: '-100px'}} to={{ opacity: 1, y:'0' }}>
                {({opacity, y}) => <Header style={{transform: `translate3d(0, ${y},0)`, opacity}} title={title} subtitle={subtitle} />}
                </Spring>


                 <Spring config={animationSpeed} delay={300} from={{ opacity: 0, y: '100px'}} to={{ opacity: 1, y:'0' }}>
                   {({opacity, y}) => <Main style={{transform: `translate3d(0, ${y},0)`, opacity}} dangerouslySetInnerHTML={{ __html: text }}/>}
                 </Spring>
              </Fragment>
            )
          }
          right={
            <Gallery />
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
    }
  }
}
`