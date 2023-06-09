import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            magnam incidunt neque saepe voluptatem veniam.
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi unde
            quas sapiente magni laudantium ratione deserunt rem velit nemo
            perferendis quaerat at, et recusandae in voluptatem omnis. Fugiat,
            veritatis iste.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/7875889/pexels-photo-7875889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/7875889/pexels-photo-7875889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
          corporis tenetur voluptatibus nemo consequatur quas?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
