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
                                .input('pIdProducto',sql.Int, cuerpo.IdProducto)
                                .input('pFechaAcceso',sql.Date,  fechaAcceso)
                                .input('pFavorito',sql.Bit, cuerpo.Favorito)
                                .query("INSERT INTO AccesoProducto (IdUsuario,IdProducto,FechaAcceso,Favorito) VALUES (@pIdUsuario,@pIdProducto,@pFechaAcceso,@pFavorito)");

            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }
}