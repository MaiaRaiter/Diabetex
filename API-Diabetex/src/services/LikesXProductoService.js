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

    //hacer un update que sume 1

    update = async () => {
        let returnEntity=null;

        console.log('Estoy en: megusta.update');

        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                    .input('pId',sql.VarChar, cuerpo.Id)
                                .query("UPDATE Producto SET CantMeGusta = (isnull(CantMeGusta, 0) + 1) WHERE CodigoBarra=@pCodigoBarra");
                returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
       return returnEntity;
    }

    get5ProductosMasLikeados = async () => {

        let returnEntity=null;

        console.log('Estoy en: LikesProductoService.get5ProductosMasLikeados con Idusuario:',);
        try{
        
            let pool= await sql.connect(config);
            
            let result = await pool.request()
                                .query('SELECT TOP 5 * FROM Producto ORDER BY CantMeGusta DESC ')
            returnEntity=result.recordsets[0];
    } 
    catch(error) {
        console.log(error);
    }
    return returnEntity;
    }
}