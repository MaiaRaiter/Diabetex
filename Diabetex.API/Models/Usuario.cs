using System.Text.Json.Serialization; 
namespace Diabetex.API.Models; 

public class Usuario {    
    
    public int Id_Usuario { get; set; }    
    public string Nombre { get; set; } = "";
    public int TipoDiabetes { get; set; }

    [JsonIgnore]
    public string Apellido { get; set; } = ""; 
    public string Gmail { get; set; } = ""; 
    private string Contraseña { get; set; } = "";  // es una cadena de caracteres privada    
    public DateTime Fecha { get; set; }    
   
}