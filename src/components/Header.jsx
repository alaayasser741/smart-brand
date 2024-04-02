import headerImage from "../assets/images/header.png";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={`"container" ${styles.container}`}>
        <div className={styles.header__title}>
          <h1>سمارت براند عالم من الإبداع في تصميم المواقع وتصميم التطبيقات</h1>
          <p>
            نحن نقوم بتنفيذ التصميم وتطوير المواقع الإلكترونية و التسويق الرقمي
            للشركات.
            <br />
            نعمل على تقديم منتجات وخدمات ذات قيمة تقنية في تصميم مواقع الانترنت
            و تصميم تطبيقات اندرويد تطبيقات ايفون ، حيث نهتم في رسكودي بكل
            التفاصيل لتقديم عالم من الابداع التقني والقيمة التقنية الجديدة في
            خدماتنا لعملائنا لنجعلهم في الصدارة دائماً.
          </p>

          <Link to="/contact">اتصل بنا</Link>
        </div>
        <div className={styles.header__img}>
          <img src={headerImage} alt="headerImage" />
        </div>
      </div>
    </header>
  );
};

export default Header;
