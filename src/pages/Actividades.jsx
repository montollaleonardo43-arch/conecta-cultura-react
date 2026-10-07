import Cartelera from "./Cartelera";
import { actividades } from "../data/actividades";

function Actividades() {
  function inscribir(actividad) {
    console.log("Actividad seleccionada:", actividad.nombre);
  }

  return (
    <main className="container py-4">
      <h1>Actividades</h1>
      <Cartelera actividades={actividades} onInscribir={inscribir} />
    </main>
  );
}

export default Actividades;