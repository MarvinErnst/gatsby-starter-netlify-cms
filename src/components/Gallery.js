import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled.div`
height: 100vh;
width: 100%;
position: fixed;
overflow: hidden;
`
const Image = styled.div`
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 60%;
  background-image: url(${({src}) => src});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  background-color: ${({color}) => color};
  background-blend-mode: hard-light;
  transition: all 0.5s
`

class Gallery extends Component {

 static propTypes = {
   transitionPoints: PropTypes.arrayOf(PropTypes.number),
   activeImage: PropTypes.number,
 }

 static defaultProps = {
  transitionPoints: null,
  activeImage: 0
 }

 constructor(props) {
   super(props);

   this.state = {
     activeImageId: this.props.activeImage,
     transitionPoints: this.props.transitionPoints,
   }
 }
  componentDidMount = () => {
    if(this.props.images.length > 1)  {
      window.addEventListener('scroll', this.handleOnScroll);
      if(!this.props.transitionPoints) {
        const transitionPoints = this.props.images.map((e, i) => {
          const height = document.body.scrollHeight - window.innerHeight;
          return (height / 3 ) * i
        });
        this.setState({transitionPoints})
      }

    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll)
  }

  componentWillUpdate(props, state) {
    if(props.activeImage !== state.activeImageId) {
      this.setState({
        activeImageId: this.props.activeImage
      })
    }
  }

  handleOnScroll = (e) => {
   const {transitionPoints} = this.state;
   const currentScrollPosition = e.currentTarget.scrollY;
   transitionPoints.forEach((position, index) => {
     if(currentScrollPosition > position && index !== this.state.activeImageId) {
       this.setState({
         activeImageId: index
       })
     }
   });

  }
  render() {
    const {color, images} = this.props;
    const {activeImageId} = this.state;
    return (
      <GalleryContainer >
        {images && <Image color={color} src={images[activeImageId]} />}

      </GalleryContainer>
    )
  }
}



export default Gallery;