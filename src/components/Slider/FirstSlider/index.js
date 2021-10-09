import React, { PureComponent } from 'react'
import { Button, Card } from 'antd'

import styles from './styles.module.scss'

class FirstSlide extends PureComponent {
  render () {
    return (
      <div className={styles.slide}>
        <div className={styles.firstBlock}>
          <div className={styles.firstText}>Completely free to mint your first NFT</div>
          <div className={styles.secondText}>Turn any creation info an item on the blockchain</div>
          <div className={styles.thirdText}>Trade digital items on Mintable to easily earn crypto</div>
          <span className={styles.btn}>
            <span className={styles.btnStart}>
              <Button type='primary'>Start Minting Now</Button>
            </span>
            <Button type='primary'>Shop Now</Button>
          </span>
        </div>
        <div className={styles.secondBlock}>
          <Card
            hoverable
            className={styles.card}
            bodyStyle={{ padding: 12 }}
            cover={<img alt='img' src='https://d1iczm3wxxz9zd.cloudfront.net/a0a585e1-5e55-4e91-95ba-f7fcfd2b2dc3/000000-0000000000/30448184261732469291077515326847521019760580489393460771270658812247146066488/ITEM_PREVIEW2.png' />}
          >
            <div className={styles.bottomBlock}>
              <div className={styles.bottomBlockFirst}>
                <img alt='avatar' src='https://mintable-user-profile-bucket-test-demo2.s3-us-west-2.amazonaws.com/Profile/PROFILE_e7f8afa8-b6c8-4736-b93c-0bac1eaa4540.jpg' />
                <div>mucokato53</div>
              </div>
              <div className={styles.bottomBlockSecond}>
                <div className={styles.bottomBlockSecondTop}>BLACK GLASSES.</div>
                <div className={styles.bottomBlockSecondBottom}>Ξ 0.012987</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default FirstSlide
