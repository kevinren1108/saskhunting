import React from 'react';
import styles from '../../styles/Home.module.css'

export default function Home() {
    return (
      <div className={styles.container}>
        
        <main className={styles.main}>
          <h1 className={styles.title}>
            Saskatchewan Hunting
          </h1>

          <h3 className={styles.subtitle}>
            Hunting on The Truly Land of Living Skies
          </h3>
  
          <p className={styles.description}>
            Get your licence
          </p>
  
          <div className={styles.grid}>
            <a href="https://prairiefirearmstraining.ca/" className={styles.card}>
              <h2>Prairie Firearms Training</h2>
              <p>With over 40 years of hunting and shooting experience, James bring a wealth of knowledge to the table and provide a safe and fun process to get you PAL/RPAL firearm licence in Regina.</p>
            </a>
  
            <a href="https://saskhuntered.com/" className={styles.card}>
              <h2>Saskatchewan Association For Firearm Education</h2>
              <p>SAFE is a non-profit association of volunteer instructors with a common purpose of promoting safe, ethical hunting as a way of life and the shooting sports as safe, worthwhile forms of recreation. </p>
            </a>
          </div>
  
          <p className={styles.description}>
            Pruches your firearm
          </p>
  
          <div className={styles.grid}>
            <a href="https://www.rangeviewsports.ca/" className={styles.card}>
              <h2>Rangeviewe Sports &rarr;</h2>
              <p>Rangeview Sports is a renowned Online Gun Store & Shop in Canada offering a wide range of products in-store and online. Visit us in Newmarket, Ontario.</p>
            </a>
  
            <a
              href="https://g4cgunstore.com/"
              className={styles.card}
            >
              <h2>G4C GUN STORE &rarr;</h2>
              <p>G4C is a Firearms, Ammunition and Shooting Supplies retail store in Markham, Ontario. We are dedicated to serve firearm enthusiasts in Canada.</p>
            </a>
  
            <a
              href="https://www.prairieguntraders.ca/"
              className={styles.card}
            >
              <h2>Prairie Gun Traders &rarr;</h2>
              <p>
                Prairie Gun Traders is a locally owned and operated gun shop located in Avonlea, Saskatchewan approximately 45 minutes outside of Regina and Moose Jaw.
              </p>
            </a>
  
            <a
              href="https://tntgunworks.com/"
              className={styles.card}
            >
              <h2>TnT Gunworks Ltd. &rarr;</h2>
              <p>
                New and Used Firearms Sales · Custom Pistol & Rifle Work · Factory Ammunition & Reloading Supplies · Hot Bluing and Refinishing Services
              </p>
            </a>
  
            <a
              href="https://www.cabelas.ca/"
              className={styles.card}
            >
              <h2>Cabelas &rarr;</h2>
              <p>Quality Hunting, Fishing, Camping and Outdoor Gear at competitive prices.</p>
            </a>
  
            <a href="https://www.gotenda.com/" className={styles.card}>
              <h2>Tenda Canada &rarr;</h2>
              <p>Retail & Online Gun Store</p>
            </a>
  
          </div>
  
          <p className={styles.description}>
            Go to shoting range
          </p>
  
          <div className={styles.grid}>
  
            <a
              href="https://rfgl.net/"
              className={styles.card}
            >
              <h2>Regina Fish & Game League &rarr;</h2>
              <p>
                The Regina Fish & Game League is a 1500 member strong non-profit corporation based in Regina Saskatchewan. The range is located on the north side of Regina about 25km.
              </p>
            </a>
  
            <a
              href="https://reginawildlifefederation.com/"
              className={styles.card}
            >
              <h2>Regina Wildlife Federation &rarr;</h2>
              <p>
              The RWF is a non-profit wildlife conservation organization. The range is located on the east side of Regina about 25km.
              </p>
            </a>
  
            <a
              href="http://www.reginatrapandskeet.com/"
              className={styles.card}
            >
              <h2>Regina Trap & Skeet Club &rarr;</h2>
              <p>
                The Regina Trap and Skeet Club (RTSC) is an excellent venue for shotgun enthusiasts to engage in both trap and skeet shooting. The range is located on the north side of Regina.
              </p>
            </a>
  
          </div>
        </main>
  
        <footer className={styles.footer}>
          
        </footer>
      </div>
    );
  }
 
