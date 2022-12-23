using API_Tid.Models;
using Microsoft.EntityFrameworkCore;
using API_Tid.Data;
using API_Tid.Repositorios.Interfaces;

namespace API_Tid.Repositorios.Interfaces
{
    public class PlanosRepositorio : IPlanosRepositorio
    {
        private readonly BaseDBContext _dbContext;
        public PlanosRepositorio(BaseDBContext planosDBContext)
        {
            _dbContext = planosDBContext;
        }
        public async Task<PlanosModel> BuscarPorId(int id)
        {
            return await _dbContext.Planos.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<PlanosModel>> BuscarTodosPlanos()
        {
            return await _dbContext.Planos.ToListAsync();
        }

        public async Task<PlanosModel> Adicionar(PlanosModel plano)
        {
            await _dbContext.Planos.AddAsync(plano);
            await _dbContext.SaveChangesAsync();

            return plano;
        }

        public async Task<PlanosModel> Atualizar(PlanosModel plano, int id)
        {
            PlanosModel planoPorId = await BuscarPorId(id);

            if (planoPorId == null)
            {
                throw new Exception($"Plano para o ID: {id} não encontrado no banco de dados.");
            }

            planoPorId.Filiacao = plano.Filiacao;
            planoPorId.Preco = plano.Preco;

            _dbContext.Planos.Update(planoPorId);
            await _dbContext.SaveChangesAsync();

            return planoPorId;
        }

        public async Task<bool> Apagar(int id)
        {
            PlanosModel planoPorId = await BuscarPorId(id);

            if (planoPorId == null)
            {
                throw new Exception($"Plano para o ID: {id} não encontrado no banco de dados.");
            }

            _dbContext.Planos.Remove(planoPorId);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
