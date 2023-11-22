import React, { useContext } from 'react'
import { Link } from "react-router-dom";

//<img className="FotoCard" src={producto.Foto} />

const CardProducto = ({ producto }) => {

    return (
        <Link to={`/Producto`}  >

        <div className="CardCarpetas" >
            <p className='NombreCarpetas'> {producto.Nombre} </p>
           
        </div>
        </Link>
    );
};

export default CardProducto;