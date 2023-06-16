import React from "react";
import {axios} from axios

    function CargarProductos() {
     
        axios
          .get("http://10.152.2.141:3000/api/producto/3")
          .then((result) => {
            console.log(result.data.results[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      const producto = result.data.results;
      var index= 0;
      return(
  
      producto.map((producto, index) => {
        const { Nombre, Ingredientes,} = producto;
        document.querySelector("#listado").innerHTML += `
        <div class="col-4 pt-5">
        <div class="card" style="width:18rem;">
        <img class="imagen" src="" alt="Card image cap">
        <div class="card-body">
        <div class="alert alert-success" role="alert">
        <center><h5 class="card-title nombre">${Nombre}</h5></center>
        <p class="card-text">${Ingredientes}</p>
        .0                 
        <center><button onclick="Info('')" class="btn btn-success">Mas Informacion</button></center>
        </div>
        </div>
        </div>
        </div>
       `

     })
     );

export default CargarProductos ;
