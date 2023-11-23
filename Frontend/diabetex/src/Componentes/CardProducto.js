import React, { useContext } from 'react'
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {

    return (
        <Link to={`/Producto/${producto.Barra}`}  >

        <div className="CardCarpetas" >
            <p className='NombreCarpetas'> {producto.Nombre} </p>
            <img className="FotoCardProd" src={producto.Foto} />
        </div>
        </Link>
    );
};

export default CardProducto;