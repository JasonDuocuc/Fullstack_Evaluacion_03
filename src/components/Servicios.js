import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Servicios() {
  const [listaServicios, setListaServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/servicios')
      .then((response) => {
        setListaServicios(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const obtenerIcono = (id) => {
    switch (parseInt(id)) {
      case 1: return "fas fa-solar-panel";
      case 2: return "fas fa-certificate";
      case 3: return "fas fa-desktop";
      case 4: return "fas fa-tools";
      case 5: return "fas fa-hand-sparkles"; 
      default: return "fas fa-check";
    }
  };

  return (
    <section id="servicios" className="py-5" style={{
      // EL MISMO FONDO GRIS INDUSTRIAL
      backgroundColor: '#a0a0a0ff',
      padding: '50px 0',
      borderTop: '3px solid #838181ff',
      borderBottom: '3px solid #e0e0e0',
      minHeight: '500px'
    }}>
      <div className="container"> 
        <div className="text-center mb-5">
          <h2 className="fw-bold display-4" style={{ color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Nuestros Servicios
          </h2>
          <p className="lead text-white" style={{ fontWeight: '500' }}>
            Calidad técnica certificada
          </p>
        </div>

        {loading && (
           <div className="text-center py-5">
             <div className="spinner-border text-light" role="status"><span className="visually-hidden">...</span></div>
           </div>
        )}

        {!loading && error && (
           <div className="text-center py-5 text-white">
             <i className="fas fa-plug fa-3x mb-3 text-warning"></i>
             <p>Servicios no disponibles momentáneamente.</p>
           </div>
        )}

        {!loading && !error && (
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {listaServicios.map((servicio, index) => (
              <div className="col" key={index}>
                {/* TARJETA BLANCA CON EFECTO HOVER */}
                <div 
                    className="card h-100 shadow border-0"
                    style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="card-body text-center p-4">
                    {/* ICONO AMARILLO */}
                    <div className="mb-4 d-inline-block p-3 rounded-circle bg-light shadow-sm">
                        <i className={`${obtenerIcono(servicio.id)} fa-3x text-warning`}></i>
                    </div>

                    <h5 className="card-title fw-bold mb-3">{servicio.titulo}</h5>
                    <p className="card-text text-muted small">{servicio.descripcion}</p>
                  </div>
                  
                  <div className="card-footer bg-white border-0 pb-4">
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill shadow-sm">
                        {servicio.precio}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Servicios;