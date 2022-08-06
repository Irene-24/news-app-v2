import React, { MouseEventHandler } from "react";
import styles from "./MenuToggler.module.css";

interface Props {
  stroke?: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const MenuToggler = ({
  stroke = "#fff",
  active = false,
  onClick,
  className,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${
        active ? styles.active : ""
      } bg-brand-blue rounded-full drop-shadow-2xl  ${className}`}
    >
      <span className="absolute opacity-0">menu-toggle</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="50"
        height="50"
        className={styles.svg}
      >
        <g stroke={stroke} strokeLinecap="round" strokeWidth="6.5">
          <path
            d="M72 82.286h28.75"
            className={styles.path}
            fillRule="evenodd"
            stroke={stroke}
          />
          <path
            d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
            fill="none"
            stroke={stroke}
            className={styles.path}
          />
          <path
            d="M72 125.143h28.75"
            className={styles.path}
            fillRule="evenodd"
            stroke={stroke}
          />
          <path
            d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
            fill="none"
            stroke={stroke}
            className={styles.path}
          />
          <path
            d="M100.75 82.286h28.75"
            className={styles.path}
            fillRule="evenodd"
            stroke={stroke}
          />
          <path
            d="M100.75 125.143h28.75"
            className={styles.path}
            fillRule="evenodd"
            stroke={stroke}
          />
        </g>
      </svg>
    </button>
  );
};

export { MenuToggler };
