import React from 'react'
import styles from './menu.module.css'
const Menu = () => {
  return (
    <>
      <div className={styles.ourMenu}>
        <div className={styles.center2}>
          <h1 className={styles.ourMenuTitle}>Our Menu</h1>
          <p className={styles.outMenuDesc}>
            Discover a world of flavors in Our Menu. From appetizers to mains,
            each dish is a crafted delight. Find your perfect bite for an
            unforgettable dining experience with us.
          </p>
        </div>
      </div>
      <div className={styles.menu}>
            <h5 className={styles.heading}>All Day Everyday <br /></h5>
        <div className={styles.center}>
          <div className={styles.menuCatagories}>
              <h3 className={styles.menuCatagoriesTitle}>Bakery</h3>
            <div className={styles.catagory}>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Croissant(Plain/Chocolate)</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Daily Miffin</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam!
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Cheesecake</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
            </div>
              <h3 className={styles.menuCatagoriesTitle}>All-Day Breakfast</h3>
            <div className={styles.catagory}>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Granolla and Greek Yougurt</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Chia Pudding</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam!
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Superfood Acia Bowl</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Avocado Toast</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Eggs Benedict</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Bacon & Eggs on Rye</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Spanish & Salmon Brioche</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Smoked Salmon Bagel</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
              <div className={styles.menuItems}>
                <h4 className={styles.name}>Green Shakshuka</h4>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  commodi quod magnam! 
                </p>
                <span className={styles.price}>Rs.600.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu
