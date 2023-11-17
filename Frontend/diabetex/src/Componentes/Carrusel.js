import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AiOutlineHeart } from "react-icons/ai";
import { FavoritosContext } from '../Context/FavoritosContext';




export const Carrusel = ({DatosCarrusel}) => {
  const IdUsuario = 2;
  let id = 0;
  const [Producto, setProducto] = useState(null);
  const [error, setError] = useState(false);
  const [likes, setLikes] = useState(false);
  const {  AddFavorito } = useContext(FavoritosContext);  

  useEffect(() => {
    const CargarProductosRecientes = async () => {
      try {
        const response = await axios.get(DatosCarrusel);
        if (response.data) {
          console.log(response.data)
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

  const handleLikes = async (idUsuario, Id, e) => {
    e.preventDefault();
    console.log(Id)
    // Verifica si el producto ya tiene un contador de likes en el estado
   

    // Realiza una solicitud a la API para actualizar los likes
    try {
      let url = `http://a-phz2-cidi-020:3000/api/meGustaXUsuario/${IdUsuario}/${Id}`;
      console.log(url);
      const response = await axios.post(url, null);

      // Actualiza el estado con la nueva cantidad de likes
      if(likes === true){
        setLikes(false);
      }else{
        setLikes(true);
      }

    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="horizontal-scroll-container"> {}
      {error ? (
        <div>No hay productos likeados</div>
      ) : Producto ? (
        <>
          <div className="horizontal-products-container d-flex flex-row " key={id}>
        
            {Producto.map((P) => (
              <div key={P.id} className='ProductosRecientes d-flex flex-column mr-2 mx-auto'>
                <img src={P.Foto} className="FotoCarrusel" alt=""></img>
                <p className='mx-auto NombreProductoCarrusel text-truncate '>{P.Nombre}</p>
                <p className='MeGustas'>{P.CantMeGusta}</p>
                {console.log(P)}
                <AiOutlineHeart  onClick={(e) =>AddFavorito(P)/*handleLikes(IdUsuario,P.Id, e)*/}  className={` heart-icon ${likes ? 'active' : ''}`}/> 
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

/*User
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineHeart } from "react-icons/ai";



export const Carrusel = ({DatosCarrusel}) => {
  const IdUsuario = 5;
  let id = 0;
  const [Producto, setProducto] = useState(null);
  const [error, setError] = useState(false);
  const [likes, SetLikes] = useState(false);

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

  const handleLikes = (CodigoDeBarras, e) => {
    e.preventDefault()
    SetLikes();
    if (likes === false) {
      // 
      //SetLikes(true);
      // Cargar todos los productos
      CargarProductosLikeados(CodigoDeBarras);
      
    }
    else{
      SetLikes(false);
      
    }
    console.log(likes)
  }; 
  const CargarProductosLikeados = async (CodigoDeBarras) => {
    e.preventDefault();
    const CodigoB = CodigoDeBarras; 
    let url = `http://a-phz2-cidi-021:3000/api/likesXProducto/" + CodigoB +"?idUsuario=2"` ;
    try {
      const response = await axios.get(url);
      
    } catch (error) {
     
    }


  };

  return (
    <div className="horizontal-scroll-container"> {}
      {error ? (
        <div>Error al cargar el producto</div>
      ) : Producto ? (
        <>
          <div className="horizontal-products-container d-flex flex-row " key={id}>
        
            {Producto.map((P) => (
              <div key={P.id} className='ProductosRecientes d-flex flex-column mr-2 mx-auto'>
                <img src={P.Foto} className="FotoCarrusel" alt=""></img>
                <p className='mx-auto NombreProductoCarrusel text-truncate '>{P.Nombre}</p>
                <p className='MeGustas'>{P.CantMeGusta}</p>
                <AiOutlineHeart  onClick={(e) => handleLikes(P.CodigoDeBarras, e)}  className={` heart-icon ${likes ? 'active' : ''}`}/> 
              </div>
            
            ))}
          </div>
        </>
      ) : (
        <div>No hay productos escaneados recientes</div>
      )}
    </div>




  );
};*/