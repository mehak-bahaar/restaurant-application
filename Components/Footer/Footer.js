import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterTitle}>Newsletter</h2>
          <p className={styles.newsletterDesc}>
            Stay up to date with all the latest <br /> from 47th Cafe
          </p>
          <form action="" className={styles.form}>
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              className={styles.email}
            />
            <button className={styles.join} type="submit">
              Join
            </button>
            <p className={styles.subscribe}>thanks for subscribing!</p>
          </form>
        </div>
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>Talk To Us</h2>
          <div className={styles.contact}>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
          </div>
          <div className={styles.address}>
            <p>500 Terry Francine St.</p>
            <p>San Francisco, CA 94158</p>
          </div>
        </div>
        <div className={styles.socialmedia}>
          <a className={styles.smicons} href="/">
            Instagram
          </a>
          <a className={styles.smicons} href="/">
            Facebook
          </a>
          <a className={styles.smicons}  href="/">
            Twitter
          </a>
        </div>
      </div>
      <div className={styles.container2}>&copy; 2035 by 47th Cafe </div>
    </div>
  );
}

export default Footer
