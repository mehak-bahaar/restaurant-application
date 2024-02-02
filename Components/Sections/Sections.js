import React from 'react'
import styles from './Sections.module.css'
import Image from 'next/image'

const Sections = (props) => {
  const {title, description , imgurl , subTitle, btnText, left } = props
  return (
    <>
      <div className={styles.container}>
        {left && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} fill src={imgurl}></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={styles.center}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subTitle}>{subTitle}</h3>
            <p className={styles.description}>{description}</p>
            <button className={styles.btn}>{btnText}</button>
          </div>
        </div>
        {!left && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} fill src={imgurl}></Image>
          </div>
        )}
      </div>
    </>
  );
}

export default Sections
