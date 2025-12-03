import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Servicios() {
  // Estado para guardar los datos que vienen de Mockoon
  const [listaServicios, setListaServicios] = useState([]);

  useEffect(() => {
    // Conectamos con tu Mockoon en el puerto 3001
    axios.get('http://localhost:3001/servicios')
      .then((response) => {
        setListaServicios(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar servicios desde Mockoon:", error);
      });
  }, []);

  return (
    <section id="sectionServicios" className="py-5 p-5" style={{
      backgroundColor: '#a0a0a0ff',
      padding: '50px 0',
      borderTop: '3px solid #838181ff',
      borderBottom: '3px solid #e0e0e0',
      textShadow: '2px 2px 8px rgba(0,0,0,0.6)'
    }}>
      <div className="container text-center">
        <h3 className="mb-4" style={{ color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
          Nuestros Servicios
        </h3>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          
          {/* AQUÍ OCURRE LA MAGIA: 
              Si hay datos en Mockoon, los mostramos con tu diseño.
              Si Mockoon está apagado o vacío, no se romperá la página. 
          */}
          {listaServicios.length > 0 ? (
            listaServicios.map((servicio, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <div className="card-body">
                    {/* Usamos los datos de Mockoon manteniendo tus clases exactas */}
                    <h5 className="card-title">{servicio.titulo}</h5>
                    <p className="card-text">{servicio.descripcion}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* (Opcional) Esto se muestra si Mockoon está apagado para que no se vea vacío */
            <p style={{color: 'white'}}>Cargando servicios...</p>
          )}

        </div>
      </div>
    </section>
  );
}

export default Servicios;