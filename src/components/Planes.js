import '../App.css';
function Planes() {
  return (
    <section id="sectionPlanes" className="py-5 p-5" style={{
    backgroundColor: '#a0a0a0ff',
    padding: '50px 0',
    borderTop: '3px solid #838181ff',
    borderBottom: '3px solid #e0e0e0',
    textShadow:'2px 2px 8px rgba(0,0,0,0.6)'
    }} >
      <div className="container my-4">
        <h3 className="text-center my-3" style={{ color:'white',textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>Planes</h3>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/plan-basico.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Básico</h5>
                <p>Ideal para comenzar con energía solar</p>
                <ul className="list-unstyled">
                  <li>Estimación de consumo</li>
                  <li>Equipo certificado</li>
                  <li>Instalación inicial</li>
                  <li>Garantía básica</li>
                </ul>
                <a href="#sectionContacto" className="btn btn-moderno mt-2">Solicitar evaluación</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/plan-optimizado.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Optimizado</h5>
                <p>Equilibrio entre ahorro y rendimiento</p>
                <ul className="list-unstyled">
                  <li>Diseño personalizado</li>
                  <li>Inversor eficiente</li>
                  <li>Monitoreo básico</li>
                  <li>Garantía extendida</li>
                </ul>
                <a href="#sectionContacto" className="btn btn-moderno mt-2">Solicitar evaluación</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/plan-autonomo.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Autónomo</h5>
                <p>Máxima independencia con respaldo</p>
                <ul className="list-unstyled">
                  <li>Integración con baterías</li>
                  <li>Monitoreo avanzado</li>
                  <li>Optimización por horarios</li>
                  <li>Soporte prioritario</li>
                </ul>
                <a href="#sectionContacto" className="btn btn-moderno mt-2">Solicitar evaluación</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planes;
