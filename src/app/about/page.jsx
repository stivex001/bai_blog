import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill={true}
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            minima, sapiente illum cumque impedit dignissimos eligendi fugit
            voluptates excepturi labore odio corporis explicabo veniam sint
            aperiam ipsa ex dolor et. Dolor neque autem esse soluta ab provident
            non excepturi ea. In vel dolorum consequuntur magnam ullam
            praesentium sequi fugiat libero!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci in
            natus velit, mollitia enim odio vitae voluptatem veniam quas itaque.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            minima, sapiente illum cumque impedit dignissimos eligendi fugit
            voluptates excepturi labore odio corporis explicabo veniam sint
            aperiam ipsa ex dolor et. Dolor neque autem esse soluta ab provident
            non excepturi ea. In vel dolorum consequuntur magnam ullam
            praesentium sequi fugiat libero!
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
            
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
