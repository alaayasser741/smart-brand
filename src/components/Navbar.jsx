import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { Fade as Hamburger } from "hamburger-react";
import logo from "../assets/images/logo-text.png";
import { UnitedKingdomIcon, SaudiArabiaIcon } from "../assets/icons/icons";
import styles from "../styles/navbar.module.css";
import Tooltip from '@mui/material/Tooltip'
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div
        className="overlay"
        style={{ display: isMenuOpen ? "block" : "none" }}
        onClick={() => setIsMenuOpen(false)}
      />
      <nav className={styles.contactNav}>
        <div className={`${styles.container} container`}>
          <ul>
            <li>
              <span>تواصل معنا عبر</span>
            </li>
            <li>
              <a href="mailto:example@example.com">
                <span className={styles.nav_icon}>
                  <FaEnvelope />
                </span>
                <span>example@example.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+1234567890">
                <span className={styles.nav_icon}>
                  <FaPhone />
                </span>
                <span>+1234567890</span>
              </a>
            </li>
          </ul>
          <ul className={styles.social_links}>
            <li>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={`${styles.mainNav} ${isScrolled && styles.fixedNav}`}>
        <div className={`${styles.container} container`}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className={styles.menuToggle}>
            {
              <Hamburger
                direction="right"
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                size={24}
              />
            }
          </div>

          <ul
            className={`${styles.links} ${isMenuOpen && styles.activeSideMenu}`}
          >
            <div className={styles.menuToggle}>
              {
                <Hamburger
                  direction="right"
                  toggled={isMenuOpen}
                  toggle={setIsMenuOpen}
                  size={24}
                />
              }
            </div>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/about">من نحن</Link>
            </li>
            {/* <li>
              <div
                className={styles.dropdown}
                onClick={handleDropdownToggle}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                <Link to="/services">خدماتنا</Link>
                {isDropdownOpen && (
                  <div
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className={`${styles.dropdownContent} ${styles.activeDropdownContent}`}
                  >
                    <ul>
                      <li>
                        <Link to="/services/web">تطوير المواقع</Link>
                      </li>
                      <li>
                        <Link to="/services/apps">تطوير التطبيقات</Link>
                      </li>
                      <li>
                        <Link to="/services/marketing">التسويق الإلكتروني</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li> */}

            <li>
              <Link to="/services">خدماتنا</Link>
            </li>
            <li>
              <Link to="/projects">مشاريعنا</Link>
            </li>
            <li>
              <Link to="/contact">اتصل بنا</Link>
            </li>

            <li>
              <Tooltip arrow title="تغير اللغة">
                
              <button className={styles.languageToggle}>
                <SaudiArabiaIcon />
              </button>
              </Tooltip>
            </li>

            <div className={styles.menu_logo}>
              {
                <div className={styles.logo}>
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
              }
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
