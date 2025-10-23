import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// Routeos
import { Routes, Route } from "react-router-dom";


// Se importan las páginas
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas hijas */}
          <Route index element={<Home />} />
          {/* Aquí van las rutas de las pages */}
          {/* Ejemplo: <Route path="tareas" element={<TodoList />} /> */}

          {/* Aquí van las rutas de errores (404, 405, etc..) */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
