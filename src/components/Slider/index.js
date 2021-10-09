import React, { Component } from 'react'
import { Carousel } from 'antd';

import FirstSlider from './FirstSlider'

class Slider extends Component {
  render () {
    return (
      <Carousel>
        <FirstSlider />
        <FirstSlider />
        <FirstSlider />
      </Carousel>
    )
  }
}

export default Slider
