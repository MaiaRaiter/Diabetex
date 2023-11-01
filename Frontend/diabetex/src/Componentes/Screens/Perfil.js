import React, { useState } from 'react';
import axios from 'axios';
import {IoSettingsOutline} from "react-icons/io5"
import {IoHeartOutline} from "react-icons/io5"

export default function Perfil (usuario) {
        
  return (
    <>
    < IoSettingsOutline className='setting-icon icon'/>
    <img src="/img/logo.jpg" className="App-logo Posicion-logo" ></img>
    <p className='Nombre-usuario'>Gonzalo Perez{usuario.Nombre}</p>
    < IoHeartOutline className='heart-icon'/>
    </>   
  );
}

 