import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar.js'
import '../../index.css'
import '../../App.css'
import { Carrusel } from '../Carrusel.js';
import axios from "axios"
import Buscador  from './Buscador'

export const Home = () => {
  const IdUsuario = 2;
  const MasLikeados = `http://a-phz2-cidi-023:3000/api/likesXProducto`;
  const Recientes = `http://a-phz2-cidi-023:3000/api/accesoProducto/${IdUsuario}`;
  const [productos, setProductos] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    CargarProductos()
  }, [])

  const CargarProductos = async () => {

    let url = "http://localhost:3000/api/producto";

    try {
      const response = await axios.get(url);
      if (response.data) {
        setProductos(response.data);

      } else {

      }
    } catch (error) {
      console.log(error);

    }
  };

  const searchByName = (e) => {
    const searchText = e.target.value.toLowerCase();

    if (productos) {

      //filter
      //productos.filter(funcion -> boolean)

      const productosFiltrados = productos.filter(product => {
        const productName = product.Nombre ? product.Nombre.toLowerCase() : "Sin nombre";

        return productName.startsWith(searchText);
      });
      setProductosFiltrados(productosFiltrados);
      //Tengo una lista de productos filtrados que se actualiza cuando busco uno nuevo
    }
  };

  return (
    <div className="App-header d-flex flex-column justify-content-between vh-100">
         <center>
           
        <center><img src="/img/logo.jpg" className="logoHome" alt=""></img></center>
        <br></br>

        <div>
          <input onChange={(e) => searchByName(e)} id="inputFiltro" type='text' placeholder='search...' autoComplete='off' className="widget-search-bar"  />
          {productosFiltrados.map(producto => <p>{producto.Nombre}</p>)}
        </div>
      
        </center>
      <div className='Carruseles'>
        <p className='TituloHome'>Mas likeados</p>
        <Buscador productos={productos} />
        <Carrusel DatosCarrusel={MasLikeados} />
        <p className='TituloHome'>Recientes</p>
        <Carrusel DatosCarrusel={Recientes} />
      </div>
    
     <Navbar />
      </div>
      
  );
}
