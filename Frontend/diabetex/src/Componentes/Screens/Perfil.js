import React, { useState } from 'react';
import axios from 'axios';
import {IoSettingsOutline} from "react-icons/io5"
import {IoHeartOutline} from "react-icons/io5"

export default function Perfil () {

  useEffect(() => {
    axios
      .get('http://a-phz2-cidi-020:3000/api/usuario/'+id)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);
        
  return (
    <>
    < IoSettingsOutline className='setting-icon icon'/>
    <img src="/img/logo.jpg" className="App-logo Posicion-logo" ></img>
    <p className='Nombre-usuario'>Gonzalo Perez{usuario.Nombre}</p>
    < IoHeartOutline className='heart-icon'/>
    </>   
  );
}

 