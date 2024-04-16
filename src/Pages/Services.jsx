import PageHeader from "../components/PageHeader";
import webImage from "../assets/images/web.png";
import appsImage from "../assets/images/apps.png";
import designImage from "../assets/images/design.png";
import marketingImage from "../assets/images/marketing.png";
import motionImage from "../assets/images/motion.png";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section>
      <PageHeader
        title={t("home_services_title")}
        slogan={t("home_about_description")}
      />

      {/* Web */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              {t("services_web_title")}
            </h2>
            <p className="font-semibold text-center block mb-10">
              {t("services_web_description")}
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={webImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              {t("services_web_features_title")}
            </h2>
            <span className="font-normal text-center block mb-10">
              {t("services_web_features_slogan")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-display text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_web_features_title_1")}
              </h3>
              <p>{t("services_web_features_description_1")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-gauge-high text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_web_features_title_2")}
              </h3>
              <p>{t("services_web_features_description_2")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-wand-sparkles text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_web_features_title_3")}
              </h3>
              <p>{t("services_web_features_description_3")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-brands fa-searchengin text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_web_features_title_4")}
              </h3>
              <p>{t("services_web_features_description_4")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-earth-africa text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_web_features_title_5")}
              </h3>
              <p>{t("services_web_features_description_5")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-shield-halved text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_web_features_title_6")}
              </h3>
              <p>{t("services_web_features_description_6")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Apps */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              {t("services_mobile_title")}
            </h2>
            <p className="font-semibold text-center block mb-10">
              {t("services_mobile_description")}
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={appsImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              {t("services_mobile_features_title")}
            </h2>
            <span className="font-normal text-center block mb-10">
              {t("services_web_features_slogan")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-lock text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_mobile_features_title_1")}
              </h3>
              <p>{t("services_mobile_features_description_1")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-star text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_mobile_features_title_2")}
              </h3>
              <p>{t("services_mobile_features_description_2")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-wand-sparkles text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_mobile_features_title_3")}
              </h3>
              <p>{t("services_mobile_features_description_3")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-brands fa-searchengin text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_mobile_features_title_4")}
              </h3>
              <p>{t("services_mobile_features_description_4")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-earth-africa text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_mobile_features_title_5")}
              </h3>
              <p>{t("services_mobile_features_description_5")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-shield-halved text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_mobile_features_title_6")}
              </h3>
              <p>{t("services_mobile_features_description_6")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Graphic */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              {t("services_graphic_title")}
            </h2>
            <p className="font-semibold text-center block mb-10">
              {t("services_graphic_description")}
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={designImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              {t("services_graphic_features_title")}
            </h2>
            <span className="font-normal text-center block mb-10">
              {t("services_web_features_slogan")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-swatchbook text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_graphic_features_title_1")}
              </h3>
              <p>{t("services_graphic_features_description_1")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-lightbulb text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_graphic_features_title_2")}
              </h3>
              <p>{t("services_graphic_features_description_2")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-brush text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_graphic_features_title_3")}
              </h3>
              <p>{t("services_graphic_features_description_3")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-palette text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_graphic_features_title_4")}
              </h3>
              <p>{t("services_graphic_features_description_4")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-layer-group text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_graphic_features_title_5")}
              </h3>
              <p>{t("services_graphic_features_description_5")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-pen-ruler text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_graphic_features_title_6")}
              </h3>
              <p>{t("services_graphic_features_description_6")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              {t("services_marketing_title")}
            </h2>
            <p className="font-semibold text-center block mb-10">
              {t("services_marketing_description")}
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={marketingImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              {t("services_marketing_features_title")}
            </h2>
            <span className="font-normal text-center block mb-10">
              {t("services_web_features_slogan")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-chart-simple text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_marketing_features_title_1")}
              </h3>
              <p>{t("services_marketing_features_description_1")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-bullseye text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_marketing_features_title_2")}
              </h3>
              <p>{t("services_marketing_features_description_2")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-pen-nib text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_marketing_features_title_3")}
              </h3>
              <p>{t("services_marketing_features_description_3")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-pager text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_marketing_features_title_4")}
              </h3>
              <p>{t("services_marketing_features_description_4")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-folder-tree text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_marketing_features_title_5")}
              </h3>
              <p>{t("services_marketing_features_description_5")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-clapperboard text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_marketing_features_title_6")}
              </h3>
              <p>{t("services_marketing_features_description_6")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Motion */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              {t("services_motion_title")}
            </h2>
            <p className="font-semibold text-center block mb-10">
              {t("services_motion_description")}
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={motionImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              {t("services_motion_features_title")}
            </h2>
            <span className="font-normal text-center block mb-10">
              {t("services_web_features_slogan")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-sun text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_motion_features_title_1")}
              </h3>
              <p>{t("services_motion_features_description_1")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-bullhorn text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_motion_features_title_2")}
              </h3>
              <p>{t("services_motion_features_description_2")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-arrow-up-right-dots text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_motion_features_title_3")}
              </h3>
              <p>{t("services_motion_features_description_3")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-gem text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_motion_features_title_4")}
              </h3>
              <p>{t("services_motion_features_description_4")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-video text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_motion_features_title_5")}
              </h3>
              <p>{t("services_motion_features_description_5")}</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-flag text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                {t("services_motion_features_title_6")}
              </h3>
              <p>{t("services_motion_features_description_6")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
