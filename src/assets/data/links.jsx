import {
  DoctorIcon,
  PatientIcon,
  BookingIcon,
  ChatIcon,
  DashboardIcon,
  ExpensesIcon,
  ServiceIcon,
} from "../icons/icons";

export const receptionistLinks = [
  {
    title: "Doctor",
    icon: <DoctorIcon />,
    route: "/doctor-receptionist",
  },
  {
    title: "Patient",
    icon: <PatientIcon />,
    route: "/patients-receptionist",
  },
  {
    title: "Bookings",
    icon: <BookingIcon />,
    route: "/bookings-receptionist",
  },
  {
    title: "Chat",
    icon: <ChatIcon />,
    route: "/chat-receptionist",
  },
];

export const doctorLinks = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard-doctor",
  },
  {
    title: "Bookings",
    icon: <BookingIcon />,
    route: "/bookings-doctor",
  },
  {
    title: "Patient",
    icon: <PatientIcon />,
    route: "/patients-doctor",
  },
  {
    title: "Service",
    icon: <ServiceIcon />,
    route: "/service-doctor",
  },
  {
    title: "Chat",
    icon: <ChatIcon />,
    route: "/chat-doctor",
  },
];

export const nursingLinks = [
  {
    title: "Doctor",
    icon: <DoctorIcon />,
    route: "/doctor-nursing",
  },
  {
    title: "Patient",
    icon: <PatientIcon />,
    route: "/patients-nursing",
  },
  {
    title: "Bookings",
    icon: <BookingIcon />,
    route: "/bookings-nursing",
  },
];

export const accountantLinks = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard-accountant",
  },
  {
    title: "Bookings",
    icon: <BookingIcon />,
    route: "/bookings-accountant",
  },
  {
    title: "Patient",
    icon: <PatientIcon />,
    route: "/patients-accountant",
  },
  {
    title: "Doctor",
    icon: <DoctorIcon />,
    route: "/doctor-accountant",
  },
  {
    title: "Expenses",
    icon: <ExpensesIcon />,
    route: "/expenses-accountant",
  },
];
