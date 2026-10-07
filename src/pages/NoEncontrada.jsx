import { Link } from "react-router-dom";

function NoEncontrada() {
  return (
    <main className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-muted mb-4">
        La ruta solicitada no existe o fue movida.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al Inicio
      </Link>
    </main>
  );
}

export default NoEncontrada;