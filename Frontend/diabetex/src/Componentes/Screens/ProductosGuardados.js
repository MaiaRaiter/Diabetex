import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from '../Navbar';
import CardProducto from '../CardProducto';
import { IoSettingsOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';

const ProductosGuardadosXCarpeta = () => {
  const { IdCarpeta } = useParams();

  const [productosGuardados, setProductosGuardados] = useState([]);

  useEffect(() => {
    const cargarProductosGuardadosXCarpeta = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/CarpetaXUsuario/2/${IdCarpeta}`, {});
        setProductosGuardados(response.data);
      } catch (error) {
        console.error("Error al cargar carpetas:", error);
      }
    };

    if (IdCarpeta) {
      cargarProductosGuardadosXCarpeta();
    }
  }, [IdCarpeta]);

  return (
    <>
    {console.log(productosGuardados)}
      <IoSettingsOutline className='setting-icon icon' />
      <img src="/img/logo.jpg" className="App-logo Posicion-logo" alt="" />
      <p className='Nombre-usuario'>{}</p>
      <center>
        {productosGuardados.map((producto) => (
          <CardProducto key={producto.Nombre} producto={producto} />
        ))}
      </center>
      <Navbar />
    </>
  );
};

export default ProductosGuardadosXCarpeta;
