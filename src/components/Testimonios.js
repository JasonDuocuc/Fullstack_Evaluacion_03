function Testimonios() {
  return (
    <section id="sectionTestimonios" className="py-5 p-5" style={{
    backgroundColor: '#a0a0a0ff',
    padding: '50px 0',
    borderTop: '3px solid #838181ff',
    borderBottom: '3px solid #e0e0e0',
    textShadow:'2px 2px 8px rgba(0,0,0,0.6)'
    }}>
      <div className="container my-4">
        <h3 className="text-center my-3" style={{ color:'white',textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>Testimonios</h3>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/testimonio1.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">María López</h5>
                <p className="text-muted">Providencia, Santiago</p>
                <p>Excelente servicio y atención. Mi sistema solar funciona perfecto y la cuenta de luz bajó muchísimo.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/testimonio2.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Carlos Rojas</h5>
                <p className="text-muted">Talca, Región del Maule</p>
                <p>Instalación rápida y profesional. Todo quedó funcionando impecable desde el primer día.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card text-center h-100">
              <img src="/assets/testimonio3.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Andrea Silva</h5>
                <p className="text-muted">Puerto Varas, Región de Los Lagos</p>
                <p>Excelente inversión. Estoy feliz con los resultados y el ahorro mensual en electricidad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
