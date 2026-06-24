import type { NextPage } from "next";
import SquareField from "./SquareField";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.learnInner, className].join(" ")}>
      <SquareField />
      <div className={styles.frameParent}>
        <button className={styles.speakerSpotlightWrapper}>
          <b className={styles.speakerSpotlight}>Speaker Spotlight</b>
        </button>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <section className={styles.frameContainer}>
              <div className={styles.frame}>
                <div className={styles.rayPoderParent}>
                  <h3 className={styles.rayPoder}>RAY PODER</h3>
                  <h3 className={styles.founderOne}>Founder - ONE, GROW</h3>
                </div>
              </div>
            </section>
            <section className={styles.frameContainer}>
              <div className={styles.frame}>
                <div className={styles.rayPoderParent}>
                  <h3 className={styles.rayPoder}>RAY PODER</h3>
                  <h3 className={styles.founderOne}>Founder - ONE, GROW</h3>
                </div>
              </div>
            </section>
            <section className={styles.frameContainer}>
              <div className={styles.frame}>
                <div className={styles.rayPoderParent}>
                  <h3 className={styles.rayPoder}>RAY PODER</h3>
                  <h3 className={styles.founderOne}>Founder - ONE, GROW</h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
