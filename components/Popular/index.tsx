import Image from "next/image";
import React from "react";
import IconList from "../../assets/icon/ic_list.svg";
import IconUser from "../../assets/icon/ic_person.svg";
import IconMessage from "../../assets/icon/ic_message.svg";
import TitleMain from "../TitleMain";
const Card = () => {
  return (
    <div
      style={{
        // border: "0.4px solid grey",
        width: 230,
        borderRadius: 9,
        boxShadow: "1px 0px 2px 2px #b8b8b8",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 150,
          height: 150,
          borderRadius: 100,
          margin: "10px auto",
          overflow: "hidden",
        }}
      >
        <Image
          src={
            "https://cdns.klimg.com/merdeka.com/i/w/news/2021/10/08/1362048/540x270/genap-berusia-29-tahun-intip-potret-transformasi-pevita-pearce-dari-dulu-hingga-kini.jpg"
          }
          layout="fill"
          objectFit="cover"
          alt="pevita"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", minHeight: 100 }}>
        <h3 style={{ margin: "10px 30px 40px " }}>Embarece the curl</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-around",
            alignSelf: "center",
          }}
        >
          <IconUser />
          <IconList />
          <IconMessage />
        </div>
        <h5
          style={{
            margin: "10px 30px 20px",
            color: "grey",
            textAlign: "center",
          }}
        >
          May our curls pop and never stop
        </h5>
      </div>
    </div>
  );
};

export default function index() {
  return (
    <div
      className="container"
      style={{
        marginTop: 10,
      }}
    >
      <TitleMain
        title="Popular Group"
        secondtitle="Where the beauty talk here"
        seemore={true}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
