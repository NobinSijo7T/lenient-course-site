import type { NextPage } from "next";
import Image from "next/image";
import SquareField from "./SquareField";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <SquareField />
      <Image
        className={styles.chatgptImageJun19202609}
        width={510}
        height={510}
        alt=""
        src="/hero-img.png"
      />


    </section>
  );
};

export default FrameComponent;
