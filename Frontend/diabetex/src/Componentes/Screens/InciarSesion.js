import React, { useState } from "react";

import { Link } from "react-router-dom";




const IniciarSesion = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('This is submitt')
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    return (
        <div className=" App-header d-flex flex-column justify-content-between vh-100">
            <img src="/img/logo.jpg" className="App-logo" alt=""></img>
            <br></br>



            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    value={username}
                    name="username"
                    className="formulario"
                    placeholder=" email o usuario"
                    onChange={({ target }) => setUsername(target.value)}>

                </input>
                <br></br>
                <br></br>
                <input
                    type="password"
                    value={password}
                    name="password"
                    className="formulario"
                    placeholder=" Constraseña"
                    onChange={({ target }) => setPassword(target.value)}>
                </input>
                <br></br><br></br>
                <center> <Link to={"/Home" }><button type="submit" className="boton">Iniciar Sesion</button></Link></center>
                <br></br><br></br>
                <center> <Link to="/Registrarse"> Registrarse</Link> </center>

            </form>
        </div>
    );
}
export default IniciarSesion;