import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';

export default class EtiquetaService{

    getEtiquetaDiabetex = async (codigoBarra) => {

        let returnEntity=null;

        console.log('Estoy en: EtiquetaService.getEtiquetaDiabetexDiabetex(codigoBarra)');
        try{
        
            let pool= await sql.connect(config);
            
            let result = await pool.request()
                                .input('pCodigoBarra', sql.VarChar, codigoBarra)
                                .query('SELECT * FROM Etiquetas WHERE codigoBarra=@pCodigoBarra')
            returnEntity=result.recordsets[0][0];
        
    } 
    catch(error) {
        console.log(error);
    }
    return returnEntity;
    }

    // TRAE EL PRODUCTO DE LA API EXTERNA Y LO AGREGA A LA BD

    getEtiquetas = async(codebar) => {
        let Productodata;
        console.log('getEtiquetas');
        let url = `http://ar.openfoodfacts.org/api/v0/product/${codebar}.json?fields=product_name_es,quantity,brands,manufacturing_places,ingredients_text,ingredients_analysis_tags,nutrient_levels_tags,nutriments,ecoscore_data,selected_images`;
        console.log(url);
        let returnEntity=null;
        try{
            const result = await axios.get(url)
            Productodata = result.data;
            console.log(Productodata.status);

            //Cuando el status del producto es 0 significa que no existe

            if (Productodata.status!=0){
                
              console.log('Insertando producto de api externa en bd');
              
              console.log(Productodata.product.manufacturing_places);
              
              let pool= await sql.connect(config);
              let result = await pool.request()
                                .input('pEtiquetasIngredientes',sql.VarChar, Productodata.product.ingredients_analysis_tags)
                                .input('pEtiquetasNivelesIngredinetes',sql.VarChar, Productodata.product.nutrient_levels_tags)
                                .input('pCodigoBarra',sql.VarChar, Productodata.code)
                                .query("INSERT INTO Producto(EtiquetasIngredientes,EtiquetasNivelesIngredinetes) VALUES (@pEtiquetasIngredientes,@pEtiquetasNivelesIngredinetes)");
                               
                returnEntity=result.rowsAffected;
                console.log(returnEntity);
                                
            } else {

              console.log('No se ha insertado ningun producto de la api externa en BD porque no existe');
            }
        }
        catch(error){
            console.log(error);
        }
        return Productodata;
    }

}
