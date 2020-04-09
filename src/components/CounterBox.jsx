import React from "react";
import { LightenDarkenColor } from "lighten-darken-color";
import styles from "./CounterBox.module.css";

export default function CounterBox({
  legend,
  amount,
  textColor,
  bgColor,
  color = "#cccccc",
}) {
  bgColor = bgColor || LightenDarkenColor(color, 120).toString();
  textColor = textColor || LightenDarkenColor(color, -120).toString();
  return (
    <div
      className={styles.Container}
      style={{
        backgroundColor: bgColor,
        border: `2px solid ${color}`,
        color: textColor,
      }}
    >
      <legend className={styles.Legend}>{legend}</legend>
      <div className={styles.Content}>{amount}</div>
    </div>
  );
}
