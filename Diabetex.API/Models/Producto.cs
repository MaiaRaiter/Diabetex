using System.Text.Json.Serialization; 
namespace Diabetex.API.Models; 

public class Producto {    
    
    public int Id_código { get; set; }    
    public string Product_name { get; set; } = "";
    public string Ingredientes { get; set; } = "";
    public int Porción_tamaño { get; set; }

    [JsonIgnore]
     
    public string InfoNutricional { get; set; } = "";    
    public string EfectoNutricional { get; set; } = "";
    public int CantMeGusta { get; set; }
    public DateTime Created_datetime { get; set; } 
    public string Marcas_etiquetas { get; set; } = "";
}