import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import GetProject from "../Pages/GetProject";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-project" element={<GetProject />} />
    </Routes>
  );
};

export default Router;
