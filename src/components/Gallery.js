import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled.div`
height: 100vh;
width: ${({width}) => width};
position: fixed;
overflow: hidden;
right: 0
`
const Image = styled.div`
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  opacity: ${({show}) => show ? 1 : 0};
  background-image: url(${({src}) => src});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  background-color: ${({color}) => color};
  transition: all 0.5s;
`

class Gallery extends Component {

 static propTypes = {
   transitionPoints: PropTypes.arrayOf(PropTypes.number),
   activeImage: PropTypes.number,
   scroll: PropTypes.bool,
   width: PropTypes.string,
 }

 static defaultProps = {
  transitionPoints: null,
  activeImage: 0,
  scroll: true,
  width: '40%'
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
    if(props.activeImage !== state.activeImageId && !props.scroll ) {
      this.setState({
        activeImageId: this.props.activeImage
      });
    }
    return false;
  }

  handleOnScroll = (e) => {
    const {transitionPoints} = this.state;
    const currentScrollPosition = e.currentTarget.scrollY;

    // for(let i = 0; i < transitionPoints.length; i++) {
    //   const accPosition = transitionPoints[i];
    //   const nextPos =
    // }
    transitionPoints.forEach((position, index) => {
      const accPosition = position;
      const nextPosition = transitionPoints[index+1] || document.body.scrollHeight;
      if(currentScrollPosition < nextPosition && currentScrollPosition > accPosition && index !== this.state.activeImageId) {
       this.setState({
         activeImageId: index
       });
     }

   });

  }

  render() {
    const {color, images, width} = this.props;
    const {activeImageId} = this.state;
    return (
      <GalleryContainer width={width}>
        <div>
          {images.map((src, index) => <Image show={index === activeImageId} color={color} src={src} />
          )}
        </div>

      </GalleryContainer>
    )
  }
}



export default Gallery;