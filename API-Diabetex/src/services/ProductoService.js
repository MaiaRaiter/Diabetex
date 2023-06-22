import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';

//const URL_PRODUCT = "http://world.openfoodfacts.org/api/v0/product/";
//const URL_FIELDS = "?fields=product_name_es,quantity,brands,manufacturing_places,ingredients_text,ingredients_analysis_tags,nutrient_levels_tags,nutriments,ecoscore_data";
export default class ProductoService{

    getProduct = async(codebar) => {
        let Productodata;
        let url = `http://world.openfoodfacts.org/api/v0/product/${codebar}?fields=product_name_es,quantity,brands,manufacturing_places,ingredients_text,ingredients_analysis_tags,nutrient_levels_tags,nutriments,ecoscore_data.json`;
        console.log(url);
        let returnEntity=null;
        try{
            const result = await axios.get(url)
            Productodata = await result.data;

            if (Productodata!=null){
                
                //si el producto no esta repetido en bd
                

                let productAInstertar = Productodata.code.map(function(element){
                    return `${element.firstName} ${element.lastName}`;
                })        

              console.log('Insertando producto de api externa en bd');
              console.log(Productodata.code);
              
              let pool= await sql.connect(config);
              let result = await pool.request()
                                .input('pCodigoBarra',sql.VarChar, Productodata.code)
                                .input('pNombre',sql.VarChar, Productodata.product_name_es)
                                .query("INSERT INTO Producto(CodigoBarra,Nombre) VALUES (@pCodigoBarra,@pNombre)");
              
            returnEntity=result.rowsAffected;
            console.log(returnEntity);
                                
            } else {

              console.log('No se ha insertado ningun produvto de api externa en bd');
            }
        }
        catch(error){
            console.log(error);
        }
        return Productodata;
    }

    getAll = async() => {

        let returnEntity = null;

        console.log('Estoy en: ProductoSrvice.GetAll');

        try{
            
            let pool= await sql.connect(config);
           
            let result = await pool.request().query("SELECT * FROM Producto")

            returnEntity = result.recordsets[0];

        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
        }


        
    /*

    //PARA QUE FUNCIONE CON LA NUEVA FUNCION TENGO QUE CAMBIAR ID POR CODIGOBARRA

    getById=async(id)=>{
    let returnEntity=null;
    console.log('Estoy en: ProductoSrvice.GetById(id)');
    try{
        console.log(config);
       
        let pool= await sql.connect(config);
        
        let result = await pool.request()
       
                            .input('pId', sql.Int, id)
                            .query('SELECT * FROM Producto WHERE id=@pId')
                            

        returnEntity=result.recordsets[0][0];
        //returnEntity.Ingredientes = await iXpS.getByIdPizza(id);
        
    } 
    catch(error) {
        console.log(error);
    }
   return returnEntity;
    }
    
    insertProducto = async (cuerpo) => {
        let returnEntity=null;
        console.log('Estoy en: ProductoSrvice.insert');
        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pCodigoBarra',sql.VarChar, Productodata.code)
                                .input('pNombre',sql.VarChar, cuerpo.Nombre)
                                .query("INSERT INTO Producto(CodigoBarra,Nombre) VALUES (@pCodigoBarra,@pNombre)");
            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }
    */

}