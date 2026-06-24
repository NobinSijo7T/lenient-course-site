import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <Image
        className={styles.frameChild}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameItem}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameInner}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameIcon}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild2}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild3}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild4}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild5}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild6}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild7}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild8}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv} />
        <Image
          className={styles.chatgptImageJun19202609}
          width={686}
          height={590}
          sizes="100vw"
          alt=""
          src="/ChatGPT-Image-Jun-19-2026-09-27-58-PM-2@2x.png"
        />
      </div>
      <Image
        className={styles.frameChild9}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild10}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <Image
        className={styles.frameChild11}
        loading="lazy"
        width={123}
        height={123}
        sizes="100vw"
        alt=""
        src="/Frame-2087325062@2x.png"
      />
      <div className={styles.frameContainer}>
        <div className={styles.frameChild12} />
        <div className={styles.frameChild13} />
        <div className={styles.frameChild14} />
        <div className={styles.frameChild15} />
        <div className={styles.frameChild16} />
        <div className={styles.frameChild17} />
        <div className={styles.frameChild18} />
        <div className={styles.frameChild19} />
        <div className={styles.frameChild20} />
        <div className={styles.frameChild21} />
        <div className={styles.frameChild22} />
        <div className={styles.frameChild23} />
        <div className={styles.frameChild24} />
        <div className={styles.frameChild25} />
        <div className={styles.frameChild26} />
        <div className={styles.frameChild27} />
      </div>
    </section>
  );
};

export default FrameComponent;
