import React from "react";
import Aside from "../../components/aside/Aside"; // Ajusta la ruta según tu proyecto
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <Aside /> {/* Aquí va la barra lateral */}
      <main className="main-content">
        <Outlet /> {/* Aquí se renderizan las páginas hijas */}
      </main>
    </div>
  );
};

export default Layout;
