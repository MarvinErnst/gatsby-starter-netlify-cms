import React, { Component } from 'react'
import {
  AnimatedValue,
  animated,
  Spring,
  interpolate,
  controller as spring
} from 'react-spring';

const animationSpeed = {
  tension: 280, friction: 160
}

export default class Hider extends Component {
  render() {
    return (
      <div>
         <Spring config={animationSpeed} delay={400} from={{ opacity: 1, x: '0%'}} to={{ opacity: 1, x:'-100%' }}>
            {({opacity,x}) =>  <animated.div className="hider" style={{transform: `translate3d(${x}, 0,0)` }} />}
          </Spring>
          <Spring config={animationSpeed} delay={400} from={{ opacity: 0.75, x: '0%'}} to={{ opacity: 0, x:'-40%' }}>
            {({opacity,x}) =>  <animated.div className="hider" style={{opacity:  opacity,transform: `translate3d(${x}, 0,0)` }} />}
          </Spring>
      </div>
    )
  }
}
