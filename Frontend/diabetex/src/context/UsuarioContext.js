import React, { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

const UsuarioProvider = (props) => {

    const [usuario, setUsuario] = useState([]);
    //const cantidadCarrito = carrito.length

    useEffect(() => {
        
      if (usuario != null) {
        //voy a busacr mi usuario guardado
        //let usuario = 
        setUsuario(usuario)
    }
    },[])
    
    const EliminarSesion = (usuarioid) => {
      setUsuario(
        usuario.filter((usuario) => usuario.id !== usuarioid)
      ); 
    };
    
    return (
        <UsuarioContext.Provider
          value={{
            usuario,
            EliminarSesion
          }}
        >
          {props.children}
        </UsuarioContext.Provider>
      );


    
}
export default UsuarioProvider;