import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Planes() {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/planes')
      .then((response) => {
        setPlanes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando planes:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const obtenerImagen = (plan) => {
    switch (parseInt(plan.id)) {
      case 1: return '/assets/plan_basico.png';
      case 2: return '/assets/plan_optimizado.png';
      case 3: return '/assets/plan_autonomo.png';
      default: return plan.imagen || 'https://via.placeholder.com/300x200?text=HelioAndes';
    }
  };

  return (
    <section id="planes" className="py-5" style={{

      backgroundColor: '#a0a0a0ff',
      padding: '50px 0',
      borderTop: '3px solid #838181ff',
      borderBottom: '3px solid #e0e0e0',
      textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
      minHeight: '600px'
    }}>
      <div className="container">
        
  
        <div className="text-center mb-5">
          <h2 className="fw-bold display-4" style={{ color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Nuestros Planes Solares
          </h2>
          <p className="lead text-white" style={{ fontWeight: '500' }}>
            Soluciones energéticas diseñadas para tu hogar
          </p>
        </div>

   
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-light" style={{width: '3rem', height: '3rem'}} role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3 text-white">Cargando catálogo...</p>
          </div>
        )}

 
        {!loading && error && (
          <div className="text-center py-5">
            <i className="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
            <h4 className="text-white">Información no disponible</h4>
            <p className="text-white-50">Por favor revisa nuestra conexión.</p>
          </div>
        )}

  
        {!loading && !error && (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {planes.map((plan) => (
              <div className="col" key={plan.id}>
                
  
                <div 
                  className="card h-100 shadow-lg border-0" 
                  style={{ 
                    transition: 'transform 0.3s ease',
                    cursor: 'default',
                    overflow: 'hidden' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  

                  <div style={{ position: 'relative' }}>
                    <img 
                      src={obtenerImagen(plan)} 
                      className="card-img-top" 
                      alt={plan.nombre}
                      style={{ height: '220px', objectFit: 'cover' }}
                    />

                    <div className="position-absolute bottom-0 end-0 bg-warning text-dark px-3 py-1 fw-bold rounded-start mb-3 shadow">
                        {plan.precio}
                    </div>
                  </div>

                  <div className="card-body text-center">

                    
                    <p className="card-text text-muted mb-4" style={{ textShadow: 'none' }}>
                        {plan.descripcion}
                    </p>
                    
                    <hr />

          
                    <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '90%', textShadow: 'none' }}>
                      {plan.caracteristicas && plan.caracteristicas.split(',').map((car, idx) => (
                        <li key={idx} className="mb-2 text-secondary">
                          <i className="fas fa-check-circle text-warning me-2"></i>
                          {car.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer bg-white border-0 pb-4 text-center">
                    <button className="btn btn-warning btn-lg w-100 fw-bold shadow-sm">
                      <i className="fas fa-paper-plane me-2"></i> Cotizar Ahora
                    </button>
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

export default Planes;