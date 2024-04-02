import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import ReceptionistDashboard from "../pages/receptionist/ReceptionistDashboard";
import NursingDashboard from "../pages/nursing/NursingDashboard";
import AccountantDashboard from "../pages/accountant/AccountantDashboard";
import DoctorDashboard from "../pages/Doctor/DoctorDashboard";

// Authentication
const isAuthenticated = true;
const userRole = "receptionist";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <DashboardRenderer userRole={userRole} />
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

const DashboardRenderer = ({ userRole }) => {
  switch (userRole) {
    case "receptionist":
      return <ReceptionistDashboard />;
    case "nursing":
      return <NursingDashboard />;
    case "accountant":
      return <AccountantDashboard />;
    case "doctor":
      return <DoctorDashboard />;
    default:
      return <Navigate to="/" />;
  }
};

export default Router;
