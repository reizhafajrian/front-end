import { stat } from "fs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

export default function index() {
  const state = useSelector((state) => state.data);
    const data = state.data["editor's choice"];


  return (
    <div
      style={{
        padding: "0px 150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>{Object.keys(state.data)[0]}</h1>
      <h4 style={{ margin: "10px 0px", color: "grey" }}>
        {Object.keys(state.data)[0]}
      </h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
