import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Navbar } from "../Navbar";

const Buscador = () => {
  const [productos, setProductos] = useState(null);
  const [buscando, setBuscando] = useState(true);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    CargarProductos()
  }, [])

  const CargarProductos = async () => {

    let url = "http://a-phz2-cidi-028:3000/api/producto";

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
      if (searchText) {
        const productosFiltrados = productos.filter(product => {
          const productName = product.Nombre ? product.Nombre.toLowerCase() : "Sin nombre";

          return productName.startsWith(searchText);
        });
        setProductosFiltrados(productosFiltrados);
        //Tengo una lista de productos filtrados que se actualiza cuando busco uno nuevo
      } else {
        setBuscando(false);
      }
    }

  };
  return (
    <>
      <div>
        <input onChange={(e) => searchByName(e)} id="inputFiltro" type='text' placeholder='search...' autoComplete='off' className="widget-search-bar" />
        {buscando && (
          productosFiltrados.map(producto => <p className="listaBuscador" key={producto.id}>{producto.Nombre}</p>)

        )}
      </div>
      <Navbar />
    </>
  )
}
export default Buscador;










