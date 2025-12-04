import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import AdminNavbar from '../components/admin/AdminNavbar'; 
import Sidemenu from '../components/admin/Sidemenu';       

function AdminServicios() {
    const navigate = useNavigate();
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
    
        axios.get('http://localhost:3001/servicios')
            .then((response) => {
                setServicios(response.data);
            })
            .catch((error) => {
                console.error("Error cargando servicios:", error);
                alert("Error al conectar con Mockoon. Revisa que esté encendido.");
            });
    }, []);


    const verDetalle = (id) => {
   
        const idParaVer = id || 1; 
        navigate(`/admin/servicios/detalle/${idParaVer}`);
    };

    return (
        <div className="wrapper">
            <AdminNavbar />
            <Sidemenu />
            
            <div className="content-wrapper">
            
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Gestión de Servicios</h1>
                            </div>
                            
                        </div>
                    </div>
                </section>

       
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Listado de Servicios Activos</h3>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{width: '1%'}}>ID</th>
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
                                      
                                                <button 
                                                    className="btn btn-info btn-sm mx-1"
                                                    onClick={() => verDetalle(servicio.id)}
                                                    title="Ver Detalle"
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </button>

                                      
                                                <button className="btn btn-danger btn-sm mx-1">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                              
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