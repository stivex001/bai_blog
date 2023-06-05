import React from "react";
import styles from "./category.module.css"

const Category = ({ params }) => {
  return <div className={styles.container}>
    <h1>{params.category}</h1>
  </div>;
};

export default Category;
