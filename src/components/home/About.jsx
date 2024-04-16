import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css";
import aboutImage from "../../assets/images/feature.png";
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className={`container ${styles.about_container}`}>
        <div className={styles.about__title}>
          <h2>{t('home_about_title')}</h2>
          <span>{t('home_about_description')}</span>
        </div>
        <div className={styles.about__desc}>
          <div className={styles.about_img}>
            <img src={aboutImage} alt="aboutImage" />
          </div>
          <div className={styles.about_info}>
            <p>
              {t('home_about_info')}
            </p>
            <Link to="/services">{t("home_about_button")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
