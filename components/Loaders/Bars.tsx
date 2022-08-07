import React from "react";
import styles from "./Loaders.module.css";

interface BarsProps {
  rectClassName?: string;
}

const rect = "h-full w-1 inline-block bg-brand-blue ";

const Bars = ({ rectClassName = "" }: BarsProps) => {
  return (
    <div
      role="presentation"
      className="w-12 h-10 my-[100px] mx-auto relative text-[10px] space-x-1"
    >
      <span className="absolute opacity-0">Loading...</span>

      <div className={`${styles.rect} ${rectClassName} ${rect}`}></div>
      <div
        className={`${styles.rect} ${rectClassName} ${styles.rect2} ${rect}`}
      ></div>
      <div
        className={`${styles.rect} ${rectClassName} ${styles.rect3} ${rect}`}
      ></div>
      <div
        className={`${styles.rect} ${rectClassName} ${styles.rect4} ${rect}`}
      ></div>
      <div
        className={`${styles.rect} ${rectClassName} ${styles.rect5} ${rect}`}
      ></div>
    </div>
  );
};

export { Bars };
