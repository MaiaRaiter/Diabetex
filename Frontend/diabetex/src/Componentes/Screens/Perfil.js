<<<<<<< HEAD
/*import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 393a7a2f36bcc1a2bf0d64b04d7acabc65f09a65
import axios from 'axios';
import {IoSettingsOutline} from "react-icons/io5"
import {IoHeartOutline} from "react-icons/io5"
import { Carrusel } from '../Carrusel.js';
import { LikeadosContext } from '../../context/LikeadosContext';

export default function Perfil () {

  const [error, setError] = useState(false);
  const [post, setPost] = useState([]);
  const {likeados}= useContext(LikeadosContext);  

  return (
    <>
    < IoSettingsOutline className='setting-icon icon'/>
    <img src="/img/logo.jpg" className="App-logo Posicion-logo" ></img>
    <p className='Nombre-usuario'>Gonzalo Perez</p>
    < IoHeartOutline className='heart-icon'/>
    
    {likeados.map((item) => (
      <Cardlikeados post={item} />
    ))}
    </> 
  );
}

 */