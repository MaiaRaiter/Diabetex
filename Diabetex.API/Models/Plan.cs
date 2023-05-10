using System.Text.Json.Serialization; 
namespace Diabetex.API.Models; 

public class Plan {
    public int Id_Plan { get; set; } 
    public int Id_Usuario { get; set; } 
    public bool Free { get; set; }
    public bool Premium { get; set; }  
    
}