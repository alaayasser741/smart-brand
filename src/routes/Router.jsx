import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import GetProject from "../Pages/GetProject";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Projects from "../Pages/Projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-project" element={<GetProject />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Router;
