import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar.js'
import '../../index.css'
import '../../App.css'
import { Carrusel } from '../Carrusel.js';
import axios from "axios"
import Buscador  from './Buscador'

export const Home = () => {
  const IdUsuario = 2;
  const MasLikeados = `http://a-phz2-cidi-023:3000/api/likesXProducto`;
  const Recientes = `http://a-phz2-cidi-023:3000/api/accesoProducto/${IdUsuario}`;

  return (
    <div className="App-header d-flex flex-column justify-content-between vh-100">
         <center>
           
        <center><img src="/img/logo.jpg" className="logoHome" alt=""></img></center>
        <br></br>
        <Buscador />
      
        </center>
      <div className='Carruseles'>
        <p className='TituloHome'>Mas likeados</p>
       
        <Carrusel DatosCarrusel={MasLikeados} />
        <p className='TituloHome'>Recientes</p>
        <Carrusel DatosCarrusel={Recientes} />
      </div>
    
     <Navbar />
      </div>
      
  );
}
