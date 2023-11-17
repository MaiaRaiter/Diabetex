import React, { createContext, useState, useEffect } from 'react'

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
    const inicial = localStorage.getItem("favoritos") != null ? JSON.parse(localStorage.getItem("favoritos")) : [];
    const [favoritos, setFavoritos] = useState(inicial);
    const [cantidadFavoritos, setCantidadFavoritos] = useState(0);    

    const AddFavorito = (fav) => {
      if (!favoritos.some((item) => item.id === fav.id)) {
        setFavoritos([...favoritos, fav]);        
      } else {
        console.log("Item already in favorites");
      }
    }
    
    useEffect(()=>{
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      setCantidadFavoritos(favoritos.length);
    },[favoritos])
    
    const ResetFavoritos = () => {
      setFavoritos([])
    }

    const EliminarFavorito = (favoritoid) => {
      setFavoritos(
        favoritos.filter((fav) => fav.id !== favoritoid)
      ); 
    };

    const isFavorite = (id)=>{            
      let filtro = favoritos.filter(x=>x.id===id);      
      return filtro.length >0;
    }
    const MostrarFavoritos = (favoritos)=>{            
       return favoritos;
      }
    
  return (
    <FavoritosContext.Provider
    value={{
      favoritos,
      cantidadFavoritos,
      AddFavorito,
      ResetFavoritos,
      EliminarFavorito,
      isFavorite,
      MostrarFavoritos,
    }}
  >
    {props.children}
  </FavoritosContext.Provider>
  )
}

export default FavoritosProvider;