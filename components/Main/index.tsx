import dynamic from "next/dynamic";
import React from "react";
import AdsContainer from "../AdsDiv";
const Carousel = dynamic(
  () => {
    return import("../Carousel");
  },
  { ssr: false }
);
const Banner = dynamic(
  () => {
    return import("../Banner");
  },
  { ssr: false }
);

export default function index() {
  return (
    <main>
      <AdsContainer />
      <Carousel />
      <Banner />
    </main>
  );
}
