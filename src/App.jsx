import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import Loading from "./components/Loading";

function App() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }

    // Simulate a loading delay of 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
          <Router />
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
