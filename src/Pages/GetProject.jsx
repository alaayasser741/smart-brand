import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const GetProject = () => {
  return (
    <>
      <PageHeader
        title="اطلب مشروعك"
        slogan="نعمل على تحويل أفكارك الرائعة إلى حقيقة"
        description="تواصل معنا وسيقوم فريق عمل Smart Brand بدراسة طلبك والتواصل معك فوراً لتقديم أفضل الطرق لنجاح فكرتك"
      />

      <div className="mt-10">
        <h2 className="text-main-blue text-4xl text-center mb-2">
          تقديم الطلب..
        </h2>
        <span className="font-semibold text-center block mb-10">
          نعمل على تحويل أفكارك الرائعة إلى حقيقة
        </span>

        <form
          action=""
          className="bg-gray-200 shadow-xl w-full md:w-10/12 m-auto mb-10 rounded-md px-4 py-6"
        >
          <div className="form-group mb-4">
            <label htmlFor="name">الاسم</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email">البريد الالكتروني</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="phone">رقم الهاتف</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="project">نوع المشروع</label>
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
            <label htmlFor="message">رسالتك</label>
            <textarea
              name="message"
              id="message"
              className="w-full outline-none text-lg p-2 border mt-2 border-gray-400 rounded-xl h-36 resize-none"
            ></textarea>
          </div>
          <div className="form-group">
            <button className="bg-main-blue text-white px-8 py-2 text-lg rounded-3xl hover:bg-main-green">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetProject;
