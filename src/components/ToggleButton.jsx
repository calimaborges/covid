import React from "react";

export default function ToggleButton({ active, ...props}) {
  return (
    <button
      style={{
        border: "1px solid black",
        padding: "0.4rem",
        fontSize: "1.2rem",
        margin: "0.1rem",
        fontFamily: "monospace",
        backgroundColor: active ? "black" : "white",
        color: active ? "white" : "black",
        outline: "none",
      }}
      {...props}
    />
  );
}
