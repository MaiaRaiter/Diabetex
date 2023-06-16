import React from "react";
import {axios} from axios

function getById(){
    let id = document.getElementById('txtId').value;
    //let url =(BASE_URL_PIZZAS + id);
    console.log('getById: ', id);
    axios
      .get("http://localhost:3000/api/pizzas/" + id)
      .then((result) => {
        
        //console.log(response.data);
        //console.log(response.status);
        //console.log(response.statusText);
        //console.log(response.headers);
        //console.log(response.config);
        displayUnaPizza(result.data, false);
      })
      .catch(error => {
        displayUnaPizza({}, true);
      });
  }
       `

export default CargarProductos ;