using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API_Tid.Models
{
    public class PlanosModel
    {
        public int Id { get; set; }
        public string? Filiacao { get; set; }
        public int? Preco { get; set; }
        [JsonIgnore]
        public ICollection<ClientesModel>? Clientes { get;set; }
        public void AdicionarCliente(ClientesModel cliente) { Clientes.Add(cliente); }
        public void RemoverCliente(ClientesModel cliente) { Clientes.Remove(cliente); }
    }

}
