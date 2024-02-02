import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imagecontainer}>
        </div>
        <div className={styles.hero}>
          <h3 className={styles.subTitle}>Cafe & Restaurant Est.2035</h3>
          <h1 className={styles.title}>
            Your Go-To Spot for Delicious Eats & Coffee
          </h1>
          <div className={styles.buttons}>
            <button className={styles.button}>Order Online</button>
            <button className={styles.button}>Our Menu</button>
          </div>
        </div>
      </div>
      <div className={styles.brunch}>
        <span>Weekend Brunch</span> <span>|</span>{" "}
        <span>Saturday 9am - 2pm</span>
      </div>
    </>
  );
}

export default Hero
