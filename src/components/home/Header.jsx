import headerImage from "../../assets/images/header.png";
import styles from "../../styles/home.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className={`container ${styles.container}`}>
        <div className={styles.header__title}>
          <h1>{t("home_title")}</h1>
          <p>
            {t("home_description_1")}
            <br />
            {t("home_description_2")}
          </p>

          <Link to="/contact">{t("home_contact_button")}</Link>
        </div>
        <div className={styles.header__img}>
          <img src={headerImage} alt="headerImage" />
        </div>
      </div>
    </header>
  );
};

export default Header;
