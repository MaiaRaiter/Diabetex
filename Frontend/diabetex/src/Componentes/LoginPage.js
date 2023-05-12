
import React from "react";
import './Componentes.css';


function LoginPage () {

    return (
    
    <div className = "App-header">
    
    <img src = "/img/logo.jpg" className="App-logo"></img>
    
    <br></br>
    

    
    <form>
    
    <input type = "text" name= "username" className="Formulario"></input>
    <br></br>
    <br></br>
    
    <input type="password" name= "password" className="Formulario"/>
    
    </form>
    
    </div>
    
    );
    
    }
export default LoginPage;



