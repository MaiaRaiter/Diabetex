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
                                .input('pCodigoBarra',sql.VarChar, cuerpo.CodigoBarra)
                                .query("INSERT INTO MeGustaXUsuario (IdUsuario, CodigoBarra) VALUES (@pIdUsuario,@pCodigoBarra)");

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

    deleteProductoXUsuarioByIdProducto = async (idUsuario, codigoBarra) => {
        let rowsAffected = 0;

        console.log('Estoy en: MeGustaXUsuario.deleteById(id)');

        try {
            let pool = await sql.connect(config)
            let result= await pool.request()
                              .input('pIdUsuario', sql.Int , idUsuario )
                              .input('pCodigoBarra', sql.VarChar , codigoBarra )
                              .query('DELETE FROM MeGustaXUsuario WHERE IdUsuario=@pIdUsuario AND CodigoBarra=@pCodigoBarra')
          rowsAffected=result.rowsAffected;                    
        } catch (error) {
            console.log(error)
        }
    return rowsAffected;
}

}
