import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import logoImage from "../assets/images/logo.png";
import styles from "../styles/about.module.css";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/about/index")
      .then((response) => {
        setData(response.data.about);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <PageHeader
        title="من نحن"
        slogan="سمارت براند قيمة تقنية في عالم التقنية"
        description="نحن نقدم خدمات تصميم وتطوير البرمجيات والتطبيقات والمواقع الإلكترونية والتسويق الإلكتروني والتصميم الجرافيكي"
      />

      <section className="py-10">
        <div className={`container ${styles.about_container}`}>
          <div className={styles.left_card}>
            <img className="w-40" src={logoImage} alt="logo" />
            <h3>نحن فريق متكامل وموهوب</h3>
            <p>{data.about}</p>
          </div>

          <div className={styles.right_card}>
            <div className={styles.card}>
              <i className="fa-solid fa-font-awesome"></i>
              <h3>الرؤية</h3>
              <p>{data.vision}</p>
            </div>
            <div className={styles.card}>
              <i className="fa-solid fa-comment"></i>
              <h3>الرسالة</h3>
              <p>{data.message}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
