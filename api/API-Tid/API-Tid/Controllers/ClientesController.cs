using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API_Tid.Models;
using API_Tid.Repositorios.Interfaces;
using System.Numerics;

namespace API_Tid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IClientesRepositorio _clienteRepositorio;
        public ClienteController(IClientesRepositorio clienteRepositorio)
        {
            _clienteRepositorio = clienteRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<ClientePlano>>> BuscarTodosClientes()
        {
            List<ClientePlano> clientes = await _clienteRepositorio.BuscarTodosClientes();
            return Ok(clientes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ClientePlano>> BuscarPorId(int id)
        {
            ClientePlano cliente = await _clienteRepositorio.BuscarPorId(id);

            ClientePlano clientePlano = new ClientePlano()
            {
                Id = cliente.Id,
                Nome = cliente.Nome,
                Ultima_visita = cliente.Ultima_visita,
                Cpf = cliente.Cpf,
                Genero = cliente.Genero,
                Telefone = cliente.Telefone,
                PlanoId = cliente.PlanoId,
                Filiacao = cliente.Filiacao,
                Preco = cliente.Preco

            };
            return Ok(clientePlano);
        }

        [HttpPost]
        public async Task<ActionResult<ClientesModel>> Cadastrar([FromBody] ClientesModel clienteModel)
        {
            ClientesModel cliente = await _clienteRepositorio.Adicionar(clienteModel);
            return Ok(cliente);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ClientesModel>> Atualizar([FromBody] ClientesModel clienteModel, int id)
        {
            clienteModel.Id = id;
            ClientesModel cliente = await _clienteRepositorio.Atualizar(clienteModel, id);
            return Ok(cliente);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ClientesModel>> Apagar(int id)
        {
            bool removido = await _clienteRepositorio.Apagar(id);
            return Ok(removido);
        }
    }
}