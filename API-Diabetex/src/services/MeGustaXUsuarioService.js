import config from '../../dbconfig.js';
import sql from 'mssql';

export default class MeGustaXUsuarioService{
    
    getProductosMeGustaByIdUsuario = async (id) => {

        let returnEntity=null; 

        console.log('Estoy en: MeGustaXUsuario.GetById(id)');

        try{
           
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pIdUsuario', sql.Int, id)
                                .query(`SELECT Producto.Nombre, Producto.Foto, MeGustaXUsuario.IdUsuario, Producto.Id FROM Producto
                                JOIN MeGustaXUsuario ON Producto.Id = MeGustaXUsuario.IdProducto
                                WHERE MeGustaXUsuario.IdUsuario = @idUsuario `)
    
            returnEntity=result.recordsets[0];
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }
//CHEKEAR EL INSERT DE ME GUSTA EN FOTO Y NOMBRE


//el like solo se pone y se sale de MeGustaXUsuario
    meGusta = async (idUsuario, producto) => {
        let returnEntity=null;

        console.log('Estoy en: meGustaXUsuarioService.update', producto);
        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                    .input('idUsuario', sql.Int, idUsuario)
                                    .input('idProducto', sql.Int, producto.id)
                                    .input('pNombre', sql.Int, producto.Nombre)
                                    .input('pFoto', sql.Int, producto.Foto)
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
                                                    (idUsuario, idProducto, Nombre, Foto)
                                                VALUES 
                                                    (@idUsuario,@idProducto,@pNombre,@pFoto)
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