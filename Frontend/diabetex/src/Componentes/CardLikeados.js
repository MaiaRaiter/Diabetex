import React, {useContext} from 'react'
import { BiHeart } from 'react-icons/bi'
import { FavoritosContext } from '../Context/FavoritosContext';

const CardLikeados = ({producto}) => {

  const { EliminarLikeado } = useContext(FavoritosContext);

  return (
   
        <div className="card-body p-0">
            <div className="d-flex align-items-center">
                <div className="p-5">
                <h2 className="fw-bolder"> {producto.titulo}</h2>
                </div>
                <BiHeart className='icon-heart' onClick={() => EliminarLikeado(producto.id)}/>
                <img className="img-fluid" src={producto.imagenes} />
                
            </div>
        </div>
   
  );
};

export default CardLikeados;