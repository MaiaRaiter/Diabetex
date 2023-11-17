import axios from "axios"
const client= axios.create({
    baseURL:"http://A-PHZ2-CIDI-023:3000/api"
})

client.interceptors.request.use(config=>{
    const token = localStorage.getItem("token")
    config.headers={...config.headers,Authenticate:token}
    return config;
})

export const Login = async (Nombre,Contrasena) => {
    

    try {
        const response = await client.post("/usuario/login", {
          Nombre,Contrasena
        });
  
        if (response.data) {
            localStorage.setItem("token",response.data.Token)
          
          console.log('Inicio de sesión exitoso');
          return response.data;
         
        }
      } catch (error) {
        
        console.error('Error al iniciar sesión:', error);
        const errorMessageElement = document.getElementById("error-message");
        errorMessageElement.innerText = 'Error en el ingreso de usuario o contraseña';

      }
    };


