import React from "react";
import {axios} from axios

    function CargarProductos() {
        axios
          .get("http://10.152.2.141:3000/api/producto/")
          .then((result) => {
            console.log(result.data.results[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      const producto = result.data.results;
      var index= 0;

export default CargarProductos ;
