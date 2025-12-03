import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlanDetalle() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/plans/${id}`)
      .then(res => res.json())
      .then(data => setPlan(data));
  }, [id]);

  if (!plan) return <p>Cargando...</p>;

  return (
    <div className="contenedor">
      <h1>{plan.name}</h1>
      <p>{plan.description}</p>
      <p><strong>Valor mensual:</strong> ${plan.price}</p>
    </div>
  );
}

export default PlanDetalle;
