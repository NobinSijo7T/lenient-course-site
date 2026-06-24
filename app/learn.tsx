import type { NextPage } from "next";
import TB from "../components/t-b";
import ScrollStory from "../components/ScrollStory";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import Footer from "../components/footer";
import styles from "./learn.module.css";

const Learn: NextPage = () => {
  return (
    <div className={styles.learn}>
      <main className={styles.learnInner}>
        <div className={styles.bottomRightPixelArtParent}>
          <section className={styles.bottomRightPixelArt}>
            <div className={styles.bottomRightPixelArtChild} />
            <div className={styles.pixelRowBr1}>
              <div className={styles.pixelRowBr1Child} />
              <div className={styles.pixelRowBr1Item} />
            </div>
            <div className={styles.pixelRowBr1}>
              <div className={styles.pixelRowBr2Child} />
              <div className={styles.pixelRowBr2Item} />
              <div className={styles.pixelRowBr2Inner} />
            </div>
            <div className={styles.pixelRowBr3}>
              <div className={styles.pixelRowBr3Inner}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.pixelRowBr3Child} />
              <div className={styles.pixelRowBr3Item} />
              <div className={styles.frameDiv} />
              <div className={styles.pixelRowBr3Child2} />
            </div>
            <div className={styles.pixelRowBr4}>
              <div className={styles.pixelRowBr4Child} />
              <div className={styles.pixelRowBr4Item} />
              <div className={styles.pixelRowBr4Inner} />
              <div className={styles.pixelRowBr4Child2} />
              <div className={styles.pixelRowBr4Child3} />
              <div className={styles.pixelRowBr4Child4} />
              <div className={styles.pixelRowBr3Child2} />
              <div className={styles.pixelRowBr4Child6} />
              <div className={styles.pixelRowBr3Child2} />
            </div>
            <div className={styles.pixelRowBr5}>
              <div className={styles.pixelRowBr5Child} />
              <div className={styles.pixelRowBr5Item} />
              <div className={styles.pixelRowBr5Inner} />
              <div className={styles.pixelRowBr5Child2} />
              <div className={styles.pixelRowBr5Child3} />
              <div className={styles.pixelRowBr5Child4} />
              <div className={styles.pixelRowBr5Child5} />
              <div className={styles.pixelRowBr5Child6} />
              <div className={styles.pixelRowBr5Child7} />
              <div className={styles.pixelRowBr5Child8} />
            </div>
          </section>
          <section className={styles.topLeftPixelArt}>
            <div className={styles.pixelRowBr5}>
              <div className={styles.pixelRow0Child} />
              <div className={styles.pixelRow0Item} />
              <div className={styles.pixelRow0Inner} />
              <div className={styles.pixelRow0Child2} />
              <div className={styles.pixelRow0Child3} />
              <div className={styles.pixelRow0Child4} />
              <div className={styles.pixelRow0Child5} />
              <div className={styles.pixelRow0Child6} />
              <div className={styles.pixelRow0Child7} />
              <div className={styles.pixelRow0Child8} />
            </div>
            <div className={styles.pixelRow1}>
              <div className={styles.pixelRow1Child} />
              <div className={styles.pixelRow1Item} />
              <div className={styles.pixelRow1Child} />
              <div className={styles.pixelRow1Child2} />
              <div className={styles.pixelRow1Child3} />
              <div className={styles.pixelRow1Child4} />
              <div className={styles.pixelRow1Child5} />
              <div className={styles.pixelRow1Child6} />
              <div className={styles.pixelRow1Child7} />
            </div>
            <div className={styles.pixelRow2}>
              <div className={styles.pixelRow1Child} />
              <div className={styles.pixelRow2Item} />
              <div className={styles.pixelRow2Inner} />
              <div className={styles.pixelRowBr3Inner}>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.pixelRow2Child2} />
            </div>
            <div className={styles.pixelRow3}>
              <div className={styles.pixelRow3Child} />
              <div className={styles.pixelRow3Item} />
              <div className={styles.pixelRow3Inner} />
            </div>
            <div className={styles.pixelRow3}>
              <div className={styles.pixelRow4Child} />
              <div className={styles.pixelRow4Item} />
            </div>
            <div className={styles.topLeftPixelArtChild} />
          </section>
        </div>
      </main>
      <TB />
      <div id="home" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <FrameComponent />
        <FrameComponent1 />
      </div>
      <div id="courses" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <ScrollStory />
      </div>
      <div id="speakers" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <FrameComponent2 />
      </div>
      <Footer />
    </div>
  );
};

export default Learn;
