import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import '../assets/styles/index.css';

export default function Root() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}
