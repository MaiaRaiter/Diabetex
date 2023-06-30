import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css'

const Producto = () => {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(false);

  const CargarProductoxCodigo = async () => {
    const CodigoB = "3017620429484";
    let url = "http://a-phz2-cidi-021:3000/api/producto/" + CodigoB;

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

  return (
    <>
      <center>
        <button type="button" className="btn btn-success boton" onClick={CargarProductoxCodigo}>
          Buscar por Codigo de Barra
        </button>
      </center>
      <div id="listado" className="row">

        {producto && (
          <>
        <center>  <h1 className='NombreProducto'>{producto.Nombre}</h1>  </center> 
       <center> <img src={producto.Foto} className="FotoProducto" alt=""></img></center>
      
        </>
        )}
        {error && <h1>NO SE ENCONTRO</h1>}
      </div>
    </>
  );
};

export default Producto;





























/*function getById(){
 
  //let url =(BASE_URL_PIZZAS + id);
  console.log('getById: ');
  axios
    .get("http://a-phz2-cidi-021:3000/api/producto/3175680011480")
    .then((result) => {
      displayUnProducto(result.data, false);
    })
    .catch(error => {
      displayUnProducto({}, true);
    });
    function displayUnProducto(unProducto, huboError){
      let estilo = 'table-dark';
      if (huboError){
        estilo = 'table-danger';
      }
      let table = '<table className="table table-striped table-hover">';
      table += `<thead class="${estilo}"><tr><th class="col-1 text-center">Id</th><th class="col-3">Nombre</th><th class="col-5">Descripcion</th><th class="col-2 text-center">Importe</th><th class="col-1 text-center">Libre Gluten</th></tr></thead>`;
        table += `<tr>`;
        table += `<td scope="col" className="text-center">${unProducto.Id}</td>`;
        table += `<td scope="col">${unProducto.Nombre}</td>`;
        table += `<td scope="col">${unProducto.Ingredientes}</td>`;
        table += `<td scope="col" className="text-center">${unProducto.Marca}</td>`;
        table += `<td scope="col" className="text-center">${unProducto.LibreGluten}</td>`;
        table += `</tr>`;
        table += "</table>";
      document.getElementById("listado").innerHTML = table;
    }
}
*/

