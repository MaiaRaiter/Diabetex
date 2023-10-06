import config from '../../dbconfig.js';
import sql from 'mssql';
import axios from 'axios';
import EtiquetaService from './EtiquetaService.js';

const iXpS = new EtiquetaService();

export default class ProductoService {

    getProductoDiabetex = async (codigoBarra) => {

        let returnEntity = null;

        console.log('Estoy en: ProductoSrvice.getProductoDiabetex(codigoBarra)');
        console.log(codigoBarra);
        try {

            let pool = await sql.connect(config);

            let result = await pool.request()
                .input('pCodigoBarra', sql.VarChar, codigoBarra)
                .query(`SELECT
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
                [CodigoBarra],
                --[CalculoCarbohidratos],
                CalculoCarbohidratos = (NCarbohidratos100g-NFibra100g/2)
                FROM Producto 
                WHERE CodigoBarra=@pCodigoBarra`)
            returnEntity = result.recordsets[0][0];
          
            
            returnEntity.Etiquetas = await iXpS.getEtiquetaDiabetex(codigoBarra);

        }
        catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    // TRAE EL PRODUCTO DE LA API EXTERNA Y LO AGREGA A LA BD

    getProduct = async (codebar) => {

        let Productodata;
        let url = `http://ar.openfoodfacts.org/api/v0/product/${codebar}.json?fields=product_name_es,quantity,brands,manufacturing_places,ingredients_text,ingredients_analysis_tags,nutrient_levels_tags,nutriments,ecoscore_data,selected_images`;
        let returnEntity = null;

        console.log(url);

        try {
            const result = await axios.get(url)
            Productodata = result.data;
            console.log(Productodata.status);

            //Cuando el status del producto es 0 significa que no existe

            if (Productodata.status != 0) {

                console.log('Insertando producto de api externa en bd');

                console.log(Productodata.product.manufacturing_places);

                let pool = await sql.connect(config);
                let result = await pool.request()
                    .input('pNombre', sql.VarChar, Productodata.product.product_name_es)
                    .input('pIngredientes', sql.VarChar, Productodata.product.ingredients_text)
                    .input('pCantidad', sql.VarChar, Productodata.product.quantity)
                    .input('PCantMeGusta', sql.Int, null)
                    .input('pMarca', sql.VarChar, Productodata.product.brands)
                    .input('pEspeciesAmenazadas', sql.Bit, Productodata.product.ecoscore_data.adjustments.threatened_species)
                    .input('pLugarFabricacion', sql.VarChar, Productodata.product.manufacturing_places)
                    .input('pHCAgricultura', sql.Float, Productodata.product.ecoscore_data.agribalyse.co2_agriculture)
                    .input('pHCProcesado', sql.Float, Productodata.product.ecoscore_data.agribalyse.co2_processing)
                    .input('pHCEmbalaje', sql.Float, Productodata.product.ecoscore_data.agribalyse.co2_packaging)
                    .input('pHCTransporte', sql.Float, Productodata.product.ecoscore_data.agribalyse.co2_transportation)
                    .input('pHCDistribución', sql.Float, Productodata.product.ecoscore_data.agribalyse.co2_distribution)
                    .input('pHCConsumo', sql.Float, Productodata.product.ecoscore_data.agribalyse.co2_consumption)
                    .input('pHCTotal', sql.Float, Productodata.product.ecoscore_data.agribalyse.co2_total)
                    .input('pNAlcohol100g', sql.Float, Productodata.product.nutriments.alcohol_100g)
                    .input('pNCarbohidratos100g', sql.Float, Productodata.product.nutriments.carbohydrates_100g)
                    .input('pNEnergia100g', sql.Float, Productodata.product.nutriments["energy-kcal_100g"])
                    .input('pNGrasa100g', sql.Float, Productodata.product.nutriments.fat_100g)
                    .input('pNFibra100g', sql.Float, Productodata.product.nutriments.fiber_100g)
                    .input('pNProteinas100g', sql.Float, Productodata.product.nutriments.proteins_100g)
                    .input('pNSal100g', sql.Float, Productodata.product.nutriments.salt_100g)
                    .input('pNGrasasSaturadas100g', sql.Float, Productodata.product.nutriments["saturated-fat_100g"])
                    .input('pNSodio100g', sql.Float, Productodata.product.nutriments.sodium_100g)
                    .input('pNAzucar100g', sql.Float, Productodata.product.nutriments.sugars_100g)
                    .input('pFoto', sql.VarChar, Productodata.product.selected_images.front.display.es)
                    .input('pCodigoBarra', sql.VarChar, Productodata.code)
                    .query("INSERT INTO Producto(Nombre,Ingredientes,Cantidad,CantMeGusta,Marca,EspeciesAmenazadas,LugarFabricacion,HCAgricultura,HCProcesado,HCEmbalaje,HCTransporte,HCDistribución,HCConsumo,HCTotal,NAlcohol100g,NCarbohidratos100g,NEnergia100g,NGrasa100g,NFibra100g,NProteinas100g,NSal100g,NGrasasSaturadas100g,NSodio100g,NAzucar100g,Foto,CodigoBarra) VALUES (@pNombre,@pIngredientes,@pCantidad,@pCantMeGusta,@pMarca,@pEspeciesAmenazadas,@pLugarFabricacion,@pHCAgricultura,@pHCProcesado,@pHCEmbalaje,@pHCTransporte,@pHCDistribución,@pHCConsumo,@pHCTotal,@pNAlcohol100g,@pNCarbohidratos100g,@pNEnergia100g,@pNGrasa100g,@pNFibra100g,@pNProteinas100g,@pNSal100g,@pNGrasasSaturadas100g,@pNSodio100g,@pNAzucar100g,@pFoto,@pCodigoBarra)");
                returnEntity = result.rowsAffected;
                console.log(returnEntity);

                await iXpS.getEtiquetas(codigoBarra);

            } else {

                console.log('No se ha insertado ningun producto de la api externa en BD porque no existe');
            }
        }
        catch (error) {
            console.log(error);
        }
        return Productodata;
    }

    agregarProducto = async (cuerpo) => {
        let returnEntity = null;
        console.log('Estoy en: ProductoSrvice.agregarProducto');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', sql.VarChar, cuerpo.Nombre)
                .input('pIngredientes', sql.VarChar, cuerpo.Ingedientes)
                .input('pCantidad', sql.VarChar, cuerpo.Cantidad)
                .input('PCantMeGusta', sql.Int, null)
                .input('pMarca', sql.VarChar, cuerpo.Marca)
                .input('pEspeciesAmenazadas', sql.Bit, cuerpo.EspeciesAmenzadas)
                .input('pLugarFabricacion', sql.VarChar, cuerpo.LugarFabricacion)
                .input('pHCAgricultura', sql.Float, cuerpo.HCAgricultura)
                .input('pHCProcesado', sql.Float, cuerpo.HCProcesado)
                .input('pHCEmbalaje', sql.Float, cuerpo.HCEmbalaje)
                .input('pHCTransporte', sql.Float, cuerpo.HCTransporte)
                .input('pHCDistribución', sql.Float, cuerpo.HCDistribución)
                .input('pHCConsumo', sql.Float, cuerpo.HCConsumo)
                .input('pHCTotal', sql.Float, cuerpo.HCTotal)
                .input('pNAlcohol100g', sql.Float, cuerpo.NAlcohol100g)
                .input('pNCarbohidratos100g', sql.Float, cuerpo.NCarbohidratos100g)
                .input('pNEnergia100g', sql.Float, cuerpo.NEnergia100g)
                .input('pNGrasa100g', sql.Float, cuerpo.NGrasa100g)
                .input('pNFibra100g', sql.Float, cuerpo.NFibra100g)
                .input('pNProteinas100g', sql.Float, cuerpo.NProteinas100g)
                .input('pNSal100g', sql.Float, cuerpo.NSal100g)
                .input('pNGrasasSaturadas100g', sql.Float, cuerpo.NGrasasSaturadas100g)
                .input('pNSodio100g', sql.Float, cuerpo.NSodio100g)
                .input('pNAzucar100g', sql.Float, cuerpo.NAzucar100g)
                .input('pFoto', sql.VarChar, cuerpo.Foto)
                .input('pCodigoBarra', sql.VarChar, cuerpo.CodigoBarra)
                .query("INSERT INTO Producto(Nombre,Ingredientes,Cantidad,CantMeGusta,Marca,EspeciesAmenazadas,LugarFabricacion,HCAgricultura,HCProcesado,HCEmbalaje,HCTransporte,HCDistribución,HCConsumo,HCTotal,NAlcohol100g,NCarbohidratos100g,NEnergia100g,NGrasa100g,NFibra100g,NProteinas100g,NSal100g,NGrasasSaturadas100g,NSodio100g,NAzucar100g,Foto,CodigoBarra) VALUES (@pNombre,@pIngredientes,@pCantidad,@pCantMeGusta,@pMarca,@pEspeciesAmenazadas,@pLugarFabricacion,@pHCAgricultura,@pHCProcesado,@pHCEmbalaje,@pHCTransporte,@pHCDistribución,@pHCConsumo,@pHCTotal,@pNAlcohol100g,@pNCarbohidratos100g,@pNEnergia100g,@pNGrasa100g,@pNFibra100g,@pNProteinas100g,@pNSal100g,@pNGrasasSaturadas100g,@pNSodio100g,@pNAzucar100g,@pFoto,@pCodigoBarra)");
            returnEntity = result.rowsAffected;
        }
        catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    //Trae todos los productos de BD
    getAll = async () => {

        let returnEntity = null;

        console.log('Estoy en: ProductoSrvice.GetAll');

        try {

            let pool = await sql.connect(config);

            let result = await pool.request().query("SELECT * FROM Producto")

            returnEntity = result.recordsets[0];

        }
        catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    update = async (cuerpo) => {
        let returnEntity = null;

        console.log('Estoy en: ProductoSrvice.update');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.VarChar, cuerpo.Id)
                .input('pNombre', sql.VarChar, cuerpo.Nombre)
                .input('pIngredientes', sql.VarChar, cuerpo.Ingedientes)
                .input('pCantidad', sql.VarChar, cuerpo.Cantidad)
                .input('PCantMeGusta', sql.Int, null)
                .input('pMarca', sql.VarChar, cuerpo.Marca)
                .input('pEspeciesAmenazadas', sql.Bit, cuerpo.EspeciesAmenzadas)
                .input('pLugarFabricacion', sql.VarChar, cuerpo.LugarFabricacion)
                .input('pHCAgricultura', sql.Float, cuerpo.HCAgricultura)
                .input('pHCProcesado', sql.Float, cuerpo.HCProcesado)
                .input('pHCEmbalaje', sql.Float, cuerpo.HCEmbalaje)
                .input('pHCTransporte', sql.Float, cuerpo.HCTransporte)
                .input('pHCDistribución', sql.Float, cuerpo.HCDistribución)
                .input('pHCConsumo', sql.Float, cuerpo.HCConsumo)
                .input('pHCTotal', sql.Float, cuerpo.HCTotal)
                .input('pNAlcohol100g', sql.Float, cuerpo.NAlcohol100g)
                .input('pNCarbohidratos100g', sql.Float, cuerpo.NCarbohidratos100g)
                .input('pNEnergia100g', sql.Float, cuerpo.NEnergia100g)
                .input('pNGrasa100g', sql.Float, cuerpo.NGrasa100g)
                .input('pNFibra100g', sql.Float, cuerpo.NFibra100g)
                .input('pNProteinas100g', sql.Float, cuerpo.NProteinas100g)
                .input('pNSal100g', sql.Float, cuerpo.NSal100g)
                .input('pNGrasasSaturadas100g', sql.Float, cuerpo.NGrasasSaturadas100g)
                .input('pNSodio100g', sql.Float, cuerpo.NSodio100g)
                .input('pNAzucar100g', sql.Float, cuerpo.NAzucar100g)
                .input('pFoto', sql.VarChar, cuerpo.Foto)
                .input('pCodigoBarra', sql.VarChar, cuerpo.CodigoBarra)
                .query("UPDATE Producto SET Nombre=@pNombre,Ingredientes=@pIngredientes,Cantidad=@pCantidad,CantMeGusta=@pCantMeGusta,Marca=@pMarca,EspeciesAmenazadas=@pEspeciesAmenazadas,LugarFabricacion=@pLugarFabricacion,HCAgricultura=@pHCAgricultura,HCProcesado=@pHCProcesado,HCEmbalaje=@pHCEmbalaje,HCTransporte=@pHCTransporte,HCDistribución=@pHCDistribución,HCConsumo=@pHCConsumo,HCTotal=@pHCTotal,NAlcohol100g=@pNAlcohol100g,NCarbohidratos100g=@pNCarbohidratos100g,NEnergia100g=@pNEnergia100g,NGrasa100g=@pNGrasa100g,NFibra100g=@pNFibra100g,NProteinas100g=@pNProteinas100g,NSal100g=@pNSal100g,NGrasasSaturadas100g=@pNGrasasSaturadas100g,NSodio100g=@pNSodio100g,NAzucar100g=@pNAzucar100g,Foto=@pFoto,CodigoBarra=@pCodigoBarra  WHERE CodigoBarra=@pCodigoBarra");
            returnEntity = result.rowsAffected;
        }
        catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    deleteById = async (codigoBarra) => {
        let rowsAffected = 0;
        console.log('Estoy en: ProductoSrvice.deleteById(codigoBarra)');
        try {
            let pool = await sql.connect(config)
            let result = await pool.request()
                .input('pCodigoBarra', sql.Int, codigoBarra)
                .query('DELETE FROM Producto WHERE CodigoBarra=@pCodigoBarra');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }

}