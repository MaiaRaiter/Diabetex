using System.Text.Json.Serialization; 
namespace Diabetex.API.Models; 

public class PreferenciaXUsuario {
    public int Id_PreferenciaUsuario { get; set; } 
    public int Id_Usuario { get; set; } 
    public int Notificacion { get; set; }
     
}