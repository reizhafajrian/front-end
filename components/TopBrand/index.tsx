import React from "react";
import MainTitle from "../TitleMain";

export default function index() {
  return (
    <div
      className="container"
      style={{
        marginTop: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ position: "relative", width: 1000 }}>
        <MainTitle
          title="Top Brands"
          secondtitle="We all know and love"
          seemore={true}
        />
        <div className="d-flex flex-row">
          <div
            style={{
              height: 60,
              width: 120,
              margin: "0px 10px",
              backgroundColor: "grey",
            }}
          ></div>{" "}
          <div
            style={{
              height: 60,
              width: 120,
              margin: "0px 10px",
              backgroundColor: "grey",
            }}
          ></div>{" "}
          <div
            style={{
              height: 60,
              width: 120,
              margin: "0px 10px",
              backgroundColor: "grey",
            }}
          ></div>{" "}
          <div
            style={{
              height: 60,
              width: 120,
              margin: "0px 10px",
              backgroundColor: "grey",
            }}
          ></div>
        </div>
        <h3 className="mt-5">
          Female daily - find everything you wantto know about beauty on female
          daily
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloremque aliquid itaque, eos aut error non. Amet quasi eaque
          consectetur assumenda delectus. Quo id exercitationem porro dicta quis
          adipisci dolorum.
        </p>
      </div>
    </div>
  );
}
