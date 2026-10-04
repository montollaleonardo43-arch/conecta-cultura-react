function TarjetaActividad({ actividad, onInscribir }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{actividad.nombre}</h2>
        <p className="text-muted">{actividad.categoria}</p>
        
        {/* AQUÍ ESTÁ LA CONDICIÓN DEL PRECIO */}
        <p className="fw-bold text-success">
          Precio: {actividad.precio === 0 ? "Gratis" : `$${actividad.precio}`}
        </p>
        
        <p>Cupos: {actividad.cupos}</p>
        
        {actividad.cupos > 0 && actividad.cupos <= 5 && (
          <p className="text-danger fw-bold">¡Últimos cupos!</p>
        )}
        
        <button
          className="btn btn-primary w-100"
          onClick={() => onInscribir(actividad)}
          disabled={actividad.cupos === 0}
        >
          Inscribirme
        </button>
      </div>
    </article>
  );
}

export default TarjetaActividad;