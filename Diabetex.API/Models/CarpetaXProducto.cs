using System.Text.Json.Serialization; 
namespace Diabetex.API.Models; 

public class CarpetaXProducto {
    public int Id_CarpetaXProducto { get; set; } 
    public int Id_CodigoBarra { get; set; }
    public int Id_Carpetas { get; set; }  
    public string Nombre { get; set; } = "";
}