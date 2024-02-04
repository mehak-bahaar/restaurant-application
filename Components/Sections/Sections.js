'use client'
import React, { useEffect, useState } from 'react'
import styles from './Sections.module.css'
import Image from 'next/image'

const Sections = (props) => {
  let {title, description , imgurl , subTitle, btnText, left } = props
  const [visible, setvisible] = useState(left);
useEffect(() => {
  const handleResize = () =>{
    if(window.innerWidth<896){
      setvisible(false)
    }else{
      setvisible(left)
    }
  }
   window.addEventListener("resize", handleResize);
   handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
}, []);
  return (
    <>
      <div className={styles.container}>
        {visible && (
          <div className={styles.imageContainer}>
            <Image alt="img" className={styles.image} fill src={imgurl}></Image>
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
        {!visible && (
          <div className={styles.imageContainer}>
            <Image alt="img" className={styles.image} fill src={imgurl}></Image>
          </div>
        )}
      </div>
    </>
  );
}

export default Sections
