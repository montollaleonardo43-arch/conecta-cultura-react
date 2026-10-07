import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import PiePagina from "./components/PiePagina";

import Inicio from "./pages/Inicio";
import Actividades from "./pages/Actividades";
import DetalleActividad from "./pages/DetalleActividad";
import Categorias from "./pages/Categorias";
import Ofertas from "./pages/Ofertas";
import InscripcionesPage from "./pages/InscripcionesPage";
import AdminActividades from "./pages/admin/AdminActividades";
import NoEncontrada from "./pages/NoEncontrada";

import { actividades as datosIniciales } from "./data/actividades";

function App() {
  const [listaActividades, setListaActividades] = useState(() => {
    const guardadas = localStorage.getItem("actividades_lista");
    return guardadas ? JSON.parse(guardadas) : datosIniciales;
  });

  const [inscripciones, setInscripciones] = useState(() => {
    const guardadas = localStorage.getItem("inscripciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem("actividades_lista", JSON.stringify(listaActividades));
  }, [listaActividades]);

  useEffect(() => {
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
  }, [inscripciones]);

  function inscribir(actividad) {
    const yaExiste = inscripciones.some((item) => item.id === actividad.id);
    if (yaExiste) return;
    setInscripciones([...inscripciones, actividad]);
  }

  function eliminarInscripcion(id) {
    setInscripciones(inscripciones.filter((item) => item.id !== id));
  }

  function agregarActividad(nueva) {
    setListaActividades([nueva, ...listaActividades]);
  }

  function eliminarActividad(id) {
    setListaActividades(listaActividades.filter((item) => item.id !== id));
  }

  return (
    <>
      <Cabecera />
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/actividades" element={<Actividades onInscribir={inscribir} />} />
        <Route path="/actividades/:id" element={<DetalleActividad />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ofertas" element={<Ofertas onInscribir={inscribir} />} />
        <Route
          path="/inscripciones"
          element={
            <InscripcionesPage
              inscripciones={inscripciones}
              onEliminar={eliminarInscripcion}
            />
          }
        />
        <Route
          path="/admin/actividades"
          element={
            <AdminActividades
              listaActividades={listaActividades}
              onAgregar={agregarActividad}
              onEliminar={eliminarActividad}
            />
          }
        />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
      <PiePagina />
    </>
  );
}

export default App;