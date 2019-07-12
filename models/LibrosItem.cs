using Newtonsoft.Json;
using System;
///
///<Sumary>
/// Se coloca TaskItem a la Clase en lugar de Task, porque Task es una palabra Reservada de . NetCore
///</Sumary>
///
namespace parcialnetcore.models
{
    public class LibrosItem
    {
        [JsonProperty("ISBN")]
        public int ISBN { get; set; }

        [JsonProperty("Titulo")]
        public string Titulo { get; set; }
        [JsonProperty("PrecioVenta")]
        public string PrecioVenta { get; set; }
        [JsonProperty("Popular")]
        public bool Popular { get; set; }
    }
}