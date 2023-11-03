import UsuarioService from "../services/UsuarioService";

const UsuarioS = new UsuarioService();

const Authenticate  = async (req, res, next) => {

 const token = req.headers.Authenticate

 const tokenBD = UsuarioS.getByToken(token)

  if (token != tokenBD) {

   return error;
    
  } else if (tokenBD.TokenExpiratioDate > new Date()) {
    next();
  }

}

export default Authenticate;