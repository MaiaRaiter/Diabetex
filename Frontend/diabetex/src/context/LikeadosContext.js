import React, { createContext, useState, useEffect } from 'react'
import axios from "axios"
export const LikeadosContext = createContext();

const LikeadosProvider = (props) => {

    const [likeados, setLikeados] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        CargarLikeados()
    }, []);

    const CargarLikeados = async () => {
        let url = "http://a-phz2-cidi-020:3000/api/meGustaXUsuario?idUsuario=2";
        try {

            const response = axios.get(url);

            if (response.data) {
                setLikeados(response.data);
                setError(false);
            } else {
                setError(true);
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };


    const AddLikeados = (fav) => {
        setLikeados([...likeados, fav])
        console.log(fav);
        localStorage.setItem("likeados", JSON.stringify([...likeados, fav]))
    }

    const ResetLikeados = () => {
        setLikeados([])
    }

    const EliminarLikeado = (likeadoid) => {
        setLikeados(
            likeados.filter((fav) => fav.id !== likeadoid)
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