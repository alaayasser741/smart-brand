import styles from "../../styles/home.module.css";
import {
  WebIcon,
  MobileIcon,
  HostingIcon,
  DesignIcon,
  MarketingIcon,
  MotionIcon,
} from "../../assets/icons/icons";

const Services = () => {
  return (
    <section className={styles.services_home}>
      <div className={`container ${styles.service_container}`}>
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
              المزيد من العملاء واعطائك الميزة التنافسية والصدارة بين الشركات .
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
              نحرص على تقديم كل طاقتنا لتوفير محتوى نصي وبصري مبتكر وفريد لتظهر
              أعمالك في أرقى مستوى من التميز .
            </p>
          </div>
          <div className={styles.services_home_item}>
            <span className={styles.home_service_icon}>
              <MarketingIcon />
            </span>
            <h3>التسويق الالكتروني</h3>
            <p>
              لأنه يعتبر الاداة الأكثر فاعلية في مجال الدعاية والترويج للخدمات
              والمنتجات لما يتميز به من ضمان الوصول إلى أكبر عدد ممكن من الجمهور
              المستهدف .
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
      </div>
    </section>
  );
};

export default Services;