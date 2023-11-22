import React, { useContext } from 'react'
import { BiHeart } from 'react-icons/bi'
import { FavoritosContext } from '../Context/FavoritosContext';
import { BiSolidHeart } from 'react-icons/bi'



const CardLikeados = ({ producto }) => {
  const { EliminarFavorito, AddFavorito, isFavorite, favoritos } = useContext(FavoritosContext);

  const handleFav = (id) => {
    // Lógica adicional si es necesario
  };

  return (
    <>
      <div className="CardFavs">
        <center> <img className="FotoCard" src={producto.Foto} /></center>
      </div>
      <div className="col-sm">
        {isFavorite(producto.Id) ? (
          <BiSolidHeart className='FavPerfil' onClick={() => EliminarFavorito(producto.Id)} />
        ) : (
          <BiHeart className='FavPerfil' onClick={() => AddFavorito(producto)} />
        )}
      </div>
    </>
  );
};


export default CardLikeados;