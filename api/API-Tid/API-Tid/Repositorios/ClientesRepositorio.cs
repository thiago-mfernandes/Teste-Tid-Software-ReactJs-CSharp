using API_Tid.Models;
using Microsoft.EntityFrameworkCore;
using API_Tid.Data;
using API_Tid.Repositorios.Interfaces;

namespace API_Tid.Repositorios.Interfaces
{
    public class ClientesRepositorio : IClientesRepositorio
    {
        private readonly BaseDBContext _dbContext;
        public ClientesRepositorio(BaseDBContext clientesDBContext)
        {
            _dbContext = clientesDBContext;
        }

        public async Task<ClientePlano> BuscarPorId(int id)
        {
            var cliente = await _dbContext.Clientes.Include(x => x.PlanoCliente).FirstOrDefaultAsync(x => x.Id == id);
            var plano = await _dbContext.Planos.FirstOrDefaultAsync(x => x.Id == cliente.PlanoId);

            if (cliente == null)
            {
                throw new Exception($"Cliente para o ID: {id} não encontrado no banco de dados.");
            }

            if (plano == null)
            {
                throw new Exception($"Plano para o ID: {id} não encontrado no banco de dados.");
            }

            return new ClientePlano()
            {
                Id = cliente.Id,
                Nome = cliente.Nome,
                Ultima_visita = cliente.Ultima_visita,
                Cpf = cliente.Cpf,
                Genero = cliente.Genero,
                Telefone = cliente.Telefone,
                PlanoId= cliente.PlanoId,
                Filiacao = plano.Filiacao,
                Preco = plano.Preco
            };           
        }

        public async Task<List<ClientePlano>> BuscarTodosClientes()
        {            
            var clientePlano = await (from planos in _dbContext.Planos
                               join cliente in _dbContext.Clientes
                               on planos.Id equals cliente.PlanoId
                               select new ClientePlano()
                               {
                                   Id = cliente.Id,
                                   Nome = cliente.Nome,
                                   Ultima_visita = cliente.Ultima_visita,
                                   Cpf = cliente.Cpf,
                                   Genero = cliente.Genero,
                                   Telefone = cliente.Telefone,
                                   PlanoId= cliente.PlanoId,
                                   Filiacao = planos.Filiacao,
                                   Preco = planos.Preco
                               }).ToListAsync();

            return clientePlano;
           //return await _dbContext.Clientes.Include(x => x.PlanoCliente).ToListAsync();
            
        }

        public async Task<ClientesModel> Adicionar(ClientesModel cliente)
        {
            await _dbContext.Clientes.AddAsync(cliente);
            await _dbContext.SaveChangesAsync();

            return cliente;
        }
        

        public async Task<ClientesModel> Atualizar(ClientesModel cliente, int id)
        {
            var clienteAtualizado = await _dbContext.Clientes.FirstOrDefaultAsync(x => x.Id == id);

            if (clienteAtualizado == null)
            {
                throw new Exception($"Cliente para o ID: {id} não encontrado no banco de dados.");
            }

            clienteAtualizado.Id = cliente.Id;
            clienteAtualizado.Nome = cliente.Nome;
            clienteAtualizado.Cpf = cliente.Cpf;
            clienteAtualizado.Genero = cliente.Genero;
            clienteAtualizado.Telefone = cliente.Telefone;
            clienteAtualizado.PlanoId = cliente.PlanoId;
            

            _dbContext.Clientes.Update(clienteAtualizado);
            await _dbContext.SaveChangesAsync();

            return clienteAtualizado;
        }

        public async Task<bool> Apagar(int id)
        {
            var clienteExcluir = await _dbContext.Clientes.FirstOrDefaultAsync(x => x.Id == id);

            if (clienteExcluir == null)
            {
                throw new Exception($"Cliente para o ID: {id} não encontrado no banco de dados.");
            }


            _dbContext.Clientes.Remove(clienteExcluir);
            await _dbContext.SaveChangesAsync();

            return true;
        }
        
    }
}
