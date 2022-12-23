using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API_Tid.Models
{
    public class ClientesModel
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public DateTime Ultima_visita { get; set; }
        public string? Cpf { get; set; }
        public string? Genero { get; set; }
        public string? Telefone { get; set; }
        public int? PlanoId { get; set; }
        [JsonIgnore]
        public PlanosModel? PlanoCliente { get; set; }

    }
}
