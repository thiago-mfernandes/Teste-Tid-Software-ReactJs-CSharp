namespace API_Tid.Models
{
    public class ClientePlano
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public DateTime Ultima_visita { get; set; }
        public string? Cpf { get; set; }
        public string? Genero { get; set; }
        public string? Telefone { get; set; }
        public int? PlanoId { get; set; }
        public string? Filiacao { get; set; }
        public int? Preco { get; set; }        
    }
}
