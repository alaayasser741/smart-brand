import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css";
import aboutImage from "../../assets/images/feature.png";

const about = () => {
  return (
    <section>
      <div className={`container ${styles.about_container}`}>
        <div className={styles.about__title}>
          <h2>سمارت براند قيمة تقنية في تصميم المواقع والتطبيقات ..</h2>
          <span>نعمل على تقديم منتجات تقنية ذات قيمة</span>
        </div>
        <div className={styles.about__desc}>
          <div className={styles.about_img}>
            <img src={aboutImage} alt="aboutImage" />
          </div>
          <div className={styles.about_info}>
            <p>
              نحن نقدم خدمات تصميم وتطوير المواقع الإلكترونية والتطبيقات الذكية
              والتسويق الرقمي للشركات والأفراد. نعمل على تقديم منتجات وخدمات ذات
              قيمة تقنية في تصميم مواقع الإنترنت وتصميم تطبيقات الأندرويد
              وتطبيقات الآيفون، حيث نهتم في رسكودي بكل التفاصيل لتقديم عالم من
              الإبداع التقني والقيمة التقنية الجديدة في خدماتنا لعملائنا لنجعلهم
              في الصدارة دائماً.
            </p>
            <Link to="/services">مشاهدة المزيد</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
