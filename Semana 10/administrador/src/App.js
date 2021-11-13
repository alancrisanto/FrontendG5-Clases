import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ListaProductosView from "./views/ListaProductosView";
import CrearProductoView from "./views/CrearProductoView";
import EditarProductosView from "./views/EditarProductosView";
import ListaCategoriasView from "./views/ListaCategoriasView";
import { crearCategoria } from "./services/categoriasService";
import CrearCategoriaView from "./views/CrearCategoriaView";



export default function App() {
  return (
    <div>
      {/* <ListaProductosView/>
      <CrearProductoView/> */}
      <Router>
        <Routes>
          {/* Route path="/" element="{<componente />}" */}
          <Route path="/" element={<ListaProductosView/>} />
          <Route path="/crearproducto" element={<CrearProductoView/>} />
          {/* Cuando quiero indicar que voy a pasar un parámetro utilizo path="/url/:nombre_parametro" */}
          <Route path="/editarproducto/:id" element={<EditarProductosView />}/>
          <Route path="/listacategorias" element={<ListaCategoriasView />}/>
          <Route path="/crearcategoria" element={<CrearCategoriaView />}/>

        </Routes>
      </Router>
    </div>
  )
};

