import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Navbar } from "../Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Buscador = () => {
  const [productos, setProductos] = useState(null);
  const [buscando, setBuscando] = useState(true);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    CargarProductos()
  }, [])

  const CargarProductos = async () => {

    let url = "http://a-phz2-cidi-009:3000/api/producto";

    try {
      const response = await axios.get(url);
      if (response.data) {
        setProductos(response.data);
        console.log(productos.CodigoBarra)

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
        <center>
          <input
            onChange={(e) => searchByName(e)}
            id="inputFiltro"
            type="text"
            placeholder="search..."
            autoComplete="off"
            className="buscador"
          />
        </center>
        {buscando && (
          productosFiltrados.map((producto) => (
            <Link to={`/Producto/${producto.CodigoBarra}`} key={producto.id}>
              <p className="listaBuscador">{producto.Nombre}</p>
            </Link>
          ))
        )}
      </div>
      <Navbar />
    </>
  );
          }
  
export default Buscador;










