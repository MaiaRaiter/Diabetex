import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';

export default class EtiquetaService{

    getEtiquetaDiabetex = async (codigoBarra) => {

        let returnEntity=null;

        console.log('Estoy en: EtiquetaService.getEtiquetaDiabetex(codigoBarra)');
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
        let url = `http://ar.openfoodfacts.org/api/v0/product/${codebar}.json?fields=ingredients_analysis_tags,nutrient_levels_tags`;
        console.log(url);
        let returnEntity=null;
        try{
            const result = await axios.get(url)
            Productodata = result.data;
            console.log(Productodata.status);

            //Cuando el status del producto es 0 significa que no existe

            if (Productodata.status!=0){
                
              console.log('Insertando producto de api externa en bd');
              
              console.log(Productodata.product.ingredients_analysis_tags.result.recordsets[0][0]);
              console.log(Productodata.code);
              
              let pool= await sql.connect(config);
              let result = await pool.request()
                                .input('[pEtiquetasIngredientes]',sql.VarChar, Productodata.product.ingredients_analysis_tags)
                                .input('pEtiquetasNivelesNutrientes',sql.VarChar, Productodata.product.nutrient_levels_tags)
                                .input('pCodigoBarra',sql.VarChar, Productodata.code)
                                .query("INSERT INTO Etiquetas (IAceitePalma,IVegano,IVegetariano,CodigoBarra) VALUES (@[pEtiquetasIngredientes], @pCodigoBarra)");
                               
                returnEntity=result.rowsAffected;
                console.log(returnEntity);
                /*
                 ,[IAceitePalma]
      ,[IVegano]
      ,[IVegetariano]
      ,[NGrasa]
      ,[NGrasasSaturadas]
      ,[NAzucares]
      ,[NSal]
      ,[CodigoBarra]*/
                                
            } else {

              console.log('No se ha insertado ningun etiqueta de la api externa en BD porque no existe');
            }
        }
        catch(error){
            console.log(error);
        }
        return Productodata;
    }
    
    //INSERT

}
