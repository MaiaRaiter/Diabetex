import React, { useState } from 'react';
import axios from 'axios';

export const Perfil = () => {
        const [usuario, setPUsuario] = useState(null);
        const [error, setError] = useState(false);
      
        const CargarPerfil = async () => {
        const IdUsuario=1;
          let url = "http://a-phz2-cidi-023:3000/api/usuario/"+IdUsuario;
      
          try {
            const response = await axios.get(url);
            if (response.data) {
            setPUsuario(response.data);
              setError(false);
            } else {
              setError(true);
            }
          } catch (error) {
            console.log(error);
            setError(true);
          }
        };
  return (
   <>
   
    <button type="button" className="btn btn-success boton" onClick={CargarPerfil}>Buscar Perfil</button>
        <p>{usuario.Nombre} </p>
    </>
    
  );

};
export default Perfil;

