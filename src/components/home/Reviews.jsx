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
      .get("https://newtoyes.net/api/reviews/index")
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
                <>
                  <SwiperSlide key={id}>
                    <div className={styles.home_reviews_card}>
                      <div className={styles.home_reviews_card_img}>
                        <img
                          src="https://i.pinimg.com/564x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg"
                          alt="Review 1"
                        />
                      </div>
                      <div className={styles.home_reviews_card_text}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={id}>
                    <div className={styles.home_reviews_card}>
                      <div className={styles.home_reviews_card_img}>
                        <img
                          src="https://i.pinimg.com/564x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg"
                          alt="Review 1"
                        />
                      </div>
                      <div className={styles.home_reviews_card_text}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
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
