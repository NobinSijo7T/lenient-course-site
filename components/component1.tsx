import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styles from "./component1.module.css";

export type Component1Type = {
  className?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  property1 = "Row_S",
}) => {
  return (
    <button
      className={[styles.component163, className].join(" ")}
      data-property1={property1}
    >
      <b className={styles.register}>Book a session</b>
    </button>
  );
};

export default Component1;
