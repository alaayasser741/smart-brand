import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/home.module.css";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/review")
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((error) => {
        toast.error("Error fetching reviews");
      });
  }, []);

  return (
    <>
      <div className="spikes"></div>
      <section className={`${styles.home_reviews} relative`}>
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <div className="circle-right"></div>
        <div className="circle-left"></div>
        <div className="container">
          <div className={styles.home_reviews_title}>
            <h2>{t("home_reviews_title")}</h2>
            <p>{t("home_reviews_description")}</p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper py-20 select-none"
          >
            {reviews && reviews.length > 0 ? (
              reviews.map(({ id, description, name }) => (
                <SwiperSlide key={id}>
                  <div className={styles.home_reviews_card}>
                    <div className={styles.home_reviews_card_img}>
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Review 1"
                      />
                    </div>
                    <div className={styles.home_reviews_card_text}>
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="text-center text-2xl font-semibold">
                <h2>{t("loading_title")}</h2>
              </div>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Reviews;
