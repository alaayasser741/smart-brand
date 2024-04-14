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

const Home = () => {
  return (
    <>
      <div className="header_container_background">
        <Navbar />
        <HeaderHome />
      </div>
      <AboutHome />
      <ServicesHome />
      <PackagesHome />
      <ReviewsHome />
      <section className="bg-main-blue">
        <div className="container m-auto flex flex-col items-center justify-center gap-2 py-6 text-white min-h-80">
          <h3 className="text-5xl font-bold">اطلب مشروعك أونلاين</h3>
          <p className="text-xl font-medium mb-4">
            نعمل على تحويل أفكارك الرائعة إلى حقيقة
          </p>
          <Link
            className="bg-main-green px-10 py-3 text-lg rounded-3xl hover:bg-white hover:text-main-green"
            to="/get-project"
          >
            طلب مشروع
          </Link>
        </div>
      </section>
      {/* <GetProject /> */}
      <OurWork />
    </>
  );
};

export default Home;
