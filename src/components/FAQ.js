import "bootstrap/dist/js/bootstrap.bundle.min.js";

function FAQPrincipal() {
  return (
    <section
      id="sectionFaq"
      className="py-5 p-5"
      style={{
        backgroundColor: "#a0a0a0ff",
        padding: "50px 0",
        borderTop: "3px solid #838181ff",
        borderBottom: "3px solid #e0e0e0",
        textShadow:'2px 2px 8px rgba(0,0,0,0.6)'
      }}
    >
      <div className="container">
        <h3 className="text-center my-3" style={{ color:'white',textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}}>Preguntas frecuentes</h3>
        <div className="accordion" id="accordion1">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                1. ¿Qué tipo de garantía tienen los sistemas solares?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse hide"
              aria-labelledby="heading1"
              data-bs-parent="#accordion1"
            >
              <div className="accordion-body">
                Nuestros sistemas cuentan con garantía del fabricante que cubre
                los equipos principales —paneles, inversores y baterías— por un
                período de entre 10 y 25 años, según el modelo. Además,
                ofrecemos una garantía adicional por instalación certificada
                SEC, que asegura la correcta conexión y funcionamiento del
                sistema bajo normativas vigentes.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2">
              <button
             
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="true"
                aria-controls="collapse2"

              >
                2. ¿Cada cuánto se debe realizar la mantención del sistema
                solar?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse hide"
              aria-labelledby="heading2"
              data-bs-parent="#accordion2"
            >
              <div className="accordion-body">
                Se recomienda realizar una mantención preventiva al menos una
                vez al año. Durante este proceso se verifica el estado de los
                paneles, estructuras, cableado y conexiones eléctricas. También
                se limpia la superficie de los módulos para maximizar la
                captación solar y se actualiza el software de monitoreo si es
                necesario.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading3">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="true"
                aria-controls="collapse3"
              >
                3. ¿Puedo monitorear la energía que genera mi sistema?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse hide"
              aria-labelledby="heading3"
              data-bs-parent="#accordion3"
            >
              <div className="accordion-body">
                Sí. Todos nuestros kits incluyen acceso a un sistema de
                monitoreo en línea, disponible mediante aplicación móvil o desde
                un navegador web. Podrás visualizar la energía generada, el
                consumo diario, los ahorros estimados y el rendimiento de cada
                componente, todo en tiempo real y con reportes automáticos.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading4">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="true"
                aria-controls="collapse4"
              >
                4. ¿Cuánto tarda el proceso completo de instalación?
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse hide"
              aria-labelledby="heading4"
              data-bs-parent="#accordion4"
            >
              <div className="accordion-body">
                El tiempo promedio de instalación varía entre 2 y 5 días
                hábiles, dependiendo del tamaño del sistema, la complejidad del
                techo y las condiciones del sitio. Antes de instalar, realizamos
                una visita técnica y estudio energético para definir la mejor
                ubicación y potencia adecuada a tu consumo.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading5">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="true"
                aria-controls="collapse5"
              >
                5. ¿Qué requisitos eléctricos necesito para instalar paneles
                solares?
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse hide"
              aria-labelledby="heading5"
              data-bs-parent="#accordion5"
            >
              <div className="accordion-body">
                Solo se requiere una instalación eléctrica en buen estado, con
                su tablero y protecciones actualizadas. En algunos casos, se
                puede solicitar una ampliación de capacidad o una revisión del
                empalme eléctrico, la cual es evaluada por nuestro equipo antes
                de la instalación.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading6">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="true"
                aria-controls="collapse6"
              >
                6. ¿Qué pasa si el día está nublado o llueve?
              </button>
            </h2>
            <div
              id="collapse6"
              className="accordion-collapse collapse hide"
              aria-labelledby="heading6"
              data-bs-parent="#accordion6"
            >
              <div className="accordion-body">
                Los paneles solares siguen generando energía incluso en días
                nublados, aunque con menor eficiencia (alrededor del 20% al 40%
                de la producción normal). El sistema se complementa
                automáticamente con la red eléctrica o las baterías, asegurando
                un suministro constante de energía.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQPrincipal;
