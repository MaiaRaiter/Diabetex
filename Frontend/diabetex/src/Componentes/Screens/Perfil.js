import React, { useState, useContext } from 'react';
import axios from 'axios';
import { IoSettingsOutline } from "react-icons/io5"
import { IoHeartOutline } from "react-icons/io5"
import { Carrusel } from '../Carrusel.js';
import { LikeadosContext } from '../../context/LikeadosContext';
import { PiFolderSimpleBold } from "react-icons/pi"
import CardLikeados from './../CardLikeados'
import { Navbar } from '../Navbar.js';

export default function Perfil() {
  const [likes, setLikes] = useState(null);
  const [mostrar, setMostrar] = useState("likes");
  const [error, setError] = useState(false);
  const [carpetas, Setcarpetas] = useState("");
  const [post, setPost] = useState([]);
  const { likeados } = useContext(LikeadosContext);
  const [perfil, setPerfil] = useState("perfil");


  /* {likeados.map((item) => (
        <Cardlikeados post={item} />
      ))}*/

  const MostrarLikes = () => {
    setMostrar("likes")
  }
  const MostrarCarpetas = () => {
    setMostrar("Carpetas")
  }

  return (
    <>
      < IoSettingsOutline className='setting-icon icon' />
      <img src="/img/logo.jpg" className="App-logo Posicion-logo" ></img>
      <p className='Nombre-usuario'>Gonzalo Perez</p>
      < IoHeartOutline className='heart-icon' />

      {likeados.map((item) => (
        <CardLikeados producto={item} />
      ))}


      {perfil && (
        <>
          < IoSettingsOutline className='setting-icon icon' />
          <img src="/img/logo.jpg" className="App-logo Posicion-logo" ></img>
          <p className='Nombre-usuario'>Gonzalo Perez</p>
          <center>< IoHeartOutline className='LikePerfil' onClick={MostrarLikes} /></center>
          <center>   <PiFolderSimpleBold onClick={MostrarCarpetas} className="Carpetas"> </PiFolderSimpleBold></center>
          <center>
            {mostrar === "likes" && (

              <p>likes</p>

            )}</center>
            
            {mostrar === "Carpetas" && (

              <p>Carpetas</p>

            )}

        </>
      )}

      <Navbar />

    </>
  );
}

