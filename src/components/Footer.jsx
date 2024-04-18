import { useEffect, useState } from "react";
import styles from "../styles/footer.module.css";
import img1 from "../assets/images/p1.webp";
import img2 from "../assets/images/p2.webp";
import img3 from "../assets/images/p3.webp";
import img4 from "../assets/images/p4.webp";
import logo from "../assets/images/logo-text.png";
import axios from "axios";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const [settings, setSettings] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    axios.get("https://newtoyes.net/api/settings/index").then((res) => {
      setSettings(res.data.settings);
    });
  }, []);
  return (
    <div className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.box}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <ul className={styles.social}>
            <li>
              <a
                href={settings.facebook_link ? settings.facebook_link : "#!"}
                className={styles.facebook}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href={settings.twitter_link ? settings.twitter_link : "#!"}
                className={styles.twitter}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href={settings.linkedin_link ? settings.linkedin_link : "#!"}
                className={styles.linkedin}
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <p className={styles.text}>
            {t('home_description_1')}
          </p>
        </div>
        {/* <div className={styles.box}>
          <ul className={styles.links}>
            <li>
              <a href="#">روابط مهمة</a>
            </li>
            <li>
              <a href="#">روابط مهمة</a>
            </li>
            <li>
              <a href="#">روابط مهمة</a>
            </li>
            <li>
              <a href="#">روابط مهمة</a>
            </li>
            <li>
              <a href="#">روابط مهمة</a>
            </li>
          </ul>
        </div> */}
        <div className={styles.box}>
          <div className={styles.line}>
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className={styles.info}>
              {settings.address ? settings.address : "Loading..."}
            </div>
          </div>
          <div className={styles.line}>
            <i className="far fa-clock fa-fw"></i>
            <div className={styles.info}>
              Business Hours:{" "}
              {settings.working_hours ? settings.working_hours : "Loading..."}
            </div>
          </div>
          <div className={styles.line}>
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className={styles.info}>
              <span>
                {settings.phone_number ? settings.phone_number : "Loading..."}
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.box} ${styles.footer_gallery}`}>
          <img src={img1} alt="gallery-01" />
          <img src={img2} alt="gallery-02" />
          <img src={img3} alt="gallery-03" />
          <img src={img4} alt="gallery-04" />
          <img src={img3} alt="gallery-03" />
          <img src={img4} alt="gallery-04" />
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; <span>Smart Brand</span> All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
