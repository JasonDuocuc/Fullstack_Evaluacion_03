import React, { useEffect } from 'react';

function AdminNavbar() {

    // 1. CARGA DE ESTILOS (Esto ya lo tenías, lo dejamos igual)
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css";
        link.rel = "stylesheet";
        link.id = "estilo-admin";
        document.head.appendChild(link);

        // Agregamos la clase 'sidebar-mini' al body para que la animación funcione bien
        document.body.classList.add("sidebar-mini");

        return () => {
            const linkBorrar = document.getElementById("estilo-admin");
            if (linkBorrar) {
                document.head.removeChild(linkBorrar);
            }
            // Limpiamos las clases del body al salir
            document.body.classList.remove("sidebar-mini");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    // 2. LA FUNCIÓN MÁGICA PARA EL HAMBURGUESA
    const handleToggleMenu = (e) => {
        e.preventDefault(); // Evita que recargue la página
        // Esta línea le dice al body: "Si tienes la clase, quítala. Si no, pónla".
        document.body.classList.toggle("sidebar-collapse");
    };

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* 3. AQUI CONECTAMOS LA FUNCIÓN AL BOTÓN */}
                    <a 
                        className="nav-link" 
                        href="#" 
                        role="button" 
                        onClick={handleToggleMenu} // <--- ESTO ES LO NUEVO
                    >
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