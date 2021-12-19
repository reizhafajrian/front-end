import Image from "next/image";
import React from "react";
import styles from "../../styles/cardarticle.module.scss";
export default function CardArticle() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={
            "https://editorial.femaledaily.com/wp-content/uploads/2021/12/kulit-iritasi.jpg"
          }
          alt="image"
          layout="fill"
          className={styles.image}
        />
      </div>
      <h3>
        Lorem 
      </h3>
      <div>
        <h6 className={styles.h6}>
          Username <span className={styles.time}>| 2 hours ago</span>
        </h6>
      </div>
    </div>
  );
}
