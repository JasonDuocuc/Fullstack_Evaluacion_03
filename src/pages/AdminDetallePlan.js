import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import AdminNavbar from '../components/admin/AdminNavbar'; 
import Sidemenu from '../components/admin/Sidemenu';       

function AdminDetallePlan() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);

    useEffect(() => {
 
        axios.get('http://localhost:3001/planes')
            .then((response) => {
                const listaPlanes = response.data;
                const planEncontrado = listaPlanes.find(p => p.id == id);
                
                if (planEncontrado) {
                    setPlan(planEncontrado);
                } else {
                    alert("Plan no encontrado");
                    navigate('/admin/planes');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id, navigate]);


    const determinarImagen = () => {
        if (!plan) return null;
        switch (parseInt(plan.id)) {
            case 1: return '/assets/plan_basico.png';
            case 2: return '/assets/plan_optimizado.png';
            case 3: return '/assets/plan_autonomo.png';
            default: return plan.imagen || null; 
        }
    };

    if (!plan) return <div className="p-5">Cargando...</div>;

    const listaCaracteristicas = plan.caracteristicas ? plan.caracteristicas.split(',') : [];
    const imagenActual = determinarImagen();

    return (
        <div className="wrapper">
            <AdminNavbar />
            <Sidemenu />
            
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Detalle de Plan</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/admin">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/admin/planes">Planes</a></li>
                                    <li className="breadcrumb-item active">Plan #{plan.id}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="row">
                  
                        <div className="col-md-8">
                            <div className="card card-success card-outline">
                                <div className="card-header">
                                    <h3 className="card-title font-weight-bold">{plan.nombre}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="callout callout-success">
                                        <h5>Descripción Comercial:</h5>
                                        <p>{plan.descripcion}</p>
                                    </div>

                                    <h5 className="mt-4 text-muted"><i className="fas fa-list-ul mr-2"></i> Incluye:</h5>
                                    <ul className="list-group list-group-flush">
                                        {listaCaracteristicas.map((item, index) => (
                                            <li key={index} className="list-group-item">
                                                <i className="fas fa-check text-success mr-2"></i>
                                                {item.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-md-4">
                            
                 
                            {imagenActual && (
                                <div className="card mb-3">
                                    <div className="card-body text-center p-2">
                                        <p className="text-muted mb-1 text-sm">Vista Previa</p>
                                        <img 
                                            src={imagenActual} 
                                            alt={plan.nombre} 
                                            className="img-fluid rounded border" 
                                            style={{maxHeight: '200px', width: '100%', objectFit: 'cover'}} 
                                        />
                                    </div>
                                </div>
                            )}

                      
                            <div className="small-box bg-gradient-success">
                                <div className="inner">
                                    <h3>{plan.precio}</h3>
                                    <p>Valor de Inversión</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-money-bill-wave"></i>
                                </div>
                            </div>

                       
                            <div className="card">
                                <div className="card-header bg-gray-light">
                                    <h3 className="card-title">Navegación</h3>
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-secondary btn-block" onClick={() => navigate('/admin/planes')}>
                                        <i className="fas fa-arrow-left mr-2"></i> Volver al listado
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

export default AdminDetallePlan;