import React from 'react'
import styles from './about.module.css'
import Image from 'next/image';
import Head from 'next/head';

const About = () => {

  return (
    <>
      <Head>
        <title>Cafe 42 - This Is Us</title>
      </Head>
      <div className={styles.thisIsUs}>
        <div className={styles.center2}>
          <h1 className={styles.thisIsUsTitle}>This Is Us</h1>
          <p className={styles.thisIsUsDesc}>
            We are big believers in the power of a good meal and a friendly
            place to eat. Stop by for fresh, locally sourced food, served with a
            warm smile
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.center}>
            <h2 className={styles.title}>
              The Best Bite In The Neighbourhood.
            </h2>
            <p className={styles.desc}>
              Experience the neighborhoods finest bites with us — a culinary
              journey of delectable flavors and unmatched quality. Indulge in
              the best bites right at your doorstep, where every dish is a
              celebration of community and exquisite taste.
            </p>
            <button className={styles.btn}>View Menu</button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="food"
            src="/this-is-us1.jpeg"
            className={styles.img}
            fill
          ></Image>
        </div>
      </div>
      <div className={styles.divider}>
        <p className={styles.dividerPara}>Real Food. No Secret Ingredients.</p>
      </div>
      <div className={styles.reverse}>
        <div className={styles.imgContainer}>
          <Image
            alt="waiter"
            fill
            src="/waiters.jpeg"
            className={styles.img}
          ></Image>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.center}>
            <h2 className={styles.title}>From Our Hearts to Your Plate.</h2>
            <p className={styles.desc}>
              Savor the heartfelt essence of our culinary creations, expertly
              crafted and delivered to your plate. Experience the passion and
              dedication we bring from our kitchen to your dining pleasure. It
              is more than a meal; it is a journey of flavors made just for you.
            </p>
            <button className={styles.btn}>Visit Us</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
