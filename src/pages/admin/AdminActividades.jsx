import FormularioActividad from "./FormularioActividad";

function AdminActividades({ listaActividades, onAgregar, onEliminar }) {
  return (
    <main className="container py-4">
      <h1 className="mb-4">Administración de Actividades</h1>
      
      <FormularioActividad onGuardar={onAgregar} />

      <h3 className="h5 mb-3">Lista de Actividades ({listaActividades.length})</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Cupos</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {listaActividades.map((act) => (
              <tr key={act.id}>
                <td>{act.nombre}</td>
                <td>{act.categoria}</td>
                <td>{act.precio === 0 ? "Gratis" : `$${act.precio}`}</td>
                <td>{act.cupos}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onEliminar(act.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminActividades;