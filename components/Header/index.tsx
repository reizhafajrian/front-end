import Head from "next/head";
import React from "react";
import Button from "../Button";
// import { IconSearch } from "../../assets/index";
export default function header() {
  return (
    <div>
      <Head>
        <title>Female Daily</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #e6e6e6",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #e6e6e6",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0px 20px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div id="burger-menu">
                <span></span>
              </div>
              <a href="" style={{ margin: "0px 20px" }}>
                <h2 style={{ margin: 0 }}>Female Daily</h2>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                borderStyle: "solid",
                borderWidth: 0.6,
                height: 34,
                boxSizing: "border-box",
                borderColor: "grey",
                borderRadius: 6,
                paddingLeft: 5,
                alignItems: "center",
                width: "80%",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", left: 10 }}>
                {/* <IconSearch /> */}
              </div>

              <input
                type={"text"}
                style={{
                  height: 30,
                  borderStyle: "none",
                  padding: "0px 4px",
                  outline: "none",
                  paddingLeft: 40,
                  width: "100%",
                }}
                placeholder="Search products,articles,topics,brands,etc"
              />
            </div>
          </div>
          {/* <button
            style={{
              backgroundColor: "red",
              borderStyle: "none",
              color: "white",
              width: 170,
              height: 60,
            }}
          >
            Login/Sign Up
          </button> */}
          <Button width={170} height={60}>
            Login/Sign Up
          </Button>
        </div>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-around",
            width: 400,
            alignSelf: "center",
            padding: 0,
          }}
        >
          <li>
            <a href="">
              <h4 style={{ padding: 0, margin: 0 }}>SkinCare</h4>
            </a>
          </li>
          <li>
            <a href="">
              <h4 style={{ padding: 0, margin: 0 }}>Make Up</h4>
            </a>
          </li>
          <li>
            <a href="">
              <h4 style={{ padding: 0, margin: 0 }}>Body</h4>
            </a>
          </li>{" "}
          <li>
            <a href="">
              <h4 style={{ padding: 0, margin: 0 }}>Hair</h4>
            </a>
          </li>
          <li>
            <a href="">
              <h4 style={{ padding: 0, margin: 0 }}>Fragrance</h4>
            </a>
          </li>
          <li>
            <a href="">
              <h4 style={{ padding: 0, margin: 0 }}>Nail</h4>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
