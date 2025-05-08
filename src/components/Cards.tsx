import React from "react";
import styles from "@/styles/Card.module.css";
export default function Cards() {
  return (
    <div>
      <div className="grid grid-cols-2  gap-4 w-[350px]">
        <div className="bg-white shadow-md rounded-lg p-2">
          <span  className={styles.text}>Revenue</span>
          <h2 className="font-bold text-center text-2xl ">$ 24.5</h2>
          <span  className="text-green-700 text-center">13%</span>
          <p className={styles.paragraphe}>Pourcentage</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-2">
          <span  className={styles.text}>Margin</span>
          <h2 className=" font-bold text-center text-2xl "> 9.5%</h2>
          <span className="text-green-700 text-center">1%</span>
          <p className={styles.paragraphe}>Pourcentage</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-2 ">
          <span className={styles.text}>Room</span>
          <h2 className=" font-bold text-center text-2xl ">19.1%</h2>
          <span  className="text-green-700 text-center">8%</span>
          <p className={styles.paragraphe}>Pourcentage</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-2">
          <span  className={styles.text}>CLV</span>
          <h2 className=" font-bold text-center text-2xl ">$ 2.125</h2>
          <span  className="text-green-700 text-center">2.3%</span>
          <p className={styles.paragraphe}>Pourcentage</p>
        </div>
      </div>
    </div>
  );
}
