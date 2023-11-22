import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navbar } from '../Navbar';
import CardProducto from '../CardProducto';

const ProductosGuardadosXCarpeta = ( carpeta) => {
    const [productosGuardados, setProductosGuardados] = useState([]);
    console.log(productosGuardados);
    
    useEffect(() => {
        const cargarProductosGuardadosXCarpeta = async () => {
          try {
            const response = await axios.get("http://localhost:3000/api/CarpetaXUsuario/2/2", {
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