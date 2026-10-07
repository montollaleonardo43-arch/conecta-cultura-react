function Categorias() {
  const categorias = ["Música", "Artes visuales", "Danza", "Teatro"];

  return (
    <main className="container py-4">
      <h1 className="mb-4">Categorías Culturales</h1>
      <div className="row g-3">
        {categorias.map((cat, index) => (
          <div key={index} className="col-md-3">
            <div className="card text-center p-3 shadow-sm">
              <h5 className="card-title">{cat}</h5>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Categorias;