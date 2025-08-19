import { useState, useEffect } from "react";
import "./App.css";
import InicioCard from "./components/InicioCard";
import NosotrosCard from "./components/NosotrosCard";
import ServiciosCard from "./components/ServiciosCard"; 
import CursosCard from "./components/Cursos";
import ProductosCard from "./components/Productos";
import BlogsCard from "./components/BlogsCard";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("inicio"); // 👈 estado para controlar la tarjeta actual

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 🔹 Scroll al inicio cada vez que cambia la páginaa
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <>
      <header className="encabezado">
        <div className="TYS">
          <div className="logo">INT-SOLUTIONS</div>
          <div className="eslogan">
            Soluciones Inteligentes en Tecnología
          </div>
        </div>

        <div className="navbar">
          {/* Botón hamburguesa */}
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menú de navegación */}
          <nav id="menu">
            <ul className={menuOpen ? "active" : ""}>
              <li>
                <button onClick={() => setActivePage("inicio")}>Inicio</button>
              </li>
              <li>
                <button onClick={() => setActivePage("nosotros")}>Nosotros</button>
              </li>
              <li>
                <button onClick={() => setActivePage("servicios")}>Servicios</button>
              </li>
              <li>
                <button onClick={() => setActivePage("cursos")}>Cursos</button>
              </li>
              <li>
                <button onClick={() => setActivePage("blogs")}>Blogs</button>
              </li>
              <li>
                <a href="https://equipos.int-solutionstec.com/">Sistema</a>
              </li>
              <li>
                <button onClick={() => setActivePage("productos")}>Productos</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="Cuerpo">
        {activePage === "inicio" && <InicioCard setActivePage={setActivePage} />}
        {activePage === "nosotros" && <NosotrosCard />}
        {activePage === "servicios" && <ServiciosCard />}
        {activePage === "cursos" && <CursosCard />} 
        {activePage === "productos" && <ProductosCard />}
        {activePage === "blogs" && <BlogsCard />}
      </main>
    </>
  );
}

export default App;
