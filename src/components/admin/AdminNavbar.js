import React, { useEffect } from 'react';

function AdminNavbar() {


    useEffect(() => {
       
        const link = document.createElement("link");
        link.href = "https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css";
        link.rel = "stylesheet";
        link.id = "estilo-admin"; 
        document.head.appendChild(link);

   
        return () => {
            const linkBorrar = document.getElementById("estilo-admin");
            if (linkBorrar) {
                document.head.removeChild(linkBorrar);
            }
        };
    }, []);

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                        <i className="fas fa-bars" />
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <span className="nav-link font-weight-bold">Panel de Administración</span>
                </li>
            </ul>
        </nav>
    );
}

export default AdminNavbar;