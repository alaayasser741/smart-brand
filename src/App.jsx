import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);
  return (
    <BrowserRouter>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
