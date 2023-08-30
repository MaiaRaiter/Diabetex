import React from 'react'
import { Navbar } from '../Navbar.js'
import '../../index.css'
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { DiGhostSmall } from "react-icons/di";
import { Carrusel } from '../Carrusel.js';


export const Home = () => {
  const IdUsuario = 2;
  const [searchValue, setSearchValue] = useState('');
  //http://a-phz2-cidi-021:3000 CAMBIAR EL LINK 
  const MasLikeados = `http://a-phz2-cidi-001:3000/api/likesXProducto`;
  const Recientes = `http://a-phz2-cidi-001:3000/api/accesoProducto/${IdUsuario}`;

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones relacionadas con la búsqueda, como enviarla a una API o actualizar el estado de tu aplicación.
    console.log('Valor de búsqueda:', searchValue);
  };

  return (
    <>
      <div className="App-header">
        <img src="/img/logo.jpg" className="logoHome" alt=""></img>
        <br></br>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            id="lname"
            name="SearchBar"
            className="SearchBar"
            placeholder="Buscar Producto..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <BiSearch type="submit" className='SearchButton' />
          <DiGhostSmall className='filters' />
        </form>
      
      
      </div>
      <p className='TituloHome'>Mas likeados</p>
      <Carrusel DatosCarrusel={MasLikeados} />
      <p className='TituloHome'>Recientes</p>
      <Carrusel DatosCarrusel={Recientes} />
    
      <Navbar />
    </>
  );
}