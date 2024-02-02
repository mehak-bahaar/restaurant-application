import React from 'react'
import styles from './contact.module.css'
const Contact = () => {
  return (
    <>
      <div className={styles.contactUs}>
        <div className={styles.center2}>
          <h1 className={styles.contactUsTitle}>Contact Us</h1>
          <p className={styles.contactUsDesc}>
            Have a question or suggestion? Contact us! We're here to assist you.
            Reach out via phone, email, or stop by in person. Your feedback
            matters, and we appreciate your connection with 47th Cafe
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form action="" className={styles.center}>
            <label htmlFor="firstName" className={styles.name}>
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={styles.nameInput}
            />
            <label htmlFor="lastName" className={styles.name}>
              First Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={styles.nameInput}
            />
            <label htmlFor="email" className={styles.email}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.emailInput}
            />
            <label htmlFor="message" className={styles.message}>
              Message
            </label>
            <input
              type="textarea"
              name="message"
              id="message"
              className={styles.messageInput}
            />
            <button type="submit" className={styles.btn}>
              Submit
            </button>
            <p>Thanks for Submitting! Nothing will happen by this.</p>
          </form>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.infoContainer}>
          <div className={styles.center}>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                {/* icon from fontawsome */}
                <h5 className={styles.infoHeading}>Address</h5>
                <p className={styles.infoDesc}>
                  500 Terry Francine St. <br />
                  San Francisco, CA 94158
                </p>
                {/* copy this down to make the rest i am way too much tired to do this any more and i have to study math */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
