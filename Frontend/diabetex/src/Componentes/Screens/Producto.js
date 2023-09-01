import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css'
import { PantallaError } from './PantallaError';

const Producto = () => {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState("Nutrientes");
  const [formData, setFormData] = useState({ CodigoDeBarra: '' });

  const CargarProductoxCodigo = async (e) => {
    e.preventDefault();
    console.log(formData);
    const CodigoB = formData.CodigoDeBarra; // Corrected the way to access the barcode value
    let url = "http://a-phz2-cidi-021:3000/api/producto/" + CodigoB + "?idUsuario=2";

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
      <center>
        <form onSubmit={(e) => CargarProductoxCodigo(e)}>
          <input
          type="number"
          name="CodigoDeBarra"
          className="formulario"
          placeholder="Ingrese codigo de barra del producto"
          value={formData.CodigoDeBarra}
          onChange={(e) => setFormData({ ...formData, CodigoDeBarra: e.target.value })}
        />
        <button type="button" className="btn btn-success boton" onClick={CargarProductoxCodigo}>
            Buscar
          </button>
     
        </form>
      </center>
      <div id="listado" className="row">

        {producto && (
          <>
              <h1 className='NombreProducto d-flex flex-column justify-content-between '>{producto.Nombre}</h1>  
            <center> <img src={producto.Foto} className="FotoProducto" alt=""></img></center>
            {producto.Foto==null }
            <img src="/img/ImegenError.jpg" className="logoHome" alt=""></img>

            <div className='Contenedor'>
              <center> <p className='TextOverlay'>Este producto contiene 157,3 g de Carbohidratos finales </p></center>
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
              <center>  <table class="table table-bordered Tabla">
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
            {mostrar == "Resumen" &&

              <center>  <table class="table table-bordered Tabla">
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


            }
            </center>


          </>
        )}

        {error && <h1>NO SE ENCONTRO</h1>}
      </div>
    </>
  );
};

export default Producto;