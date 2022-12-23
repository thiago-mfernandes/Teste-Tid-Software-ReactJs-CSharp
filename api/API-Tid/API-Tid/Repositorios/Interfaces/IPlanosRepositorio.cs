using API_Tid.Models;

namespace API_Tid.Repositorios.Interfaces
{
    public interface IPlanosRepositorio
    {
        Task<List<PlanosModel>> BuscarTodosPlanos();
        Task<PlanosModel> BuscarPorId(int id);
        Task<PlanosModel> Adicionar(PlanosModel plano);
        Task<PlanosModel> Atualizar(PlanosModel plano, int id);
        Task<bool> Apagar(int id);
    }
}
