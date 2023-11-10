import React from 'react'
import { useNavigate } from "react-router-dom";

export const PantallaError = () => {
  const navigate = useNavigate();
  return (
<>
       <h1>Upss..</h1> <br></br>
        <h1>Algo salió mal</h1>
         <div className='Error'>
        <p>No se ha encontrado el producto </p>
        <p>¿Desea agregar el producto? </p>


        <center> <button type="submit" className="boton"onClick={navigate("/CargarProducto")}>+ Agregar Producto </button> </center>
    </div> 
    </>
  )
}
