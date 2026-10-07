function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <div className="mt-4 p-4 bg-light rounded border">
      <h2 className="h4 mb-3">Mis Inscripciones</h2>

      {inscripciones.length === 0 ? (
        <p className="text-muted">No tienes actividades inscritas aún.</p>
      ) : (
        <ul className="list-group">
          {inscripciones.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{item.nombre}</strong>{" "}
                <span className="text-muted">({item.categoria})</span>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onEliminar(item.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MisInscripciones;