/* eslint-disable react/prop-types */
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy load components
const ReceptionistDashboard = lazy(() =>
  import("../pages/receptionist/ReceptionistDashboard")
);
const NursingDashboard = lazy(() =>
  import("../pages/nursing/NursingDashboard")
);

const AccountantDashboard = lazy(() =>
  import("../pages/accountant/AccountantDashboard")
);

const DoctorDashboard = lazy(() => import("../pages/doctor/DoctorDashboard"));

const LoginPage = lazy(() => import("../pages/auth/Login.jsx"));
const RegisterPage = lazy(() => import("../pages/auth/Register.jsx"));

// Authentication
// TODO: Replace with actual authentication
const isAuthenticated = false;

const Router = () => {
  //TODO: Replace with actual user role
  const userRole = "receptionist";

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <Suspense fallback={<div>Loading...</div>}>
              {userRole === "receptionist" ? (
                <ReceptionistDashboard />
              ) : userRole === "nursing" ? (
                <NursingDashboard />
              ) : userRole === "accountant" ? (
                <AccountantDashboard />
              ) : userRole === "doctor" ? (
                <DoctorDashboard />
              ) : (
                <Navigate to="/" />
              )}
            </Suspense>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
