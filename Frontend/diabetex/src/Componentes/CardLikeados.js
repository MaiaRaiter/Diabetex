import React, { useContext } from 'react'
import { BiHeart } from 'react-icons/bi'
import { FavoritosContext } from '../Context/FavoritosContext';
import { BiSolidHeart } from 'react-icons/bi'

const CardLikeados = ({ producto }) => {

    const { EliminarFavorito } = useContext(FavoritosContext);
    const { AddFavorito } = useContext(FavoritosContext);
    const {  isFavorite } = useContext(FavoritosContext);    
    const {  favoritos } = useContext(FavoritosContext);  
    console.log(favoritos)

    const handlefav = (id) =>{


    }

    return (

        <div className="CardFavs">
            <img className="FotoCard" src={producto.Foto} />
            
            
            {isFavorite(producto.Id) ? (
                    <BiSolidHeart className='FavPerfil' onClick={() => EliminarFavorito(producto.Id)} />
                  
          ) : (
           
            <BiHeart className='FavPerfil' onClick={() => AddFavorito(producto)} />
           
          )
          

          /*
          favoritos.map((f)=>{
            <BiHeart className='icon-heart' onClick={() => AddFavorito(f.id)} />
            
            

          })
          */
          }

        </div>



    );
};

export default CardLikeados;