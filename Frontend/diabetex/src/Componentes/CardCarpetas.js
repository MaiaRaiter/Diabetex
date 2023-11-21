import React, { useContext } from 'react'
import { Link } from "react-router-dom";

const CardCarpetas = ({ carpeta }) => {

    return (
        <Link to={`http://localhost:3000/api/CarpetaXUsuario/2/${carpeta.Id}`}  >
        <div className="CardCarpetas" >
             
            
            <p className='NombreCarpetas'> {carpeta.Nombre} </p>
           
        </div>
        </Link>
    );
};

export default CardCarpetas;