import React from 'react'
import axios from 'axios';


export const Carrusel = () => {

 let url = "http://a-phz2-cidi-021:3000/api/accesoProducto" ;

    try {
      const response =  axios.get(url);
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

  return (
    <div>Carrusel</div>
  )
}
