import type { NextPage } from "next";
import Image from "next/image";
import DotField from "./DotField";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <DotField
        dotRadius={3}
        dotSpacing={20}
        cursorRadius={500}
        bulgeOnly={true}
        bulgeStrength={67}
        glowRadius={160}
        gradientFrom="rgba(168, 85, 247, 0.6)"
        gradientTo="rgba(130, 100, 180, 0.5)"
        glowColor="#a855f7"
      />
      <Image
        className={styles.chatgptImageJun19202609}
        width={510}
        height={510}
        alt=""
        src="/hero-img.png"
      />
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

    </section>
  );
};

export default FrameComponent;
