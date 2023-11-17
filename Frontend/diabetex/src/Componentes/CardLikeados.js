import React, { useContext } from 'react'
import { BiHeart } from 'react-icons/bi'
import { FavoritosContext } from '../Context/FavoritosContext';
import { BiSolidHeart } from 'react-icons/bi'

const CardLikeados = ({ producto }) => {

    const { EliminarFavorito } = useContext(FavoritosContext);
    console.log(producto)

    return (

        <div className="CardFavs">
            <img className="FotoCard" src={producto.Foto} />
            <BiSolidHeart className='Likeado' onClick={() => EliminarFavorito(producto.id)} />

        </div>



    );
};

export default CardLikeados;