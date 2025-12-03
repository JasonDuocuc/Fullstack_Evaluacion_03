import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import Sidemenu from '../components/admin/Sidemenu';

function AdminPlanes() {
    const navigate = useNavigate();
    const [planes, setPlanes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/planes')
            .then((res) => setPlanes(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="wrapper">
            <AdminNavbar />
            <Sidemenu />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <h1>Gestión de Planes</h1>
                            </div>
                            {/* AQUÍ BORRAMOS EL BOTÓN DE CREAR */}
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="card">
                        <div className="card-body p-0">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Características</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {planes.map((plan) => (
                                        <tr key={plan.id}>
                                            <td><strong>{plan.nombre}</strong></td>
                                            <td className="text-success font-weight-bold">{plan.precio}</td>
                                            <td><small>{plan.caracteristicas}</small></td>
                                            <td>
                                                <button className="btn btn-info btn-sm" onClick={() => navigate(`/admin/planes/detalle/${plan.id}`)}>
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default AdminPlanes;