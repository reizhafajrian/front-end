import React from "react";
import TitleMain from "../TitleMain";

export default function index() {
  return (
    <div className="container"     style={{
      marginTop: 10,
    }}>
      <TitleMain
        title="Latest Videos"
        secondtitle="Watch and learn,ladies"
        seemore={true}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            width: "80%",
            height: 400,
          }}
        ></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 200,
            }}
          ></div>
          <div
            style={{
              backgroundColor: "black",
              width: 400,
              height: 200,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
