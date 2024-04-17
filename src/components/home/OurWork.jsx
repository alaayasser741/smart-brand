import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../../styles/home.module.css";
import { Autoplay } from "swiper/modules";
import img1 from "../../assets/images/p1.webp";
import img2 from "../../assets/images/p2.webp";
import img3 from "../../assets/images/p3.webp";
import img4 from "../../assets/images/p4.webp";
import { useTranslation } from "react-i18next";
import axios from "axios";

const OurWork = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/project/index")
      .then((res) => {
        setProjects(res.data.projects);
      })
      .catch((err) => console.log(err));
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.OurWork}>
      <div className={styles.home_reviews_title}>
        <h2>{t("home_ourWork_title")}</h2>
        <p>{t("home_ourWork_description")}</p>
      </div>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={4}
        spaceBetween={0}
        className="mySwiper"
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={styles.slider__project}>
              <div className={styles.project__img}>
                <img src={project.image ? project.image : img1} alt="project" />
              </div>
              <div className={styles.project__info}>
                <h3>
                  {i18n.language == "ar" ? project.name_ar : project.name_en}
                </h3>
                <p>
                  {i18n.language == "ar"
                    ? project.description_en
                    : project.description_ar}
                </p>
                {project.link && <a href={project.link}>View Demo</a>}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className={styles.slider__project}>
            <div className={styles.project__img}>
              <img src={img1} alt="project" />
            </div>
            <div className={styles.project__info}>
              <h3>Project Name</h3>
              <p>Project Description</p>
              <a href="#!">View More</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider__project}>
            <div className={styles.project__img}>
              <img src={img2} alt="project" />
            </div>
            <div className={styles.project__info}>
              <h3>Project Name</h3>
              <p>Project Description</p>
              <a href="#!">View More</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider__project}>
            <div className={styles.project__img}>
              <img src={img3} alt="project" />
            </div>
            <div className={styles.project__info}>
              <h3>Project Name</h3>
              <p>Project Description</p>
              <a href="#!">View More</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider__project}>
            <div className={styles.project__img}>
              <img src={img4} alt="project" />
            </div>
            <div className={styles.project__info}>
              <h3>Project Name</h3>
              <p>Project Description</p>
              <a href="#!">View More</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OurWork;
