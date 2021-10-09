import React, { PureComponent } from 'react'
import { Card } from 'antd';

import styles from './styles.module.scss'

class FirstSlide extends PureComponent {
  render () {
    const { data } = this.props;
    return (
      <div className={styles.block}>
        <Card
          hoverable
          className={styles.card}
          bodyStyle={{ padding: 12 }}
          cover={<img alt="img" src={data.image} />}
        >
          <div className={styles.bottomBlock}>
            <div className={styles.bottomBlockFirst}>
              <img alt="avatar" src={data.avatar} />
              <div>{data.name}</div>
            </div>
            <div className={styles.bottomBlockSecond}>
              <div className={styles.bottomBlockSecondTop}>{data.title}</div>
              <div className={styles.bottomBlockSecondBottom}>{`Ξ ${data.price}`}</div>
            </div>
          </div>
        </Card>
        </div>
    )
  }
}

export default FirstSlide
