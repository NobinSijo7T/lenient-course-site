"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import styles from "./t-b.module.css";

export type TBType = {
  className?: string;
};

const TB: NextPage<TBType> = ({ className = "" }) => {
  const onTextContainerClick = useCallback(() => {
    // Please sync "Landing page" to the project
  }, []);

  const onTextContainerClick1 = useCallback(() => {
    // Please sync "Calendar" to the project
  }, []);

  return (
    <header className={[styles.tb, className].join(" ")}>
      <Image
        className={styles.ltLogoColourWhite1Icon}
        loading="lazy"
        width={60}
        height={60}
        sizes="100vw"
        alt=""
        src="/LT-Logo-Colour-White-1@2x.png"
      />
      <div className={styles.row}>
        <div className={styles.rowChild} />
        <div className={styles.text} onClick={onTextContainerClick}>
          <div className={styles.speakers}>Home</div>
        </div>
        <div className={styles.text3} onClick={onTextContainerClick1}>
          <div className={styles.courses}>Courses</div>
        </div>
        <div className={styles.text4}>
          <div className={styles.speakers}>Speakers</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <button className={styles.logInWrapper}>
          <div className={styles.logIn}>Log in</div>
        </button>
        <button className={styles.signUpWrapper}>
          <div className={styles.logIn}>SIGN UP</div>
        </button>
      </div>
    </header>
  );
};

export default TB;
