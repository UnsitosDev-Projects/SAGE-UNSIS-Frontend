
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Aside.css';

// Iconos de react-icons
import { FaBook, FaClock, FaHome, FaCalendarAlt, FaFileAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Aside = () => {
  const [collapsed, setCollapsed] = useState(false); // controla colapso
  const [mobileOpen, setMobileOpen] = useState(false); // controla overlay en móviles

  const toggleAside = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Overlay para mobile */}
      <div 
        className={`aside-overlay ${mobileOpen ? 'show' : ''}`} 
        onClick={() => setMobileOpen(false)} 
      />

      <aside className={`aside-container ${collapsed ? 'collapsed' : 'open'} ${mobileOpen ? 'open' : ''}`}>
        {/* Botón toggle con libro y reloj */}
        <button className="aside-toggle" onClick={toggleAside}>
          <FaBook size={20} style={{ marginRight: 5 }} />
          <FaClock size={20} />
        </button>

        <div className="nav-wrapper">
          <div className="nav-top">
            <Link to="/" className="nav-link"><FaHome className="icon" /><span className="link-text">{!collapsed && 'Inicio'}</span></Link>
            <Link to="/schedule" className="nav-link"><FaCalendarAlt className="icon" /><span className="link-text">{!collapsed && 'Horario de Examen'}</span></Link>
            <Link to="/assign" className="nav-link"><FaFileAlt className="icon" /><span className="link-text">{!collapsed && 'Asignar Examen'}</span></Link>
            <Link to="/settings" className="nav-link"><FaCog className="icon" /><span className="link-text">{!collapsed && 'Configuración'}</span></Link>
          </div>

          <div className="nav-bottom">
            <Link to="/logout" className="nav-link"><FaSignOutAlt className="icon" /><span className="link-text">{!collapsed && 'Cerrar sesión'}</span></Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
