import React, { Component } from 'react'
import styled from 'styled-components'

import WrapperScroll from 'components/WrapperScroll'
import { FAKE_DATA } from 'utils/constants'
import Item from './Item'

import styles from './styles.module.scss'

const Wrapper = styled.div`
  background: #ffffff;
  margin-top: 12px;
  padding: 4px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 12px 36px 12px 36px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
`

const Grid = styled.div`
  display: flex;
  margin: 2px 0px;
  padding: 0 2px;
`

class Slider extends Component {
  render () {
    return (
      <Wrapper>
        <WrapperScroll
          total={8}
          cols={4.6}
          className={`${styles.oneRowContent} ${styles.oneRowContentGridAds}`}
        >
          <Grid>
            {FAKE_DATA.map((data) => <Item key={data.id} data={data} />)}
          </Grid>
        </WrapperScroll>
      </Wrapper>
    )
  }
}

export default Slider
