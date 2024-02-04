import React from 'react'
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';


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
            <div className={styles.nameContainer}>
              <div className={styles.name}>
                <label htmlFor="firstName" className={styles.nameLabel}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={styles.nameInput}
                />
              </div>
              <div className={styles.name}>
                <label htmlFor="lastName" className={styles.nameLabel}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className={styles.nameInput}
                />
              </div>
            </div>
            <div className={styles.email}>
              <label htmlFor="email" className={styles.emailLabel}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.emailInput}
              />
            </div>
            <div className={styles.message}>
              <label htmlFor="message" className={styles.messageLabel}>
                Message
              </label>
              <textarea
                type="textarea"
                name="message"
                id="message"
                rows="5"
                className={styles.messageInput}
              />
            </div>
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
                {<FontAwesomeIcon icon={faLocationDot} size="2x" />}

                <h5 className={styles.infoHeading}>Address</h5>
                <p className={styles.infoDesc}>
                  500 Terry Francine St. <br />
                  San Francisco, CA 94158
                </p>
              </div>
              <div className={styles.infoItem}>
                {<FontAwesomeIcon icon={faEnvelope} size="2x" />}

                <h5 className={styles.infoHeading}>Email</h5>
                <p className={styles.infoDesc}>info@mysite.com</p>
              </div>
              <div className={styles.infoItem}>
                {<FontAwesomeIcon icon={faPhone} size="2x" />}

                <h5 className={styles.infoHeading}>Phone Number</h5>
                <p className={styles.infoDesc}>123-456-7890</p>
              </div>
              <div className={styles.infoItem}>
                {<FontAwesomeIcon icon={faBellConcierge} size="2x" />}

                <h5 className={styles.infoHeading}>Timing</h5>
                <ul className={styles.timingList}>
                  <li className={styles.timingListItem}>
                    Mon - Fri : 9am - 6pm
                  </li>
                  <li className={styles.timingListItem}>
                    Saturday : 10am - 2pm
                  </li>
                  <li className={styles.timingListItem}>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
