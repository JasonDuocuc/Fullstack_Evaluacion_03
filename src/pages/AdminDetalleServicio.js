import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import AdminNavbar from '../components/admin/AdminNavbar'; 
import Sidemenu from '../components/admin/Sidemenu';       

function AdminDetalleServicio() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [servicio, setServicio] = useState(null);

    useEffect(() => {
        // Usamos el mismo truco: Traer todos y buscar el ID
        axios.get('http://localhost:3001/servicios')
            .then((response) => {
                const listaServicios = response.data;
                // Nota: usamos == para que coincida aunque uno sea string y el otro numero
                const servicioEncontrado = listaServicios.find(s => s.id == id);
                
                if (servicioEncontrado) {
                    setServicio(servicioEncontrado);
                } else {
                    alert("Servicio no encontrado");
                    navigate('/admin/servicios');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id, navigate]);

    if (!servicio) return <div className="p-5">Cargando...</div>;

    return (
        <div className="wrapper">
            <AdminNavbar />
            <Sidemenu />
            
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Detalle del Servicio</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/admin/servicios">Servicios</a></li>
                                    <li className="breadcrumb-item active">Servicio #{servicio.id}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-info-circle mr-1"></i>
                                Información General
                            </h3>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                {/* COLUMNA IZQUIERDA: Datos principales */}
                                <div className="col-12 col-md-8">
                                    <h3 className="text-primary"><i className="fas fa-solar-panel"></i> {servicio.titulo}</h3>
                                    <p className="text-muted mt-3">
                                        {servicio.descripcion}
                                    </p>

                                    <div className="row mt-4">
                                        <div className="col-12 col-sm-6">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Precio Estimado</span>
                                                    <span className="info-box-number text-center text-muted mb-0">{servicio.precio || "A cotizar"}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Duración</span>
                                                    <span className="info-box-number text-center text-muted mb-0">{servicio.duracion || "Variable"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* COLUMNA DERECHA: Solo volver */}
                                <div className="col-12 col-md-4 border-left">
                                    <h5 className="text-muted">Estado</h5>
                                    <div className="callout callout-info">
                                        <p>Servicio Activo y Visible en la Web.</p>
                                    </div>
                                    
                                    <hr />
                                    
                                    <button className="btn btn-secondary btn-block" onClick={() => navigate('/admin/servicios')}>
                                        <i className="fas fa-arrow-left mr-1"></i> Volver al listado
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AdminDetalleServicio;