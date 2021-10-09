import React, { Component } from 'react'
import Link from 'next/link'
import { Input, Button, Drawer } from 'antd'
import { AudioOutlined, AlignRightOutlined } from '@ant-design/icons'

import styles from './styles.module.scss'

const { Search } = Input
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#550DED'
    }}
  />
)

export default class Header extends Component {
  state = {
    visible: false
  }

  toggleNav = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  render () {
    const { visible } = this.state
    return (
      <div className={styles.header}>
        <Link href='/'>
          <img className={styles.logo} src='https://mintable.app/static/media/logo.448e3bcd.svg' alt='logo' />
        </Link>
        <div className={styles.search}>
          <Search
            placeholder='Search for anything'
            enterButton='Search'
            size='large'
            suffix={suffix}
            onSearch={() => {}}
          />
        </div>
        <div className={styles.menuItem}>
          Browse
        </div>
        <div className={styles.menuItem}>
          Discover
        </div>
        <div className={styles.menuItem}>
          Mint an item
        </div>
        <div className={styles.menuItem}>
          Vote/DAO
        </div>
        <div className={styles.signIn}>
          <Button>Login</Button>
        </div>
        <div className={styles.signUp}>
          <Button type='primary'>Sign Up</Button>
        </div>
        <div className={styles.icNav}><AlignRightOutlined onClick={this.toggleNav} /></div>
        <Drawer title='Menu' placement='right' onClose={this.toggleNav} visible={visible}>
          <p>Browse</p>
          <p>Discover</p>
          <p>Mint an item</p>
          <p>Vote/DAO</p>
          <p><Button>Login</Button></p>
          <p><Button type='primary'>Sign Up</Button></p>
        </Drawer>
      </div>
    )
  }
}
