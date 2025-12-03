import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Importamos tus componentes de Admin
import AdminNavbar from '../components/admin/AdminNavbar'; 
import Sidemenu from '../components/admin/Sidemenu';       

function AdminServicios() {
    const navigate = useNavigate();
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        // 1. Conexión a Mockoon para traer la lista
        axios.get('http://localhost:3001/servicios')
            .then((response) => {
                setServicios(response.data);
            })
            .catch((error) => {
                console.error("Error cargando servicios:", error);
                alert("Error al conectar con Mockoon. Revisa que esté encendido.");
            });
    }, []);

    // Función para manejar el click en "Ver Detalle"
    const verDetalle = (id) => {
        // Si tus servicios en Mockoon tienen ID, úsalo. Si no, usamos el '1' de prueba.
        const idParaVer = id || 1; 
        navigate(`/admin/servicios/detalle/${idParaVer}`);
    };

    return (
        <div className="wrapper">
            <AdminNavbar />
            <Sidemenu />
            
            <div className="content-wrapper">
                {/* Encabezado */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Gestión de Servicios</h1>
                            </div>
                            <div className="col-sm-6 text-right">
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => navigate('/admin/servicios/crear')}
                                >
                                    <i className="fas fa-plus mr-2"></i>
                                    Crear Nuevo Servicio
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabla de Datos */}
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Listado de Servicios Activos</h3>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{width: '1%'}}>#</th>
                                        <th style={{width: '30%'}}>Título del Servicio</th>
                                        <th style={{width: '50%'}}>Descripción</th>
                                        <th style={{width: '19%'}} className="text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicios.map((servicio, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <strong>{servicio.titulo}</strong>
                                            </td>
                                            <td>{servicio.descripcion}</td>
                                            <td className="project-actions text-center">
                                                {/* BOTÓN VER DETALLE (MODIFICADO) */}
                                                <button 
                                                    className="btn btn-info btn-sm mx-1"
                                                    onClick={() => verDetalle(servicio.id)}
                                                    title="Ver Detalle"
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </button>

                                                {/* Botón Eliminar (Visual) */}
                                                <button className="btn btn-danger btn-sm mx-1">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                    {/* Mensaje si no hay datos */}
                                    {servicios.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="text-center py-4">
                                                No hay servicios cargados o Mockoon está apagado.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AdminServicios;