import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navbar } from '../Navbar';
import CardProducto from '../CardProducto';
import { IoSettingsOutline } from "react-icons/io5"
import {  useParams } from 'react-router-dom';

const ProductosGuardadosXCarpeta = () => {
  let { carpeta } = useParams();
    console.log(carpeta);
    
    const [productosGuardados, setProductosGuardados] = useState(carpeta);
    
    useEffect(() => {
        const cargarProductosGuardadosXCarpeta = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/CarpetaXUsuario/2/${carpeta.Id}`, {
            });
            setProductosGuardados(response.data);
          } catch (error) {
            console.error("Error al cargar carpetas:", error);
          }
        };
    
        cargarProductosGuardadosXCarpeta();
      }, []);

    return (
        <>
         < IoSettingsOutline className='setting-icon icon' />
          <img src="/img/logo.jpg" className="App-logo Posicion-logo" ></img>
          <p className='Nombre-usuario'>${carpeta.Nombre}</p>
          <center>
              {productosGuardados.map((producto) => (
                <CardProducto producto={producto} />
              ))}
            </center>
          <Navbar />
        </>
      )
}



export default ProductosGuardadosXCarpeta;