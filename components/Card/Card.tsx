import Image from "next/image";
import React from "react";
import Star from "../Star";
const test = {
  editor: "annedean",
  role: "Associate Editor",
  product: {
    name: "Y.O.U Makeups",
    rating: 4.1,
    description: "Rouge Velvet Matte Lip Cream",
    image:
      "https://image.femaledaily.com/dyn/640/images/prod-pics/product_1629448617_ae78612f14_800x800.png",
  },
};

export default function Card({ data, type }) {
  return (
    <div
      style={{
        width: 200,
        margin: "0px 20px",
        padding: 4,
        borderRadius: 9,
        border: "1px solid #e6e6e6",
        cursor: "pointer",
        backgroundColor: "white",
      }}
    >
      <div style={{ width: 192, height: 192, position: "relative" }}>
        <Image src={test.product.image} alt="test" layout="fill" />
      </div>
      <div style={{ padding: "0px 5px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              marginRight: "10px",
            }}
          >
            {data.product.rating}
          </h3>
          <Star
            value={data.product.rating}
            width={24}
            height={24}
            spacing={1}
          />
        </div>
        <div>
          <h3 style={{ margin: "10px 0px" }}>Y.O.U Makeups</h3>
          <h4
            style={{
              fontWeight: "400",
              margin: "10px 0px",
            }}
          >
            {data.product.description}
          </h4>
          <h4
            style={{
              fontWeight: "400",
              color: "#d1d1d1",
              margin: "10px 0px",
            }}
          >
            Rouge
          </h4>
        </div>
      </div>
    </div>
  );
}
