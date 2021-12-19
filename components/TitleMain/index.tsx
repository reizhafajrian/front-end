import React from "react";

interface props {
  title: string;
  secondtitle: string;
  seemore: Boolean;
}
export default function index({ title, secondtitle, seemore = false }: props) {
  return (
    <>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ margin: "10px 0px", color: "grey" }}>{secondtitle}</h4>
        {seemore && (
          <a href="">
            <h4>See More</h4>
          </a>
        )}
      </div>
    </>
  );
}
