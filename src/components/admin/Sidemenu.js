import React from 'react';
import { Link } from 'react-router-dom';

function Sidemenu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ minHeight: '100vh' }}>
            
          
            <Link to="/admin" className="brand-link">
           
                <i className="fas fa-sun brand-image elevation-3" style={{ 
                    opacity: '.8', 
                    color: '#ffffffff', 
                    fontSize: '1.8rem',
                    marginTop: '2px',
                    marginLeft: '12px'
                }}></i>
                
                <span className="brand-text font-weight-light pl-2">AdminLTE</span>
            </Link>

            <div className="sidebar">
                
      
                <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
                    <div className="image">
                     
                        <i className="fas fa-user-circle text-white fa-2x pl-1"></i>
                    </div>
                    <div className="info">
                        <Link to="#" className="d-block pl-2">Administrador</Link>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        <li className="nav-header">GESTIÓN</li>

                        <li className="nav-item">
                            <Link to="/admin/servicios" className="nav-link">
                                <i className="nav-icon fas fa-solar-panel" />
                                <p>Servicios</p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/admin/planes" className="nav-link">
                                <i className="nav-icon fas fa-clipboard-list" />
                                <p>Planes</p>
                            </Link>
                        </li>

                        <li className="nav-header">NAVEGACIÓN</li>

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