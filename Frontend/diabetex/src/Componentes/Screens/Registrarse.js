import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";




const Registrarse = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('This is submitt')
    }

    const [username, setUsername] = useState('')
    const [apellido, setApellido] = useState('')
    const [mail, setMail] = useState('')
    const [dia, setDia] = useState('')
    const [password, setPassword] = useState('')



    return (
        <>

            <div className="App-header">
                <img src="/img/logo.jpg" className="logo" alt=""></img>
               <p className="Volver">  <Link to="/" >< BiChevronLeft /> </Link> </p>
              
                <br></br>
                <p className="IngreseDatos">Ingrese sus datos porfavor</p>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        className="formularioRegistarse"
                        placeholder=" Nombre"
                        onChange={({ target }) => setUsername(target.value)}>
                    </input>
                    <input
                        type="text"
                        value={apellido}
                        name="apellido"
                        className="formularioRegistarse"
                        placeholder=" Apellido"
                        onChange={({ target }) => setApellido(target.value)}>
                    </input>
                    <br></br>
                
                   <center> <input
                        type="mail"
                        value={mail}
                        name="username"
                        className="formulario"
                        placeholder=" Mail"
                        onChange={({ target }) => setMail(target.value)}>
                            
                    </input> </center>
              
                    <center>   <input
                        type="password"
                        value={password}
                        name="password"
                        className="formulario"
                        placeholder=" Constraseña"
                        onChange={({ target }) => setPassword(target.value)}>
                      </input>  </center>
                    <p className="FechaNacimiento">Fecha de Nacimiento</p>
                    <center>   <input
                        type="date"
                        value={dia}
                        name="dia"
                        className="formulario"
                        placeholder=" dia"
                        onChange={({ target }) => setDia(target.value)}>
                      </input>  </center>
                    <br></br><br></br>
                    <center><Link to={"/Home" }><button type="submit" className="boton">Crear Cuenta </button> </Link></center>


                </form>
            </div>
        </>
    );
}
export default Registrarse;
