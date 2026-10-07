import { Link, useParams } from "react-router-dom";
import { actividades } from "../data/actividades";

function DetalleActividad() {
  const { id } = useParams();
  const actividad = actividades.find(
    (item) => item.id === Number(id)
  );

  if (!actividad) return <p>La actividad solicitada no existe.</p>;

  return (
    <main className="container py-4">
      <h1>{actividad.nombre}</h1>
      <p>{actividad.descripcion}</p>
      <Link to="/actividades">Volver</Link>
    </main>
  );
}

export default DetalleActividad;