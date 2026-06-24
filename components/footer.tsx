import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.column2}>
            <div className={styles.lenientTreeAccessToContainer}>
              <b className={styles.lenientTree}>Lenient Tree</b>
              <span className={styles.accessToEvents}>
                <br />
                Access to events are now easy
              </span>
            </div>
            <div className={styles.theLenientTree}>
              © 2025 The Lenient Tree
              <br />
              All rights reserved
            </div>
          </div>
          <div className={styles.row2}>
            <Image
              className={styles.rowChild}
              loading="lazy"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Group-31.svg"
            />
            <Image
              className={styles.rowChild}
              loading="lazy"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Group-32.svg"
            />
            <Image
              className={styles.vectorIcon}
              loading="lazy"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Vector.svg"
            />
            <Image
              className={styles.vectorIcon}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Vector1.svg"
            />
            <Image
              className={styles.vectorIcon}
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Vector2.svg"
            />
          </div>
        </div>
        <div className={styles.column3}>
          <h3 className={styles.quickLinks}>Quick Links</h3>
          <div className={styles.column4}>
            <h3 className={styles.home}>Home</h3>
            <h3 className={styles.home}>Courses</h3>
            <h3 className={styles.home}>Speakers</h3>
          </div>
        </div>
        <div className={styles.column5}>
          <h3 className={styles.essentials}>Essentials</h3>
          <div className={styles.column6}>
            <h3 className={styles.termsConditions}>{`Terms & Conditions`}</h3>
            <h3 className={styles.termsConditions}>Privacy Policy</h3>
            <h3 className={styles.termsConditions}>Blogs</h3>
          </div>
        </div>
      </div>
      <h1 className={styles.lenient}>LENIENT</h1>
    </footer>
  );
};

export default Footer;
