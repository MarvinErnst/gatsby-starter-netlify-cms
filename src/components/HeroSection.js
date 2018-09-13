import React, { Component } from 'react'
import styled from 'styled-components'
import ContactBox from '../components/ContactBox';
import { Main, P, mainColor, Line } from '../styles/generals';

const Container = styled.div`
  width: calc(84vw - 100px);
  height: 84vh;
  padding:  8vh 8vw;
  overflow: hidden;
  position: relative;
  // background-color: rgba(0,0,0,0.5)
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
// background-position:`${50+this.state.diffX}% ${50 +this.state.diffY}%`,
  //background-color: ${{c}}this.props.blendColor,
const HeroSection = styled.div`

  width: calc(100vw);
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: -100px;
  background-position: left;
  background-image: ${({image}) => `url(${image})`};
  background-blen-mode: soft-light;

`
export default class HeroSectionComponent extends Component {

  render() {
    return (
      <HeroSection image={this.props.image}
        // onMouseMove={this.handleMouseMove}

      >

        <Container>
          <TopBar>
           {this.props.top}
          </TopBar>

          <MainContent>
            <MainContentHeadline>Hallo </MainContentHeadline>
            <div style={{position:'relative',height:1, marginLeft: '12%'}}>
              <Line width="400px" color="white" />
            </div>
            <MainContentDesc>Eaque nam totam consequatur commodi. Sint qui ut. Dolorum et quaerat sequi excepturi ut fuga aut. A perferendis quae numquam dignissimos et dolorum.</MainContentDesc>
          </MainContent>

          <BottomBar>{this.props.bottom}
          </BottomBar>
        </Container>
      </HeroSection>
    )
  }
}
