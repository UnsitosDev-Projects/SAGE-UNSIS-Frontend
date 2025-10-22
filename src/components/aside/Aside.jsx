import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Aside.css"

const Aside = ()=>{
    <div className='aside-container'>
        <nav className='nav-container'>
            <Link to="/">Inicio</Link>
            <Link to="/upload">Carga masiva</Link>
            <Link to="/test">Gestión de Examenes</Link>
            <Link to="/professor">Gestión de Profesores</Link>
        </nav>
    </div>
};

export default Aside;