
import React from "react";
import './Componentes.css';
import Home from './Home'


function LoginPage () {

    return (
    
    <div className = "App-header">
    
    <img src = "/img/logo.jpg" className="App-logo"></img>
    
    <br></br>
    

    
    <form>
    
    <input type = "text" name= "username" className="Formulario" placeholder =" email o usuario" ></input>
   
    <br></br>
    <br></br>
    
    <input type="password" name= "password" className="Formulario" placeholder=" contraseña"/>
    
    </form>
    <br></br>
    <button  onClick={Home} type="button" className="Boton" >Iniciar Sesion</button>
    
    </div>
    
    );
    
    }
export default LoginPage;



