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
            returnEntity = result.recordsets[0][0];
        
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
                
              console.log('Insertando etiquetas de api externa en bd');
              
              let pool= await sql.connect(config);
              let result = await pool.request()
                                .input('pIAceitePalma',sql.VarChar, Productodata.product.ingredients_analysis_tags[0])
                                .input('pIVegano',sql.VarChar, Productodata.product.ingredients_analysis_tags[1])
                                .input('pIVegetariano',sql.VarChar, Productodata.product.ingredients_analysis_tags[2])
                                .input('pNGrasa',sql.VarChar, Productodata.product.nutrient_levels_tags[0])
                                .input('pNGrasasSaturadas',sql.VarChar, Productodata.product.nutrient_levels_tags[1])
                                .input('pNAzucares',sql.VarChar, Productodata.product.nutrient_levels_tags[2])
                                .input('pNSal',sql.VarChar, Productodata.product.nutrient_levels_tags[3])
                                .input('pCodigoBarra',sql.VarChar, Productodata.code)
                                .query("INSERT INTO Etiquetas (IAceitePalma,IVegano,IVegetariano,NGrasa,NGrasasSaturadas,NAzucares,NSal,CodigoBarra) VALUES (@pIAceitePalma,@pIVegano,@pIVegetariano,@pNGrasa,@pNGrasasSaturadas,@pNAzucares,@pNSal,@pCodigoBarra)");
                               
                returnEntity=result.rowsAffected;
                console.log(returnEntity);
                                
            } else {

              console.log('No se ha insertado ningun etiqueta de la api externa en BD porque no existe');
            }
        }
        catch(error){
            console.log(error);
        }
        return Productodata;
    }

    //insert

}
