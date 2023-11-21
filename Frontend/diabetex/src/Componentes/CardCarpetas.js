import React, { useContext } from 'react'

const CardCarpetas = ({ productos }) => {

    return (

        <div className="CardCarpetas">
           
            <p className='NombreCarpetas'> {productos.Nombre} </p>
        </div>
    );
};

export default CardCarpetas;