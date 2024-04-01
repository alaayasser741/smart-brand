import { useState, useEffect } from "react";
import { LogoIcon, LogoutIcon, DoubleArrowIcon } from "../assets/icons/icons";
import styles from "../styles/sidebar.module.css";
import { receptionistLinks } from "../assets/data/links";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../context/sidebarSlice";
const SidebarApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    dispatch(toggleSidebar());
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setIsSidebarOpen(false);
        dispatch(toggleSidebar());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  return (
    <aside
      className={`${styles.sidebar} ${isSidebarOpen ? "" : styles.collapsed}`}
    >
      <div className={styles.sidebar__toggle} onClick={handleToggleSidebar}>
        <DoubleArrowIcon />
      </div>
      <div className={styles.sidebar__logo}>
        <LogoIcon />
      </div>
      <nav>
        {receptionistLinks.map((link) => (
          <Link
            to={link.route}
            key={link.title}
            className={`${styles.sidebar__link} ${
              location.pathname === link.route ? styles.active : ""
            }`}
          >
            <span className={styles.sidebar__nav_icon}>{link.icon}</span>
            {link.title}
          </Link>
        ))}
      </nav>

      <div className={styles.sidebar__logout}>
        <Link to="/logout">
          <LogoutIcon />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default SidebarApp;
