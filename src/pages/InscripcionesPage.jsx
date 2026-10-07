import MisInscripciones from "../components/MisInscripciones";

function InscripcionesPage({ inscripciones, onEliminar }) {
  return (
    <main className="container py-4">
      <h1 className="mb-4">Gestión de Inscripciones</h1>
      <MisInscripciones inscripciones={inscripciones} onEliminar={onEliminar} />
    </main>
  );
}

export default InscripcionesPage;