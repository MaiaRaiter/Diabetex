import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';

export default class CarpetaXUsuarioService{

    getCarpetasByIdUsuario = async (id) => {

        let returnEntity=null; 

        console.log('Estoy en: CarpetaXUsuario.GetById(id)');

        try{
           
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario', sql.Int, id)
                                .query(`SELECT Carpeta.Nombre, Carpeta.IdUsuario, Carpeta.Id FROM Carpeta
                                WHERE Carpeta.IdUsuario =  @pIdUsuario`)
            returnEntity=result.recordsets[0];
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    getProductosDeCarpetasByIdUsuario = async (idUsuario, idCarpeta) => {

        let returnEntity=null; 

        console.log('Estoy en: CarpetaXUsuario.GetById(id)');

        try{
           
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario', sql.Int, idUsuario)
                                .input('pIdCarpeta', sql.Int, idCarpeta)
                                .query(`SELECT * FROM Producto 
                                INNER JOIN CarpetaXUsuario ON Producto.Id = CarpetaXUsuario.IdProducto                         
                                WHERE  IdCarpeta=@pIdCarpeta`)
    
            returnEntity=result.recordsets[0];
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    deleteCarpertaXUsuarioByIdProducto = async (idUsuario, idCarpeta) => {
        let rowsAffected = 0;

        console.log('Estoy en: CarpetaXUsuario.deleteById(id)');

        try {
            let pool = await sql.connect(config)
            let result= await pool.request()
                              .input('pIdUsuario', sql.Int , idUsuario )
                              .input('pIdCarpeta', sql.Int , idCarpeta )
                              .query('DELETE FROM CarpetaXUsuario WHERE IdUsuario=@pIdUsuario AND IdCarpeta=@pIdCarpeta')
          rowsAffected=result.rowsAffected;                    
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }

    deleteProductoDeCarpetaByIdUsuario = async (idUsuario, idCarpeta, idProducto) => {
        let rowsAffected = 0;

        console.log('Estoy en: CarpetaXUsuario.deleteById(id)');

        try {
            let pool = await sql.connect(config)
            let result= await pool.request()
                              .input('pIdUsuario', sql.Int , idUsuario )
                              .input('pIdCarpeta', sql.Int , idCarpeta )
                              .input('pIdProducto', sql.Int , idProducto )
                              .query('DELETE FROM CarpetaXUsuario WHERE IdUsuario=@pIdUsuario AND IdCarpeta=@pIdCarpeta AND IdProducto=@pIdProducto')
          rowsAffected=result.rowsAffected;                    
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }

    agregarProductoACarpetaXUsuario = async (cuerpo) => {
        let returnEntity = null;

        console.log('Estoy en: CarpetaXUsuario.insert');

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario',sql.Int, cuerpo.IdUsuario)
                                .input('pIdProducto',sql.Int, cuerpo.IdProducto)
                                .input('pIdCarpeta',sql.Int, cuerpo.IdCarpeta)
                                .query("INSERT INTO CarpetaXUsuario (IdProducto, IdCarpeta, IdUsuario) VALUES (@pIdProducto,@pIdCarpeta,@pIdUsuario)");

            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

    agregarCarpetaXUsuario = async (idUsuario, idCarpetaNueva) => {
        let returnEntity = null;

        console.log('Estoy en: CarpetaXUsuario.insert', idUsuario, idCarpetaNueva);

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario',sql.Int, idUsuario)
                                .input('pIdCarpeta',sql.Int, idCarpetaNueva)                           
                                .query("INSERT INTO CarpetaXUsuario (IdUsuario, IdCarpeta) VALUES (@pIdUsuario,@pIdCarpeta)");

            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

}
