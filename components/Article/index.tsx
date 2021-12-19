import React from "react";
import CardArticle from "../Card/CardArticle";
import styles from "../../styles/article.module.scss";
import TitleMain from "../TitleMain";
export default function index() {
  return (
    <div
      className="container"
      style={{
        marginTop: 10,
      }}
    >
      <TitleMain
        title="Latest Article"
        secondtitle="So you can make better purchase decision"
        seemore={true}
      />
      <div className={styles.articleContainer}>
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </div>
      {/* <CardArticle /> */}
    </div>
  );
}
