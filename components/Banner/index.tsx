import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Button from "../Button";

export default function index() {
  const state = useSelector((state) => state.data);
  const data = state.data["editor's choice"].slice(0, 3);

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#FDDAE0",
          minHeight: 320,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "20px 0px",
          margin: "40px 0px",
        }}
      >
        <div>
          <h2 style={{ width: 300, margin: "40px 0px" }}>
            Looking for product that are just simply perfect for you?
          </h2>
          <p style={{ width: 300, margin: 0 }}>
            Here are some product that we believe match your skin,hair, and
            body! Have we mentioned that solve your concerns too
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              marginTop: 30,
            }}
          >
            <Button style={{ marginLeft: "auto" }} height={40} width={120}>
              See my match
            </Button>
          </div>
        </div>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: 970,
            height: 250,
            backgroundColor: "grey",
            margin: "20px 0px",
          }}
        ></div>
      </div>
    </>
  );
}
