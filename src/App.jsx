import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "./components/Loading";

// Lazy load Router component
const Router = React.lazy(() => import("./routes/Router"));

// Lazy load Footer component
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
          {!isLoading && <Router />}
          {!isLoading && <Footer />}
        </div>
      </Suspense>
      {isLoading && <Loading />}
    </BrowserRouter>
  );
}

export default App;
