import React from "react";
import styles from "./Loaders.module.css";

interface CubeProps {
  skCubeClassName?: string;
}

const skCube = "float-left w-[33%] h-[33%] bg-brand-blue";

const Cube = ({ skCubeClassName = "" }: CubeProps) => {
  return (
    <div role="presentation" className="w-10 h-10 my-[100px] mx-auto relative ">
      <span className="absolute opacity-0">Loading...</span>

      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube1}`}
      ></div>
      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube2}`}
      ></div>
      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube3}`}
      ></div>
      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube4}`}
      ></div>
      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube5}`}
      ></div>
      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube6}`}
      ></div>
      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube7}`}
      ></div>
      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube8}`}
      ></div>
      <div
        className={`${skCube} ${skCubeClassName} ${styles.sk_cube}  ${styles.sk_cube9}`}
      ></div>
    </div>
  );
};

export { Cube };
