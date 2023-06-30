import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';

export default class MeGustaXUsuarioService{

    agregarMeGusta = async (cuerpo) => {
        let returnEntity = null;

        console.log('Estoy en: MeGustaXUsuario.insert');

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario',sql.Int, cuerpo.IdUsuario)
                                .input('pIdProducto',sql.Int, cuerpo.IdProducto)
                                .query("INSERT INTO MeGustaXUsuario (IdUsuario, IdProducto) VALUES (@pIdUsuario,@pIdProducto)");

            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

    getTodosProductosMeGusta = async() => {

        let returnEntity = null;

        console.log('Estoy en: MeGustaXUsuario.GetAll');

        try{
            
            let pool= await sql.connect(config);
           
            let result = await pool.request().query("SELECT * FROM MeGustaXUsuario")

            returnEntity = result.recordsets[0];

        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

    getProductosMeGustaByIdUsuario = async (id) => {

        let returnEntity=null; 

        console.log('Estoy en: MeGustaXUsuario.GetById(id)');

        try{
           
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario', sql.Int, id)
                                .query('SELECT * FROM MeGustaXUsuario WHERE IdUsuario=@pIdUsuario')
    
            returnEntity=result.recordsets[0];
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    deleteProductoXUsuarioByIdProducto = async (idUsuario, idProducto) => {
        let rowsAffected = 0;

        console.log('Estoy en: MeGustaXUsuario.deleteById(id)');

        try {
            let pool = await sql.connect(config)
            let result= await pool.request()
                              .input('pIdUsuario', sql.Int , idUsuario )
                              .input('pIdProducto', sql.Int , idProducto )
                              .query('DELETE FROM MeGustaXUsuario WHERE IdUsuario=@pIdUsuario AND IdProducto=@pIdProducto')
          rowsAffected=result.rowsAffected;                    
        } catch (error) {
            console.log(error)
        }
    return rowsAffected;
}
    
    /*
    //ME GUSTA POR PRODUCTO
    Select * from usuario
    Select * from producto
    SELECT * FROM MeGustaXUsuario
    --INSERT INTO MeGustaXUsuario (IdUsuario, IdProducto) Values (2, 15)
    SELECT count(*) FROM MeGustaXUsuario  WHERE Idproducto= 15
    */

}
