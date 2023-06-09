import React from "react";


    function CargarDatos() {
        axios
          .get("https://randomuser.me/api/")
          .then((result) => {
            console.log(result.data.results[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      }


export default CargarDatos ;
