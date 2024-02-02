'use client'
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    const [showNavButton, setShowNavButton] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.num}>47</span>Cafe
      </div>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/this-is-us">
          This is us
        </Link>
        <Link className={styles.link} href="/menu">
          Menu
        </Link>
        <Link className={styles.link} href="/contact-us">
          Contact us
        </Link>
        <Link className={styles.link} href="/login">
          Log in
        </Link>
      </div>
      {!showNavButton && (
        <div
          className={styles.navButton}
          onClick={() => setShowNavButton((prev) => !prev)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      )}
      {showNavButton && (
        <>
          <div
            className={styles.crossButton}
            onClick={() => setShowNavButton((prev) => !prev)}
          >
            <div className={styles.cross1}></div>
            <div className={styles.cross2}></div>
          </div>
          <div
            className={styles.nlinks}
            onClick={() => {
              setShowNavButton(false);
            }}
          >
            <Link className={styles.nlink} href="/">
              Home
            </Link>
            <Link className={styles.nlink} href="/this-is-us">
              This is us
            </Link>
            <Link className={styles.nlink} href="/menu">
              Menu
            </Link>
            <Link className={styles.nlink} href="/contact-us">
              Contact us
            </Link>
            <Link className={styles.nlink} href="/login">
              Log in
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar
