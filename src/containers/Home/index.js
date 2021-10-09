import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Slider from 'components/Slider'
import NFTs from 'components/NFTs'

class Home extends Component {
  static async getInitialProps ({ store, query }) {
    return { ok: true }
  }

  render () {
    return (
      <Fragment>
        <Slider />
        <NFTs />
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {...state}
}

Home.propTypes = {

}

export default connect(mapStateToProps, {})(Home)
