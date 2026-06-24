import type { NextPage } from "next";
import Image from "next/image";
import Component1 from "./component1";
import AnimatedQuote from "./animated-quote";
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
            <AnimatedQuote className={styles.theIlliterateOf} delayOffset={0}>
              The illiterate of the 21st century will not
            </AnimatedQuote>
          </div>
          <AnimatedQuote className={styles.beThoseWho} delayOffset={1}>
            be those who cannot read and write, but
          </AnimatedQuote>
          <AnimatedQuote className={styles.thoseWhoCannot} delayOffset={2}>
            those who cannot learn, unlearn and relearn.
          </AnimatedQuote>
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
        <AnimatedQuote className={styles.learningIsNo} delayOffset={3}>
          Learning is no longer occasional. The people shaping tomorrow are the ones constantly adapting today exploring ideas, sharing knowledge and evolving through experience
        </AnimatedQuote>
        <Component1 property1="Row" />
      </div>
    </section>
  );
};

export default FrameComponent1;
