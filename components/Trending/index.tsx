import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import MainTitle from "../TitleMain";

export default function index() {
  const state = useSelector((state) => state.data);
  const data = state.data["editor's choice"];
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ minHeight: 600, position: "relative", width: 1000 }}>
          <MainTitle
            title="Latest Review"
            secondtitle="So u can make better purcahase decision "
            seemore={true}
          />
          <div
            className="carousel-indicators"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 0,
            }}
          >
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              style={{
                margin: "0px 0px",
                backgroundColor: "red",

                position: "relative",
                height: 30,
              }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <div>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                // className="active"
                aria-current="true"
                aria-label="Slide 1"
                style={{
                  borderRadius: 9,
                  width: 9,
                  height: 9,
                  borderBottom: 0,
                  borderTop: 0,
                  margin: "0px 5px",
                  backgroundColor: "red",
                }}
              ></button>
            </div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              style={{
                margin: "0px 0px",
                backgroundColor: "red",
                position: "relative",
                height: 30,
              }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div
            id="carouselExampleIndicators"
            style={{
              width: "100%",
            }}
            className="carousel slide bg-white m-0"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {data.map((item, index) => {
                  return <Card data={item} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
