import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";

const GetProject = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const { t, i18n } = useTranslation();
  const [service, setService] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        response = await axios.get("https://newtoyes.net/api/services/index");

        setService(response.data.services);
        setEmail("");
        setName("");
        setPhone("");
        setProject("");
        setMessage("");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [i18n.language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://newtoyes.net/api/contacts/store",
        {
          name,
          email,
          phone,
          project_type: project,
          notes: message,
        }
      );

      toast.success("تم ارسال الطلب بنجاح");
    } catch (error) {
      console.log(error);
      toast.error("حدث خطأ ما");
    }
  };
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
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-4">
            <label htmlFor="name">{t("get_project_name")}</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email">{t("get_project_email")}</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="phone">{t("get_project_phone")}</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="project">{t("get_project_project_type")}</label>
            <select
              name="project"
              id="project"
              onChange={(e) => setProject(e.target.value)}
              value={project}
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            >
              {service &&
                service.map((item) => {
                  return (
                    <option
                      key={item.id}
                      value={
                        i18n.language === "ar" ? item.name_ar : item.name_en
                      }
                    >
                      {i18n.language === "ar" ? item.name_ar : item.name_en}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="message">{t("get_project_message")}</label>
            <textarea
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl h-36 resize-none"
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-main-blue text-white px-8 py-2 text-lg rounded-3xl hover:bg-main-green"
            >
              {t("get_project_button")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetProject;
