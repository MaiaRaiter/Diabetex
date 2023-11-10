import React, { createContext, useState, useEffect } from 'react'
import axios from "axios"
export const LikeadosContext = createContext();

const LikeadosProvider = (props) => {

    const [likeados, setLikeados] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const CargarLikeados = async () => {
            try {
                const response = await axios.get("http://a-phz2-cidi-020:3000/api/meGustaXUsuario?idUsuario=1");
                console.log("MxU: ",response.data)
                //const listaProductos = response.data;
                setLikeados(response.data); 
            } catch (error) {
            console.log('Error:', error);
            }
        };
        CargarLikeados()
    }, []);


        //let url = "http://a-phz2-cidi-020:3000/api/meGustaXUsuario?idUsuario=2";



    const AddLikeados = (fav) => {
        setLikeados([...likeados, fav])
        console.log(likeados);
        localStorage.setItem("likeados", JSON.stringify([...likeados, fav]))
    }

    const ResetLikeados = () => {
        setLikeados([])
    }

    const EliminarLikeado = (likeados) => {
        setLikeados(
            likeados.filter((fav) => fav.id !== likeados.id)
        );
    };

    return (
        <LikeadosContext.Provider
            value={{
                likeados,
                AddLikeados,
                ResetLikeados,
                EliminarLikeado
            }}
        >
            {props.children}
        </LikeadosContext.Provider>
    )
}

export default LikeadosProvider;