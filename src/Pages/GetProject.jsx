import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "react-i18next";

const GetProject = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader
        title={t("get_project_title")}
        slogan={t("home_getProject_description")}
      />

      <div className="mt-10">
        <h2 className="text-main-blue text-4xl text-center mb-2">
          {t("get_project_title")}
        </h2>
        <span className="font-semibold text-center block mb-10">
          {t("get_project_description")}
        </span>

        <form
          action=""
          className="bg-gray-200 shadow-xl w-full md:w-10/12 m-auto mb-10 rounded-md px-4 py-6"
        >
          <div className="form-group mb-4">
            <label htmlFor="name">{t("get_project_name")}</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email">{t("get_project_email")}</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="phone">{t("get_project_phone")}</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="project">{t("get_project_project_type")}</label>
            <select
              name="project"
              id="project"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            >
              <option value="web">موقع الكتروني</option>
              <option value="mobile">تطبيق جوال</option>
              <option value="design">تصميم جرافيك</option>
            </select>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="message">{t("get_project_message")}</label>
            <textarea
              name="message"
              id="message"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl h-36 resize-none"
            ></textarea>
          </div>
          <div className="form-group">
            <button className="bg-main-blue text-white px-8 py-2 text-lg rounded-3xl hover:bg-main-green">
              {t("get_project_button")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetProject;
