import React, { PureComponent } from 'react'

import Header from '../Header'

export default class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        <Header />
        { this.props.children }
      </div>
    )
  }
}
