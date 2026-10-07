import { Link } from "react-router-dom";
import { actividades } from "../data/actividades";

function Ofertas({ onInscribir }) {
  // Filtramos solo las actividades gratuitas o con precio 0
  const actividadesGratis = actividades.filter((act) => act.precio === 0);

  return (
    <main className="container py-4">
      <h1 className="mb-4">Actividades Gratuitas (Ofertas)</h1>

      {actividadesGratis.length === 0 ? (
        <p className="text-muted">No hay actividades gratuitas disponibles en este momento.</p>
      ) : (
        <div className="row g-4">
          {actividadesGratis.map((act) => (
            <div key={act.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-success mb-2">Gratis</span>
                  <h5 className="card-title">{act.nombre}</h5>
                  <p className="card-text text-muted">{act.descripcion}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between align-items-center pb-3">
                  <Link to={`/actividades/${act.id}`} className="btn btn-outline-primary btn-sm">
                    Ver detalle
                  </Link>
                  {onInscribir && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onInscribir(act)}
                    >
                      Inscribirme
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Ofertas;