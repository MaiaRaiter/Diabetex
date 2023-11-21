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
        <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="CardFavs">
        <img className="FotoCard" src={producto.Foto} />
  
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
      
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