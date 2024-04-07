import React, { useState } from "react";
import styles from "../../styles/home.module.css";
import discountImg from "../../assets/images/discount.png";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
        <div
          className={`${styles.discount__content} ${styles.discount__form_content}`}
        >
          <h2>ارسل الان</h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("الرجاء ادخال الاسم"),
              email: Yup.string()
                .email("البريد الإلكتروني غير صحيح")
                .required("الرجاء ادخال البريد الإلكتروني"),
              message: Yup.string().required("الرجاء ادخال الرسالة"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(async () => {
                try {
                  await axios.post(
                    "http://127.0.0.1:8000/api/contact/store",
                    values
                  );
                  resetForm();
                  toast.success("تم ارسال الرسالة بنجاح", {
                    theme: "colored",
                    icon: "🚀",
                  });
                } catch (error) {
                  console.log(error);
                  toast.error("حدث خطأ ما", {
                    theme: "colored",
                    icon: "🔥",
                  });
                }
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  className={styles.discount__form_input}
                  type="text"
                  placeholder="الاسم"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 mb-3"
                />

                <Field
                  className={styles.discount__form_input}
                  type="email"
                  placeholder="البريد الالكتروني"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mb-3"
                />

                <Field
                  as="textarea"
                  className={styles.discount__form_input}
                  placeholder="الرسالة"
                  name="message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 mb-3"
                />

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "يرسل..." : "ارسال"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default GetProject;
