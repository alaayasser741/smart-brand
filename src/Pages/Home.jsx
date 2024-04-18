import {
  HeaderHome,
  AboutHome,
  ServicesHome,
  ReviewsHome,
  PackagesHome,
  // GetProject,
  OurWork,
} from "../components";
import { Navbar } from "../components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div >
      <div className="header_container_background">
        <Navbar />
        <HeaderHome />
      </div>
      <AboutHome />
      <ServicesHome />
      <PackagesHome />
      {/* <ReviewsHome /> */}
      <section className="bg-main-blue mb-5">
        <div className="container m-auto flex flex-col items-center justify-center gap-2 py-6 text-white min-h-80">
          <h3 className="text-5xl font-bold">
            {t("home_getProject_title")}
          </h3>
          <p className="text-xl font-medium mb-4">
            {t("home_getProject_description")}
          </p>
          <Link
            className="bg-main-green px-10 py-3 text-lg rounded-3xl hover:bg-white hover:text-main-green"
            to="/get-project"
          >
            {t("home_getProject_button")}
          </Link>
        </div>
      </section>
      {/* <GetProject /> */}
      <OurWork />
    </div>
  );
};

export default Home;
