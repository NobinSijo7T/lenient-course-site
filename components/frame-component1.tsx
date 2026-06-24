import type { NextPage } from "next";
import Image from "next/image";
import Component1 from "./component1";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.quoteTextBlockParent}>
        <div className={styles.quoteTextBlock}>
          <div className={styles.theIlliterateOfThe21stCen}>
            <i className={styles.theIlliterateOf}>
              The illiterate of the 21st century will not
            </i>
          </div>
          <i className={styles.beThoseWho}>
            {" "}
            be those who cannot read and write, but.
          </i>
          <i className={styles.thoseWhoCannot}>
            those who cannot learn, unlearn and relearn.
          </i>
        </div>
        <Image
          className={styles.frameChild}
          width={48}
          height={33}
          sizes="100vw"
          alt=""
          src="/Frame-2087325060.svg"
        />
        <Image
          className={styles.frameItem}
          width={48}
          height={33}
          sizes="100vw"
          alt=""
          src="/Frame-2087325060.svg"
        />
      </div>
      <Image
        className={styles.frameInner}
        width={692}
        height={2}
        sizes="100vw"
        alt=""
        src="/Line-3.svg"
      />
      <div className={styles.learningIsNoLongerOccasionParent}>
        <div className={styles.learningIsNo}>
          Learning is no longer occasional. The people shaping tomorrow are the
          ones constantly adapting today exploring ideas, sharing knowledge and
          evolving through experience
        </div>
        <Component1 property1="Row" />
      </div>
    </section>
  );
};

export default FrameComponent1;
