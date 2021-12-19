import React from "react";
import Card from "../Card/Card";
import CardArticle from "../Card/CardArticle";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "../../styles/article.module.scss";
import MainTitle from "../TitleMain";
import Star from "../Star";

const CardArticle = () => {
  return (
    <div className="position-relative d-flex flex-column">
      <div className="card" style={{ width: "25rem", minHeight: 300 }}>
        <div className="d-flex flex-column p-4">
          <div className="d-flex flex-row">
            <div style={{ position: "relative", width: 70, height: 70 }}>
              <Image
                src={
                  "https://editorial.femaledaily.com/wp-content/uploads/2021/12/kulit-iritasi.jpg"
                }
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mx-4 d-flex flex-column mt-4">
              <h5>Val by Valerie</h5>
              <p className="font-weight-bold">Normal</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#e6e6e6",
            }}
          ></div>
        </div>
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
            <Star value={4.5} height={24} width={24} spacing={1} />
            <p className="font-weight-bold text-color-grey">2 hours ago</p>
          </div>

          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        className="position-relative"
        style={{
          width: "100%",
          minHeight: 140,
        }}
      >
        <div
          className="position-absolute d-flex justify-content-center"
          style={{ top: -30, left: 0, right: 0 }}
        >
          <div
            className="d-flex flex-column align-items-center"
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 70,
                height: 70,
                overflow: "hidden",
                borderRadius: 70,
              }}
            >
              <Image
                src={
                  "https://editorial.femaledaily.com/wp-content/uploads/2021/12/kulit-iritasi.jpg"
                }
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h6>Putri Deani</h6>
            <p>Combination SKin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function index() {
  return (
    <>
      <div
        className="container "
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",

          marginTop: 10,
        }}
      >
        <div style={{ minHeight: 500, position: "relative", width: 1000 }}>
          <MainTitle
            title="Latest Review"
            secondtitle="So u can make better purcahase decision "
            seemore={true}
          />
          <div
            className="carousel-indicators"
            style={{
              width: "50%",
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
                <CardArticle />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 300,
            height: 250,
            backgroundColor: "grey",
            alignSelf: "center",
          }}
        ></div>
      </div>
    </>
  );
}
