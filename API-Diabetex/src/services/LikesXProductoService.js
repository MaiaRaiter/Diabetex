import config from '../../dbconfig.js';
import sql from 'mssql';

export default class LikesXProductoService{
    
    /*
    getProductosMeGustaByCodigoBarraProducto = async (codigoBarra) => {

        let returnEntity=null; 

        console.log('Estoy en: MeGustaXUsuario.getProductosMeGustaByCodigoBarraProducto(codigoBarra)');

        try{
        
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pCodigoBarra', sql.VarChar, codigoBarra)
                                .query('SELECT count(*) FROM MeGustaXUsuario WHERE CodigoBarra=@pCodigoBarra')

            returnEntity=result.recordsets[0];

            for (let i = 0; i < returnEntity.length; i++) {

                const cantMeGusta = returnEntity[i];

                returnEntity[i].cantMG = await this.insert(cantMeGusta);

                console.log(returnEntity[i].cantMG);
            }
        } 
        catch(error) {
            console.log(error);
        }
    return returnEntity;
    }
    */


    meGusta = async (idUsuario,idProducto) => {
        let returnEntity=null;

        console.log('Estoy en: LikesXProductoService:megusta.update', idProducto);
        console.log('Estoy en: megusta.update');
        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                    .input('idUsuario', sql.Int, idUsuario)
                                    .input('idProducto', sql.Int, idProducto)
                                    .query(`
                                        If EXISTS(
                                            SELECT * FROM MeGustaXUsuario 
                                            WHERE idUsuario = @idUsuario
                                            AND   idProducto = @idProducto) 
                                            BEGIN
                                                DELETE FROM MeGustaXUsuario
                                                WHERE idUsuario = @idUsuario
                                                AND   idProducto = @idProducto
                                            END
                                        ELSE
                                            BEGIN
                                                INSERT INTO MeGustaXUsuario 
                                                    (idUsuario, idProducto)
                                                VALUES 
                                                    (@idUsuario,@idProducto)
                                            END
                                    `);
                returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }


    get5ProductosMasLikeados = async () => {

        let returnEntity=null;

        console.log('Estoy en: LikesProductoService.get5ProductosMasLikeados',);
        try{
        
            let pool= await sql.connect(config);
            
            let result = await pool.request()
                                .query(`SELECT TOP 5 
                                [Id],
                                [Nombre],
                                [Ingredientes],
                                [Cantidad],
                                --[CantMeGusta],
                                CantMeGusta = (SELECT Count(*) FROM MeGustaXUsuario Where IdProducto = Producto.Id),
                                [Marca],
                                [EspeciesAmenazadas],
                                [LugarFabricacion],
                                [HCAgricultura],
                                [HCProcesado],
                                [HCEmbalaje],
                                [HCTransporte],
                                [HCDistribución],
                                [HCConsumo],
                                [HCTotal],
                                [NAlcohol100g],
                                [NCarbohidratos100g],
                                [NEnergia100g],
                                [NGrasa100g],
                                [NFibra100g],
                                [NProteinas100g],
                                [NSal100g],
                                [NGrasasSaturadas100g],
                                [NSodio100g],
                                [NAzucar100g],
                                [Foto],
                                [CodigoBarra] 
                            FROM Producto ORDER BY CantMeGusta DESC `)
            returnEntity=result.recordsets[0];
    } 
    catch(error) {
        console.log(error);
    }
    return returnEntity;
    }
}