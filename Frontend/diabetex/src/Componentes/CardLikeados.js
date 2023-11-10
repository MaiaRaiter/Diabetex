import React, {useContext} from 'react'
import { LikeadosContext } from '../context/LikeadosContext'
import { BiHeart } from 'react-icons/bi'

const CardLikeados = ({producto}) => {

  const { EliminarLikeado } = useContext(LikeadosContext);

  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div className="card-body p-0">
            <div className="d-flex align-items-center">
                <div className="p-5">
                
                    <h2 className="fw-bolder"> {producto.titulo}</h2>
                    <p>{producto.descripcion}</p>
                    <p>{producto.fecha}</p>
                </div>
                <BiHeart className='icon-heart' onClick={() => EliminarLikeado(producto.id)}/>
                <img className="img-fluid" src={producto.imagenes} />
                
            </div>
        </div>
    </div>
  );
};

export default CardLikeados;