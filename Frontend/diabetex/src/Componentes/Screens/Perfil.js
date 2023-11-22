import React, { useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5"
import { IoHeartOutline } from "react-icons/io5"
import { Carrusel } from '../Carrusel.js';
import { FavoritosContext } from '../../Context/FavoritosContext.js';
import { PiFolderSimpleBold } from "react-icons/pi"
import CardLikeados from './../CardLikeados'
import CardCarpetas from './../CardCarpetas'
import { Navbar } from '../Navbar.js';

export default function Perfil() {
  const [likes, setLikes] = useState(null);
  const [mostrar, setMostrar] = useState("likes");
  const [error, setError] = useState(false);
  const [carpetas, setCarpetas] = useState([]);
  const [post, setPost] = useState([]);
  const { likeados } = useContext(FavoritosContext);
  const [perfil, setPerfil] = useState("perfil");
  const { favoritos } = useContext(FavoritosContext);
  
  useEffect(() => {
  }, [favoritos]);


  useEffect(() => {
    const cargarCarpetas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/CarpetaXUsuario/2", {
        });
        setCarpetas(response.data);
      } catch (error) {
        console.error("Error al cargar carpetas:", error);
        setError(true);
      }
    };

    cargarCarpetas();
  }, []); 


  const MostrarLikes = () => {
    setMostrar("likes")
  }
  const MostrarCarpetas = () => {
    setMostrar("Carpetas")
  }

  return (
    <>
      {perfil && (
        <>
          < IoSettingsOutline className='setting-icon icon' />
          <img src="/img/logo.jpg" className="App-logo Posicion-logo" ></img>
          <p className='Nombre-usuario'>Gonzalo Perez</p>
          <center>< IoHeartOutline className='LikePerfil' onClick={MostrarLikes} /></center>
          <center>   <PiFolderSimpleBold onClick={MostrarCarpetas} className="Carpetas"> </PiFolderSimpleBold></center>
          <center>
          {mostrar === "likes" ? (
  <div className="scroll-container">
    <div className="griila-container">
      {favoritos.map((item, index) => (
        <div key={index} className="columna">
          <CardLikeados producto={item} />
        </div>
      ))}
    </div>
  </div>
) : null}


          </center>

          {mostrar === "Carpetas" && (
            <center>
              {carpetas.map((carpeta) => (

                <CardCarpetas carpeta={carpeta} />
                
              ))}
            </center>
          )}

        </>
      )}

      <Navbar />

    </>
  );
}

