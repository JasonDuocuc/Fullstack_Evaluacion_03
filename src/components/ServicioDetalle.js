import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ServicioDetalle() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data));
  }, [id]);

  if (!service) return <p>Cargando...</p>;

  return (
    <div className="contenedor">
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <p><strong>Precio:</strong> ${service.price}</p>
    </div>
  );
}

export default ServicioDetalle;
