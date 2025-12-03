import React from 'react';
import { Link } from 'react-router-dom';

function Sidemenu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ minHeight: '100vh' }}>
            
            {/* 1. BRAND LOGO (Logotipo del Dashboard) */}
            <Link to="/admin" className="brand-link">
                {/* Si no tienes logo 'dist/img...', puedes usar uno tuyo o dejarlo comentado */}
                <img 
                    src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" 
                    alt="AdminLTE Logo" 
                    className="brand-image img-circle elevation-3" 
                    style={{ opacity: '.8' }} 
                />
                <span className="brand-text font-weight-light">Admin HelioAndes</span>
            </Link>

            {/* 2. SIDEBAR (Contenedor Lateral) */}
            <div className="sidebar">
                
                {/* Panel de Usuario (Opcional, pero le da el toque AdminLTE) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img 
                            src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" 
                            className="img-circle elevation-2" 
                            alt="User Image" 
                        />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Administrador</a>
                    </div>
                </div>

                {/* 3. MENÚ DE NAVEGACIÓN (Lo importante) */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        {/* SECCIÓN PRINCIPAL */}
                        <li className="nav-header">GESTIÓN</li>

                        {/* Botón: SERVICIOS */}
                        <li className="nav-item">
                            <Link to="/admin/servicios" className="nav-link">
                                <i className="nav-icon fas fa-solar-panel" />
                                <p>Servicios</p>
                            </Link>
                        </li>

                        {/* Botón: PLANES */}
                        <li className="nav-item">
                            <Link to="/admin/planes" className="nav-link">
                                <i className="nav-icon fas fa-clipboard-list" />
                                <p>Planes</p>
                            </Link>
                        </li>

                        {/* SECCIÓN DE SALIDA */}
                        <li className="nav-header">NAVEGACIÓN</li>

                        {/* Botón: Volver a la web pública */}
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="nav-icon fas fa-home" />
                                <p>Volver a la Web</p>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidemenu;