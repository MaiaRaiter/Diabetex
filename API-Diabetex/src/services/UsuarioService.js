import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';

export default class UsuarioService{

    getByIdUsuario = async (id) => {

        let returnEntity=null; 

        console.log('Estoy en: UsuarioService.GetById(id)');

        try{
           
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('SELECT * FROM Usuario WHERE id=@pId')
    
            returnEntity=result.recordsets[0][0];
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    insert = async (cuerpo) => {
        let returnEntity = null;

        console.log('Estoy en: UsuarioService.insert');

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pNombre',sql.VarChar, cuerpo.Nombre)
                                .input('pApellido',sql.Bit, cuerpo.Apellido)
                                .input('pGmail', sql.Float,cuerpo.Gmail)
                                .input('pContrasena', sql.VarChar,cuerpo.Contrasena)
                                .input('pFecha', sql.DateTime,cuerpo.Fecha)
                                .query("INSERT INTO Usuario (Nombre,Apellido,Gmail,Contrasena,Fecha) VALUES (@pNombre,@pApellido,@pGmail,@pContrasena,@pFecha)");

            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

    update = async (cuerpo) => {
        let returnEntity = null;
         console.log('Estoy en: UsuarioService.update');

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, cuerpo.Id)
                                .input('pNombre',sql.VarChar, cuerpo.Nombre)
                                .input('pApellido',sql.Bit, cuerpo.Apellido)
                                .input('pGmail', sql.Float,cuerpo.Gmail)
                                .input('pContrasena', sql.VarChar,cuerpo.Contrasena)
                                .input('pFecha', sql.DateTime,cuerpo.Fecha)
                                .query("UPDATE Usuario SET Nombre=@pNombre,Apellido=@pApellido,Gmail=@pGmail,Contrasena=@pContrasena, Fecha=@pFecha WHERE Id=@pId");
        returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    deleteById = async (id) => {
            let rowsAffected = 0;

            console.log('Estoy en: UsuarioService.deleteById(id)');

            try {
                let pool = await sql.connect(config)
                let result= await pool.request()
                                  .input('pId', sql.Int , id )
                                  .query('DELETE FROM Usuario WHERE id=@pId');
              rowsAffected=result.rowsAffected;                    
            } catch (error) {
                console.log(error)
            }
        return rowsAffected;
    }

}
