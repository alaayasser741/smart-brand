import React from "react";
import styles from "../../styles/home.module.css";
import discountImg from "../../assets/images/discount.png";
const GetProject = () => {
  return (
    <div className={styles.discount}>
      <div className={styles.discount__image}>
        <div className={styles.discount__content}>
          <h2>تواصل بنا الان</h2>
          <p>
            يمكنك الان التواصل معانا والحصول علي افضل العروض والخصومات علي
            خدماتنا المميزة
          </p>
          <img src={discountImg} alt="discount" />
        </div>
      </div>
      <div className={styles.discount__form}>
        <div className={`${styles.discount__content} ${styles.discount__form_content}`}>
          <h2>ارسل الان</h2>
          <form action="">
            <input
              className={styles.discount__form_input}
              type="text"
              placeholder="الاسم"
              name="name"
            />
            <input
              className={styles.discount__form_input}
              type="email"
              placeholder="البيريد الالكتروني"
              name="email"
            />
            <input
              className={styles.discount__form_input}
              type="text"
              placeholder="رقم الهاتف"
              name="mobile"
            />
            <textarea
              className={styles.discount__form_input}
              placeholder="الرسالة"
              name="message"
            ></textarea>
            <input type="submit" value="ارسال" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetProject;
