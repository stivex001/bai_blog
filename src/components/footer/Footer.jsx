import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&#169;2023 all right reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} alt="facebook" className={styles.icon}/>
        <Image src="/2.png" width={15} height={15} alt="instagram" className={styles.icon}/>
        <Image src="/3.png" width={15} height={15} alt="twitter" className={styles.icon}/>
        <Image src="/4.png" width={15} height={15} alt="youtube" className={styles.icon}/>
      </div>
    </div>
  );
};

export default Footer;
