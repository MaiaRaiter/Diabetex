import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';


export default class AccesoProducto{

    accesoNuevo = async (cuerpo) => {
        let returnEntity = null;
        const fechaAcceso = new Date().toISOString();
        console.log('Estoy en: AccesoProducto.accesoNuevo:', cuerpo);

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario',sql.Int, cuerpo.IdUsuario)
                                .input('pFechaAcceso',sql.DateTime, fechaAcceso)
                                .input('pFavorito',sql.Bit, cuerpo.Favorito)
                                .input('pCodigoBarra',sql.VarChar, cuerpo.CodigoBarra)
                                .input('pFoto',sql.VarChar, cuerpo.Foto)
                                .input('pCantMeGusta',sql.Int, cuerpo.CantMeGusta)
                                .input('pNombre',sql.VarChar, cuerpo.Nombre)
                                .query("INSERT INTO AccesoProducto (IdUsuario,FechaAcceso,Favorito,CodigoBarra,Foto,CantMeGusta,Nombre) VALUES (@pIdUsuario,@pFechaAcceso,@pFavorito,@pCodigoBarra,@pFoto,@pCantMeGusta,@pNombre)");

            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

    get5ProductosMasRecientes = async (id) => {

        let returnEntity=null;

        console.log('Estoy en: AccesoProducto.get5ProductosMasRecientes con Idusuario:', id);
        try{
        
            let pool= await sql.connect(config);
            
            let result = await pool.request()
                                .input('pIdUsuario', sql.Int, id)
                                .query('SELECT TOP 5  * FROM AccesoProducto WHERE IdUsuario=@pIdUsuario ORDER BY FechaAcceso DESC ')
            returnEntity=result.recordsets[0];
    } 
    catch(error) {
        console.log(error);
    }
    return returnEntity;
    }


}