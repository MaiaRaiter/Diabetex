import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';

export default class Carpeta{

    getById = async (id) => {

        let returnEntity=null; 

        console.log('Estoy en: Carpeta.GetById(id)');

        try{
           
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query('SELECT * FROM Carpeta WHERE id=@pId')
    
            returnEntity=result.recordsets[0][0];
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    getByNombre = async (nombre) => {

        let returnEntity=null; 

        console.log('Estoy en: Carpeta.getByNombre(id)');

        try{
           
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pNombre', sql.VarChar, nombre)
                                .query('SELECT * FROM Carpeta WHERE nombre=@pNombre')
    
            returnEntity=result.recordsets[0][0];
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    agregarCarpeta = async (nombre) => {
        let returnEntity = null;

        console.log('Estoy en: CarpetaService.agregarCarpeta:', nombre);

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pNombre',sql.VarChar, nombre)
                                .query("INSERT INTO Carpeta (Nombre) VALUES (@pNombre)");

            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

    getMaxId = async (nombre) => {

        let returnEntity=null; 

        console.log('Estoy en: Carpeta.getMaxId');

        try{
           
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .query('SELECT Max(Id) AS Ultimo FROM Carpeta')
    
            returnEntity=result.recordsets[0][0]['Ultimo'];
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    update = async (cuerpo) => {
        
         let returnEntity = null;
         console.log('Estoy en: Carpeta.update');

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, cuerpo.Id)
                                .input('pNombre',sql.VarChar, cuerpo.Nombre)
                                .query("UPDATE Carpeta SET Nombre=@pNombre WHERE Id=@pId");
        returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    deleteById = async (id) => {
            let rowsAffected = 0;

            console.log('Estoy en: Carpeta.deleteById(id)');

            try {
                let pool = await sql.connect(config)
                let result= await pool.request()
                                  .input('pId', sql.Int , id )
                                  .query('DELETE FROM Carpeta WHERE id=@pId');
              rowsAffected=result.rowsAffected;                    
            } catch (error) {
                console.log(error)
            }
        return rowsAffected;
    }

}
