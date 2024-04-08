import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, slogan, description }) => {
  return (
    <section className="header_container_background">
      <div className="container m-auto flex flex-col items-center justify-center gap-2 py-6 min-h-80">
        <h3 className="text-5xl font-bold text-white ">{title}</h3>
        <p className="text-xl font-medium mb-4 text-gray-300">{slogan}</p>
        <p className="text-xl font-semibold text-white mb-4 text-center">
          {description}
        </p>

        <div className="bg-main-blue text-white px-8 py-2 text-sm rounded-3xl ">
          <Link className="hover:text-main-green" to="/">
            الرئيسية
          </Link>
          {" / "}
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
