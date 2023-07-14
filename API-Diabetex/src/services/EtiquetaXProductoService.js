import config from '../../dbconfig.js';
import sql from 'mssql';

export default class EtiquetaXProductoService{

    getByIdProducto = async (idProducto) => {
        let returnEntity=null;

        console.log('Estoy en: EtiquetaXProductoService.GetById(id)');

        try{
            
            let pool= await sql.connect(config);
            
            let result = await pool.request()
                                .input('pIdProducto', sql.Int, idProducto)
                                .query(`SELECT 
                                        Etiquetas.*
                                        FROM IngredientesXPizzas 
                                        INNER JOIN Etiquetas ON IngredientesXPizzas.IdEtiqueta = Etiquetas.Id
                                        Where IdProducto = @pIdProducto`);
            
            returnEntity=result.recordset;
        } 
        catch(error) {

            console.log(error);
        }

       return returnEntity;
    }
    /*

    insertIngredienteXPizza = async (cuerpo) => {
        let returnEntity=null;
        console.log('Estoy en: IngredientesXPizzaService.insertIngredienteXPizza');
        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdPizza',sql.Int, cuerpo.IdPizza)
                                .input('pIdIngrediente',sql.Int, cuerpo.IdIngrediente)
                                .input('pCantidad',sql.Int, cuerpo.Cantidad)
                                .input('pIdUnidad',sql.Int, cuerpo.IdUnidad)
                                .query("INSERT INTO IngredientesXPizzas(IdPizza,IdIngrediente,Cantidad,IdUnidad) VALUES (@pIdPizza,@pIdIngrediente,@pCantidad,@pIdUnidad)");
            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }
*/
}