import { useState } from "react";
import "./App.css";

// Se importan las páginas
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  const [count, setCount] = useState(0);

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
