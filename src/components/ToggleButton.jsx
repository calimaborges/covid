import React from "react";
import styles from "./ToggleButton.module.css";

export default function ToggleButton({ active, ...props }) {
  return (
    <button
      className={styles.Button}
      style={{
        backgroundColor: active ? "black" : "white",
        color: active ? "white" : "black",
      }}
      {...props}
    />
  );
}
