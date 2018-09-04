import React, { Component } from 'react'
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
  background-size: 100%;
  background-repeat: no-repeat;
`

export default class Gallery extends Component {
  render() {
    return (
      <GalleryContainer>
        <Image src={'https://picsum.photos/800/1080/?image=767'} />
      </GalleryContainer>
    )
  }
}
