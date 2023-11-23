import React, { useContext } from 'react'
import { Link } from "react-router-dom";


const CardCarpetas = ({ carpeta, index }) => {
    console.log("CarpetaId" + carpeta.Id)
    return (
        <Link to={`/ProductosGuardados/${carpeta.Id}`}  >

        <div key={index} className="CardCarpetas" >
            <p className='NombreCarpetas'> {carpeta.Nombre} </p>
        </div>
        </Link>
    );
};

export default CardCarpetas;