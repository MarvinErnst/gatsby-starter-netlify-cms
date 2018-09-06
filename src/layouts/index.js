import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import './index.css'
import { push } from 'gatsby-link';


const animationTime = 1000;


const SiteContent = styled.div`
  position: relative;
  margin-left: 100px;
`

const Hider = styled.div`
  transform: ${({show}) => show ? 'translate3d(0%,0,0)': 'translate3d(-100%,0,0)'};
  transition: all ${animationTime}ms;
`

class Layout extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
       show: false
    }
  }

  changeRoute = (to) => {
    this.setState({show:true})
    setTimeout(() => {
      push(to);
      this.setState({show:false});
    }, 1500)
  }

  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Navbar onRouteChange={this.changeRoute} />
        <SiteContent>
          {children({ show: this.state.show, ...this.props})}
        </SiteContent>

      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
