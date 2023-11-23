import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../index.css'
import { useNavigate } from "react-router-dom";
import { Navbar } from '../Navbar.js';
import { BiHeart } from 'react-icons/bi'
import { CiBookmark } from "react-icons/ci";
import { BiSolidHeart } from 'react-icons/bi'
import { FavoritosContext } from '../../Context/FavoritosContext.js';
import { CiShare2 } from "react-icons/ci";



const Producto = () => {
  const [producto, setProducto] = useState();
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState("Nutrientes");
  const [formData, setFormData] = useState({ CodigoDeBarra: '' });
  const { CodigoB } = useParams();
  const navigate = useNavigate();
  const { AddFavorito, isFavorite, EliminarFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    CargarProductoxCodigo()
  }, [])

  const CargarProductoxCodigo = async () => {
    console.log('CargarProductoxCodigo');
    console.log(CodigoB);
    console.log(formData);
    let url = "http://a-phz2-cidi-009:3000/api/producto/" + CodigoB + "?idUsuario=2";
    console.log(CodigoB)
    try {
      const response = await axios.get(url);
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

  const MostrarNutrientes = () => {
    setMostrar("Nutrientes")
  }

  const MostrarResumen = () => {
    setMostrar("Resumen")
  }

  return (
    <>

      <div id="listado" className="row">

        {producto && (
          <>
            <h1 className="NombreProducto">{producto.Nombre}</h1>
            <center> <img src={producto.Foto} className="FotoProducto" alt=""></img></center>
            {producto.Foto == null}
            <img src="/img/ImegenError.jpg" className="logoHome" alt=""></img>
            <div className='Contenedor'>
              <center> <p className='TextOverley'>Este producto contiene {producto.CalculoCarbohidratos}de Carbohidratos finales </p></center>
            </div>
          
            
            <p className='Ingredientes'>Ingredientes:{producto.Ingredientes}</p>
            <div className='BarraGris'>
              <p onClick={MostrarNutrientes} className="Nutrientes">Nutrientes</p>
              <p onClick={MostrarResumen} className="Resumen"> Resumen</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <center>

              {mostrar === "Nutrientes" && (
                <center>  <table className="table table-bordered Tabla ">
                  <thead>
                    <tr>
                      <th scope="col">Info Nutricional</th>
                      <th scope="col">100g</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row">Azúcares</th>
                      <td>{producto.NAzucar100g} G</td>
                    </tr>
                    <tr>
                      <th scope="row">Sodio</th>
                      <td>{producto.NSodio100g} Mg</td>

                    </tr>
                    <tr>
                      <th scope="row">Proteína</th>
                      <td>{producto.NProteinas100g} G</td>

                    </tr>
                    <tr>
                      <th scope="row">Grasas Saturadas</th>
                      <td>{producto.NGrasasSaturadas100g} G</td>

                    </tr>
                    <tr>
                      <th scope="row">Grasas</th>
                      <td>{producto.NGrasa100g} G</td>

                    </tr>
                  </tbody>
                </table> </center>

              )}

              {mostrar === "Resumen" &&
                <>
                  <center>  <table className="table table-bordered Tabla">
                    <thead>
                      <tr>

                        <th scope="col">Cantidad</th>
                        <th scope="col">{producto.Cantidad}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Azúcares</th>
                        <td>{producto.Marca} G</td>
                      </tr>
                      <tr>
                        <th scope="row">País de orígen</th>
                        <td>{producto.LugarFabricacion} Mg</td>
                      </tr>
                    </tbody>
                  </table> </center>
                  <p>Analisís de Ingredientes</p>
                  <div className='AnalisisIngredientes'>
                    
                  </div>
                  {isFavorite(producto.Id) ? (
          <BiSolidHeart className='Icono' onClick={() => EliminarFavorito(producto.Id)} />
        ) : (
          <BiHeart className='Icono' onClick={() => AddFavorito(producto)} />
        )}

                  <CiBookmark className='Icono' />
                  <CiShare2 className='Icono' />

        
                </>
              }
            </center>

          </>
        )}
        {error &&
          navigate('/PantallaError')}

      </div >
      <Navbar />
    </>
  );
};


export default Producto;