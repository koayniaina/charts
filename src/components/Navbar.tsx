import React from "react";
import { SiChartdotjs } from "react-icons/si";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>
        <SiChartdotjs className={styles.icon}/>
        <h2>Charts</h2>
      </div>
    </header>
  );
}
