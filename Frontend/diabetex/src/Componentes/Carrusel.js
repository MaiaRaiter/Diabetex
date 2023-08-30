import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineHeart } from "react-icons/ai";



export const Carrusel = ({DatosCarrusel}) => {
  const IdUsuario = 5;
  const [Producto, setProducto] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const CargarProductosRecientes = async () => {
      try {
        const response = await axios.get(DatosCarrusel);
        if (response.data) {
          setProducto(response.data);
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    
    

    CargarProductosRecientes();
  }, []);

  return (
    <div className="horizontal-scroll-container"> {/* Apply a class for horizontal scrolling */}
      {error ? (
        <div>Error al cargar el producto</div>
      ) : Producto ? (
        <>
          <div className="horizontal-products-container d-flex flex-row ">
        
            {Producto.map((P) => (
              <div key={P.id} className='ProductosRecientes d-flex flex-column mr-2 mx-auto mt-50'>
                <img src={P.Foto} className="FotoCarrusel" alt=""></img>
                <p className='mx-auto NombreProductoCarrusel'>{P.Nombre}</p>
                <p className='MeGustas'>{P.CantMeGusta}</p>
                <AiOutlineHeart className='MeGustas'></AiOutlineHeart>
              </div>
            
            ))}
          </div>
        </>
      ) : (
        <div>No hay productos escaneados recientes</div>
      )}
    </div>




  );
};