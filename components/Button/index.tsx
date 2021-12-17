import React, { StyleHTMLAttributes } from "react";

interface props {
  height: number;
  width: number;
  children: any;
  margin?: any;
}
export default function index({ height, width, children, margin }: props) {
  return (
    <button
      style={{
        backgroundColor: "red",
        borderStyle: "none",
        color: "white",
        width: width,
        height: height,
        margin: margin,
      }}
    >
      {children}
    </button>
  );
}
