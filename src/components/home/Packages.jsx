import React from "react";
import styles from "../../styles/home.module.css";
import standeredImage from "../../assets/images/features-01.jpg";
import goldImage from "../../assets/images/features-02.jpg";
import diamondImage from "../../assets/images/features-03.jpg";

import { FaCheck } from "react-icons/fa";
const Packages = () => {
  return (
    <section className={styles.home_packages}>
      <div className={`container ${styles.packages_container}`}>
        <div className={styles.home_reviews_title}>
          <h2>الباقات</h2>
          <p>مجموعة مميزة من الباقات</p>
        </div>
        <div className={styles.features}>
          <div className={`${styles.box} ${styles.quality}`}>
            <div className={styles.img_holder}>
              <img src={standeredImage} alt="features-01" />
            </div>
            <h2>الاساسي</h2>
            <ul>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
            </ul>
            <a href="#">More</a>
          </div>
          <div className={`${styles.box} ${styles.time}`}>
            <div className={styles.img_holder}>
              <img src={diamondImage} alt="features-02" />
            </div>
            <h2>الماسي</h2>
            <ul>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
            </ul>
            <a href="#">More</a>
          </div>
          <div className={`${styles.box} ${styles.passion}`}>
            <div className={styles.img_holder}>
              <img src={goldImage} alt="features-03" />
            </div>
            <h2>المميز</h2>
            <ul>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
              <li>
                <FaCheck />
                <span>شكل وتصيم مميز وعلي اعلي مستوي من الاترافية</span>
              </li>
            </ul>
            <a href="#">More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
