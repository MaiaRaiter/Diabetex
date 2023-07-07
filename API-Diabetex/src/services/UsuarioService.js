import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';
import crypto from 'crypto';

export default class UsuarioService{

    login = async (usuario) =>{
        let returnEntity = null;
        let token;
    
        returnEntity = await this.getByUserNamePassword(usuario.Nombre,usuario.Contrasena);

            console.log(returnEntity);

            if (returnEntity != null) {
    
                token = await this.refreshTokenById(returnEntity.Id);
    
                if (token != null){
    
                    returnEntity = await this.getByUserNamePassword(usuario.Nombre,usuario.Contrasena);
                    
                }
            }

    
            return returnEntity;
        }

        getByUserNamePassword= async(nombre, contrasena) =>
        {
            let returnEntity=null;
    
            try
            {
                let pool= await sql.connect(config);
                let result = await pool.request()
                            .input ('pNombre', sql.VarChar, nombre)
                            .input ('pContrasena', sql.VarChar, contrasena)
                            .query (`SELECT * FROM Usuario WHERE Nombre=@pNombre`)
    
                            returnEntity=result.recordset[0];
            }
            catch(error){

                logHelper.logError(`Usuario -> getByUserNamePassword`,error)
    
            }
            return returnEntity;
        }
    
        getByToken = async (token) => {
    
            let returnEntity = null;
    
            try{
                let pool= await sql.connect(config);
                let result = await pool.request()
                .input ('pToken', sql.VarChar, token)
                .query (`SELECT * FROM Usuario WHERE Token=@pToken `)
    
                returnEntity = result.recordsets[0][0];
    
            }
            catch (error){
                logHelper.logError(`Usuario -> getByToken`,error);
            }
            return returnEntity;
        }

    
    addMinutos = (minutos, date) => {
        date = date || new Date();

        if (typeof minutos !== 'numero') {
            console.log('Los "minutos" han expirado')
        }

        if (!(date instanceof Date)) {
            console.log('El tiempo de entrada ha expirado')
        }

        date.setMinutes(date.getMinutes() + minutos)

        return date;

    }

    refreshTokenById= async(id) => {
        let rowsAffected=0;
        let token = crypto.randomUUID();
        let expirationDate = this.addMinutos(15,new Date ());

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                            .input ('pToken', sql.VarChar, token)
                                            .input ('pId', sql.Int, id)
                                            .input ('pTokenExpirationDate', sql.VarChar, expirationDate.toISOString())
                                            .query (`UPDATE Usuario SET
                                                    Token = @pToken,
                                                    TokenExpirationDate = @pTokenExpirationDate
                                                    WHERE Id = @pId`);

            rowsAffected = result.rowsAffected;
            console.log(rowsAffected);
        }
        catch (error) {
            console.log(error);
            logHelper.logError(`Usuario->updateTokenById`, error);
        }
        return rowsAffected;
    }

    //------------------------------------------------------------------------------------------------------------------------------

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
