import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function InicioSesion() {
    const [mailState, setMail] = useState('');
    const [passwordState, setPassword] = useState('');
    const navigate = useNavigate();

    async function ingresarCuenta(event) {
        event.preventDefault();

        try {
            const response = await
fetch("http://A-PHZ2-CIDI-0023:5000/api/usuario/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    mail: mailState,
                    password: passwordState
                })
            });

            if (response.ok) {
                navigate('/Home');
            } else {
                alert("Credenciales incorrectas");
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }

        fetch('http://A-PHZ2-CIDI-0023:5000/api/login')
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then(data => {

  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
    }

    return (
     
        <div className=" App-header d-flex flex-column justify-content-between vh-100">
        <img src="/img/logo.jpg" className="App-logo" alt=""></img>
        <br></br>

        <form onSubmit={ingresarCuenta}>
            <input type="text" name="mail" placeholder=" email o usuario"
className="formulario" onChange={(e) => setMail(e.target.value)} />
           <br></br><br></br>
            <input type="password" name="password"
        placeholder="Contraseña" className="formulario" onChange={(e) =>
            setPassword(e.target.value)} />
             <br></br><br></br>
          <center> <button type="submit" className="boton">Iniciar Sesion</button> </center>
        </form>
        </div>
    );
}
