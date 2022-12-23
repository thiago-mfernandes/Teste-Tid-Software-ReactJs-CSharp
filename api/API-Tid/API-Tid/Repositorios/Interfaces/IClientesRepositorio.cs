using API_Tid.Models;

namespace API_Tid.Repositorios.Interfaces
{
    public interface IClientesRepositorio
    {
        Task<List<ClientePlano>> BuscarTodosClientes();
        Task<ClientePlano> BuscarPorId(int id);
        Task<ClientesModel> Adicionar(ClientesModel cliente);
        Task<ClientesModel> Atualizar(ClientesModel cliente, int id);
        Task<bool> Apagar(int id);
    }
}
