using System.Text.Json.Serialization; 
namespace Diabetex.API.Models; 

public class AccesoProducto {    
    public int Id_AccesoProducto { get; set; } 
    public int Id_Usuario { get; set; }
    public int Id_código { get; set; }    

    [JsonIgnore]
    public DateTime FechaAcceso { get; set; }
    public bool Favorito { get; set; } 
}