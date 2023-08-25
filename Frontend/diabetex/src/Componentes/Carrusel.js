import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';


export const Carrusel = () => {
  const IdUsuario = 5;
  const [Producto, setProducto] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const CargarProductosRecientes = async () => {
      try {
        const response = await axios.get(`http://a-phz2-cidi-021:3000/api/accesoProducto/${IdUsuario}`);
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
          <div className="horizontal-products-container d-flex flex-row">
            {Producto.map((P) => (
              <div key={P.id} className='ProductosRecientes d-flex flex-column mr-2 mx-auto'>
                <img src={P.Foto} className="FotoProducto" alt=""></img>
                <p className='mx-auto'>Nombre: {P.Nombre}</p>
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