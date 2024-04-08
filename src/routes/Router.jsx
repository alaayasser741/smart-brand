import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import GetProject from "../Pages/GetProject";
import About from "../Pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-project" element={<GetProject />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
