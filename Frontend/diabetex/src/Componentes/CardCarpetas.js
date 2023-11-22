import React, { useContext } from 'react'
import { Link } from "react-router-dom";


const CardCarpetas = ({ carpeta }) => {

    return (
        <Link to={`/ProductosGuardados/${carpeta.Id}`}  >

        <div className="CardCarpetas" >
            <p className='NombreCarpetas'> {carpeta.Nombre} </p>
        </div>
        </Link>
    );
};

export default CardCarpetas;