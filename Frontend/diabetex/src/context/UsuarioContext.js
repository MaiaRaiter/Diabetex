import React, { createContext, useState, useEffect } from "react";
export const UsuarioContext = createContext();

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
      /*if (localStorage.getItem("usuario") != null) {
        let storage = localStorage.getItem("usuario")
        //obtengo los datos JSON del localstorage y los guardo en un array
        setUsuario(JSON.parse(storage))
        }
        */

        const [products, setProducts] = useState([]);
 

  

    axios
      .get("http://a-phz2-cidi-020:3000/api/usuario/"+ "?idUsuario=1")
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
    },[usuarios])

    return (
        <UsuarioContext.Provider
          value={{
            usuario
          }}
        >
          {props.children}
        </UsuarioContext.Provider>
      );    
}
export default UsuarioProvider;