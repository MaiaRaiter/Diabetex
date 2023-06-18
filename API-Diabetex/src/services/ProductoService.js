import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';

//const URL_PRODUCT = "http://world.openfoodfacts.org/api/v0/product/";
//const URL_FIELDS = "?fields=product_name_es,quantity,brands,manufacturing_places,ingredients_text,ingredients_analysis_tags,nutrient_levels_tags,nutriments,ecoscore_data";
export default class ProductoService{

    getProduct = async(codebar) => {
        let data;
        let url = `http://world.openfoodfacts.org/api/v0/product/${codebar}?fields=product_name_es,quantity,brands,manufacturing_places,ingredients_text,ingredients_analysis_tags,nutrient_levels_tags,nutriments,ecoscore_data.json`;
        console.log(url);
        
        try{
            const result = await axios.get(url)
            data = await result.data;
        }
        catch(error){
            console.log(error);
        }
        return data;
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

    /*
    insert = async (cuerpo) => {
        let returnEntity=null;
        console.log('Estoy en: PizzaService.insert');
        try{
            let pool= await sql.connect(config);
            let result = await pool.request()
                                .input('pNombre',sql.VarChar, cuerpo.Nombre)
                                .input('pLibreGluten',sql.Bit, cuerpo.LibreGluten)
                                .input('pImporte', sql.Float,cuerpo.Importe)
                                .input('pDescripcion', sql.VarChar,cuerpo.Descripcion)
                                .query("INSERT INTO Pizzas(Nombre,LibreGluten,Importe,Descripcion) VALUES (@pNombre,@pLibreGluten,@pImporte,@pDescripcion)");
            returnEntity=result.rowsAffected;
        } 
        catch(error) {
            console.log(error);
        }
        return returnEntity;
    }


    update=async(cuerpo)=>{
            let returnEntity=null;
            console.log('Estoy en: PizzaService.update');
            try{
                let pool= await sql.connect(config);
                let result = await pool.request()
                                    .input('pId', sql.Int, cuerpo.Id)
                                    .input('pNombre',sql.VarChar, cuerpo.Nombre)
                                    .input('pLibreGluten',sql.Bit, cuerpo.LibreGluten)
                                    .input('pImporte', sql.Float,cuerpo.Importe)
                                    .input('pDescripcion', sql.VarChar,cuerpo.Descripcion)
                                    .query("UPDATE Pizzas SET Nombre=@pNombre,LibreGluten=@pLibreGluten,Importe=@pImporte,Descripcion=@pDescripcion WHERE Id=@pId");
              returnEntity=result.rowsAffected;
            } 
            catch(error) {
                console.log(error);
            }
           return returnEntity;
            }

    deleteById=async(id)=>{
    let rowsAffected=0;
    console.log('Estoy en: PizzaService.deleteById(id)');
    try {
        let pool = await sql.connect(config)
        let result= await pool.request()
                          .input('pId', sql.Int , id)
                          .query('DELETE FROM Pizzas WHERE Id=@pId');
      rowsAffected=result.rowsAffected;                    
    } catch (error) {
        console.log(error)
    }
    return rowsAffected;
    */
}