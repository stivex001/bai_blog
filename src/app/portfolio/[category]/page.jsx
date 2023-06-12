import React from "react";
import styles from "./category.module.css";
import Button from "../../../components/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/6146812/pexels-photo-6146812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
