import React from "react";
import styles from "./ToggleButton.module.css";

export default function ToggleButton({ active, ...props }) {
  return (
    <button
      className={`${styles.Button} ${active ? styles.Active : ""}`}
      {...props}
    />
  );
}
