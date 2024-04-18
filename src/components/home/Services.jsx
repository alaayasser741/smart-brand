import { useEffect, useState } from "react";
import styles from "../../styles/home.module.css";
// import {
//   WebIcon,
//   MobileIcon,
//   HostingIcon,
//   DesignIcon,
//   MarketingIcon,
//   MotionIcon,
// } from "../../assets/icons/icons";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [services, setServices] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios.get("https://smartbrand-sa.com/api/services/index").then((res) => {
      setServices(res.data.services);
    });
  }, []);

  return (
    <>
      <div className="spikes"></div>
      <section className={`${styles.services_home} relative`}>
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <div className="circle-right"></div>
        <div className="circle-left"></div>
        <div className={`container ${styles.service_container}`}>
          <div className={styles.services_home_content}>
            <h2>{t("home_services_title")}</h2>
            <p>{t("home_services_description")}</p>
          </div>
          <div className={styles.services_home_items}>
            {services && services.length > 0 ? (
              services.map((service) => (
                <div key={service.id} className={styles.services_home_item}>
                  <span
                    className={styles.home_service_icon}
                    style={{ width: "100px" }}
                  >
                    <img src={service.image} alt="image" />
                  </span>
                  <h3>
                    {i18n.language === "ar" ? service.name_ar : service.name_en}
                  </h3>
                  <p>
                    {i18n.language === "ar"
                      ? service.description_ar
                      : service.description_en}
                  </p>
                </div>
              ))
            ) : (
              <p>{t("loading_title")}</p>
            )}
          </div>
        </div>
        {/* <div className={`container ${styles.service_container}`}>
          <div className={styles.services_home_content}>
            <h2>خدماتنا</h2>
            <p>سمارت براند عالم من الابداع في عالم التقنية</p>
          </div>
          <div className={styles.services_home_items}>
            <div className={styles.services_home_item}>
              <span className={styles.home_service_icon}>
                <WebIcon />
              </span>
              <h3>تصميم مواقع</h3>
              <p>
                لأنك تستحق الأفضل دائماً نوفر لك التصميم الفريد ليساعدك في جذب
                المزيد من العملاء واعطائك الميزة التنافسية والصدارة بين الشركات
                .
              </p>
            </div>
            <div className={styles.services_home_item}>
              <span className={styles.home_service_icon}>
                <MobileIcon />
              </span>
              <h3>تصميم تطبيقات</h3>
              <p>
                الآن تستطيع تقديم خدماتك ومنتجاتك بطريقة مبتكرة إبداعية وتفاعلية
                لعملائك علي الجوالات بأنظمة الأندرويد أو آلايفون .
              </p>
            </div>
            <div className={styles.services_home_item}>
              <span className={styles.home_service_icon}>
                <HostingIcon />
              </span>
              <h3>استضافة مواقع</h3>
              <p>
                نقدم استضافة آمنة متكاملة بمواصفات قوية لتضمن لموقعكم الاستمرار
                والسرعة العالية للحفاظ على عملائكم و بقاء موقعكم على الانترنت
                بأمان بعيدا عن العبث والاختراقات .
              </p>
            </div>
            <div className={styles.services_home_item}>
              <span className={styles.home_service_icon}>
                <DesignIcon />
              </span>
              <h3>تصميم جرافيك</h3>
              <p>
                التصميم هو جسر التواصل بينك وبين عملائك فهو الأنطباع الأول لذى
                نحرص على تقديم كل طاقتنا لتوفير محتوى نصي وبصري مبتكر وفريد
                لتظهر أعمالك في أرقى مستوى من التميز .
              </p>
            </div>
            <div className={styles.services_home_item}>
              <span className={styles.home_service_icon}>
                <MarketingIcon />
              </span>
              <h3>التسويق الالكتروني</h3>
              <p>
                لأنه يعتبر الاداة الأكثر فاعلية في مجال الدعاية والترويج للخدمات
                والمنتجات لما يتميز به من ضمان الوصول إلى أكبر عدد ممكن من
                الجمهور المستهدف .
              </p>
            </div>
            <div className={styles.services_home_item}>
              <span className={styles.home_service_icon}>
                <MotionIcon />
              </span>
              <h3>موشن جرافيك</h3>
              <p>
                نعمل على صنع محتوى مرئي متكامل للتسويق المميز لمنتجاتك أو خدماتك
                في شكل إبداعي وعلى قدر كبير من الجودة والاحترافية .
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Services;
