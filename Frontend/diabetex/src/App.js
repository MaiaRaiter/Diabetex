
import React from "react";
import axios from 'axios'
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciarSesion from './Componentes/Screens/IniciarSesion.js'
import Producto from './Componentes/Screens/Producto';
import { Home } from './Componentes/Screens/Home';
import Registrarse from './Componentes/Screens/Registrarse';
import Perfil from "./Componentes/Screens/Perfil.js";
import Scanner from "../src/Componentes/Scanner.js"
import Busacador from "./Componentes/Screens/Buscador.js";
import { PantallaError } from "./Componentes/Screens/PantallaError.js";
import FavoritosProvider from '../src/Context/FavoritosContext.js';
import ProductosGuardados from "./Componentes/Screens/ProductosGuardados.js";

const App = () => {
 /* const CargarProductos = async () => {
    const CodigoB = 3175680011480;
    axios
      .get("http://a-phz2-cidi-020:3000/api/producto/" + CodigoB)
      .then((result) => {
        if (result.data.status === 1) {
          //setPost(result.data.product]);
          console.log(result.data.brands);
        } else {
          // no se encontro
          console.log('No se encontro');
        }

      })
      .catch((error) => {
        //setPost(error);
        console.log("Error");
      });
  }

  //const producto = result.data.results;
  //var index= 0;

  useEffect(() => {
    CargarProductos()
  }, []);*/

  //<Producto onCargarProductos={CargarProductos} />

  return (

    <FavoritosProvider>
      <Routes>

          <Route path='/Home' element={<Home />}> </Route>
          <Route index element={<IniciarSesion />}></Route>
          <Route path='/Registrarse' element={<Registrarse />}> </Route>
          <Route path='/Producto/:CodigoB' element={<Producto />}> </Route>
          <Route path='/Perfil' element={<Perfil />}> </Route>
          <Route path='/Scanner' element={<Scanner />}> </Route>
          <Route path='/PantallaError' element={<PantallaError />}> </Route>
          <Route path='/Buscador' element={<Busacador />}> </Route>
          <Route path='/ProductosGuardados/:IdCarpeta' element={<ProductosGuardados />}> </Route>

        
      </Routes>
    </FavoritosProvider>
  );



}
export default App;