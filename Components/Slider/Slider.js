import React from 'react'
import styles from './Slider.module.css'
import Image from 'next/image';
const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h3 className={styles.heading}>Drop By for a Bite.</h3>
        <div className={styles.info}>
          <div className={styles.addressInfo}>
            <h4 className={styles.addressTitle}>Address</h4>
            <p className={styles.address}>
              500 Terre Francie St.
              <br />
              San Francicco CA 94158
            </p>
          </div>
            <div className={styles.line}></div>
            <div className={styles.timingInfo}>
              <h4 className={styles.TimingTitle}>Opening Hours</h4>
              <ul className={styles.timingList}>
                <li className={styles.timingListItem}>Mon - Fri : 9am - 6pm</li>
                <li className={styles.timingListItem}>Saturday : 10am - 2pm</li>
                <li className={styles.timingListItem}>Sunday: Closed</li>
              </ul>
            </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.slider}>
          <div className={styles.sliderImg}>
            <Image alt='img'  className={styles.image} fill src='/enjoy.jpg'></Image>
          <Image alt='img'  src='/p.webp' fill className={styles.img}></Image>
          </div>
          <div className={styles.sliderImg}>
          <Image alt='img' src='/p2.jpeg' fill className={styles.img} ></Image>
          </div>
          <div className={styles.sliderImg}>
          <Image alt='img' src='/pp.jpeg' fill className={styles.img}></Image>
          </div>
          <div className={styles.sliderImg}>
          <Image alt='img' src='/p0.webp' fill className={styles.img}></Image>
          </div>
          <div className={styles.sliderImg}>
          <Image alt='img' src='/p5.webp' fill className={styles.img}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider
