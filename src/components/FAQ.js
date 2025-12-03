import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Necesario para la funcionalidad del acordeón

function FAQPrincipal() {

  const preguntas = [
    {
      id: "collapse1",
      titulo: "1. ¿Qué tipo de garantía tienen los sistemas solares?",
      texto: "Nuestros sistemas cuentan con garantía del fabricante que cubre los equipos principales —paneles, inversores y baterías— por un período de entre 10 y 25 años. Además, ofrecemos garantía por instalación certificada SEC."
    },
    {
      id: "collapse2",
      titulo: "2. ¿Cada cuánto se debe realizar la mantención?",
      texto: "Se recomienda una mantención preventiva al menos una vez al año para limpiar paneles, revisar conexiones y asegurar la máxima eficiencia del sistema."
    },
    {
      id: "collapse3",
      titulo: "3. ¿Puedo monitorear la energía que genero?",
      texto: "Sí. Todos nuestros kits incluyen acceso a un sistema de monitoreo en línea (App móvil o Web) para ver tu generación, consumo y ahorro en tiempo real."
    },
    {
      id: "collapse4",
      titulo: "4. ¿Cuánto tarda la instalación?",
      texto: "El promedio es de 2 a 5 días hábiles, dependiendo del tamaño del proyecto y la complejidad del techo. Previo a esto, realizamos una visita técnica."
    },
    {
      id: "collapse5",
      titulo: "5. ¿Qué requisitos eléctricos necesito?",
      texto: "Solo una instalación eléctrica en buen estado con tablero y protecciones. Si es necesario aumentar capacidad (empalme), nuestro equipo te asesora."
    },
    {
      id: "collapse6",
      titulo: "6. ¿Qué pasa si está nublado?",
      texto: "Los paneles siguen generando energía (entre un 20% y 40%), ya que funcionan con radiación y no solo con sol directo. El sistema se complementa con la red eléctrica automáticamente."
    }
  ];

  return (
    <section
      id="sectionFaq"
      className="py-5 p-5"
      style={{
    
        backgroundColor: "#a0a0a0ff",
        padding: "50px 0",
        borderTop: "3px solid #838181ff",
        borderBottom: "3px solid #e0e0e0",
        textShadow: '2px 2px 8px rgba(0,0,0,0.6)'
      }}
    >
      <div className="container">
   
        <h3 className="text-center mb-5 display-5 fw-bold" style={{ color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          Preguntas Frecuentes
        </h3>

        <div className="accordion shadow-lg" id="accordionFAQ" style={{ borderRadius: '10px', overflow: 'hidden' }}>
          
          {preguntas.map((item, index) => (
            <div className="accordion-item border-0" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''} fw-bold`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.id}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={item.id}
                  style={{ fontSize: '1.1rem' }}
                >
                  {item.titulo}
                </button>
              </h2>
              <div
                id={item.id}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionFAQ"
              >
                <div className="accordion-body text-muted" style={{ textShadow: 'none' }}>
                  {item.texto}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FAQPrincipal;