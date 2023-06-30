
import React from "react";
import axios from 'axios'
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import IniciarSesion from './Componentes/Screens/InciarSesion.js'
import Producto from './Componentes/Screens/Producto';
import  {Home} from './Componentes/Screens/Home';
import Registrarse  from './Componentes/Screens/Registrarse';






const App = () => {
  const CargarProductos = async () => {
    const CodigoB = 3175680011480;
    axios
      .get("http://a-phz2-cidi-021:3000/api/producto/" + CodigoB)
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
  }, []);

  //<Producto onCargarProductos={CargarProductos} />

  return (


    <Routes>
      <Route path='/' element={<IniciarSesion />}> </Route>
      <Route path='/Registrarse' element={<Registrarse />}> </Route>
      <Route path='/Home' element={<Home />}> </Route>
      <Route path='/Producto' element={<Producto />}> </Route>
    </Routes>

  );



}
export default App;