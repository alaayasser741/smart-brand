import React from "react";
import PageHeader from "../components/PageHeader";
import logoImage from "../assets/images/logo.png";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <PageHeader
        title="من نحن"
        slogan="سمارت براند قيمة تقنية في عالم التقنية"
        description="نحن نقدم خدمات تصميم وتطوير البرمجيات والتطبيقات والمواقع الإلكترونية والتسويق الإلكتروني والتصميم الجرافيكي"
      />

      <section className="py-10">
        <div className={`container ${styles.about_container}`}>
          <div className={styles.left_card}>
            <img className="w-40" src={logoImage} alt="logo" />
            <h3>نحن فريق متكامل وموهوب</h3>
            <p>
              نهتم بتقديم خدماتنا بأداء تقني عالي لعملائنا حتى نتمكن من تغيير
              حياة عملائنا إلى الأفضل ، نعمل على تطوير وتصميم التطبيق ات الخاصة
              بالهواتف الذكية لتصبح سهلة الاستخدام وتعطي قيمة تقنية جديدة
              للمستخدمين ، ولذلك نعمل على تقديم الدعم الفني اللازم لشركائنا
              بأفضل قدر ممكن بتقديم أسعار تنافسية مع الحرص على تقديم منتج تقني
              بجودة عالمية تليق بنا وبشركائنا .
            </p>
          </div>

          <div className={styles.right_card}>
            <div className={styles.card}>
              <i className="fa-solid fa-mobile"></i>
              <h3>تصميم وتطوير تطبيقات الهاتف</h3>
              <p>
                إن التسويق عبر تطبيقات الهاتف يعتبر شكلاً من َأشكال التسويق
                الحديثة
              </p>
            </div>
            <div className={styles.card}>
              <i className="fa-solid fa-paper-plane"></i>
              <h3>تصميم الهوية التجارية لشركتك</h3>
              <p>
                تعمل الهوية التجارية على اشهار شركتك وترسيخ علامتك التجارية .
              </p>
            </div>
            <div className={styles.card}>
              <i className="fa-solid fa-clapperboard"></i>
              <h3>موشن جرافيك</h3>
              <p>
                تربع الفيديو التسويقي على عرش أدوات التسويق في العصر الرقمي، و
                وجوده على موقعك ليس فقط
              </p>
            </div>
            <div className={styles.card}>
              <i className="fa-solid fa-bullhorn"></i>
              <h3>التسويق الإلكتروني</h3>
              <p>
                إن التسويق عبر مواقع التواصل الاجتماعي سبب رئيسي في الوصول الى
                العملاء والفئات المستهدفة،
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
