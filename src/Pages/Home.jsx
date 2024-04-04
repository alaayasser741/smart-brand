import {
  HeaderHome,
  AboutHome,
  ServicesHome,
  ReviewsHome,
  PackagesHome,
  GetProject,
} from "../components";
import { Navbar } from "../components";

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
      <GetProject />
    </>
  );
};

export default Home;
