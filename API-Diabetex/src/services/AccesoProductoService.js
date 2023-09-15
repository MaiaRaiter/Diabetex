import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';


export default class AccesoProducto{

    accesoNuevo = async (idUsuario, codigoBarra, foto, cantMeGusta, nombre, favorito) => {
        let returnEntity = null;
        const fechaAcceso = new Date().toISOString();
        console.log('Estoy en: AccesoProducto.accesoNuevo:', idUsuario, codigoBarra, foto, cantMeGusta, nombre, favorito);

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario',sql.Int, idUsuario)
                                .input('pFechaAcceso',sql.DateTime, fechaAcceso)
                                .input('pFavorito',sql.Bit, favorito)
                                .input('pCodigoBarra',sql.VarChar, codigoBarra)
                                .input('pFoto',sql.VarChar, foto)
                                .input('pCantMeGusta',sql.Int, cantMeGusta)
                                .input('pNombre',sql.VarChar, nombre)
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

        console.log('Estoy en: AccesoProductoService.get5ProductosMasRecientes con Idusuario:', id);
        try{
        
            let pool= await sql.connect(config);
            
            let result = await pool.request()
                                .input('pIdUsuario', sql.Int, id)
                                .query(`SELECT TOP 5 *
                                 FROM AccesoProducto WHERE IdUsuario=@pIdUsuario ORDER BY FechaAcceso DESC `)
            returnEntity=result.recordsets[0];
    } 
    catch(error) {
        console.log(error);
    }
    return returnEntity;
    }


}