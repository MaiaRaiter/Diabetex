import React, { useContext } from 'react'
import { Link } from "react-router-dom";


const CardCarpetas = ({ carpeta,index }) => {

    return (
        <Link to={`/ProductosGuardados/${carpeta.Id}`+ "?idUsuario=2"}  >

        <div key={index} className="CardCarpetas" >
            <p className='NombreCarpetas'> {carpeta.Nombre} </p>
        </div>
        </Link>
    );
};

export default CardCarpetas;