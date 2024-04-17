import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import logoImage from "../assets/images/logo.png";
import styles from "../styles/about.module.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

const About = () => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/about/index")
      .then((response) => {
        setData(response.data.about[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <PageHeader title={t("nav_about")} slogan={t("home_title")} />

      <section className="py-10">
        <div className={`container ${styles.about_container}`}>
          <div className={styles.left_card}>
            <img className="w-40" src={logoImage} alt="logo" />
            <h3>{t("about_title")}</h3>
            <p>
              {data && i18n.language == "ar" ? data.about_ar : data.about_en}
            </p>
          </div>

          <div className={styles.right_card}>
            <div className={styles.card}>
              <i className="fa-solid fa-font-awesome"></i>
              <h3>{t("about_vision")}</h3>
              <p>
                {data && i18n.language == "ar"
                  ? data.vision_ar
                  : data.vision_en}
              </p>
            </div>
            <div className={styles.card}>
              <i className="fa-solid fa-comment"></i>
              <h3>{t("about_goal")}</h3>
              <p>
                {data && i18n.language == "ar"
                  ? data.message_ar
                  : data.message_en}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
