using API_Tid.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API_Tid.Repositorios.Interfaces;

namespace API_Tid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanoController : ControllerBase
    {
        private readonly IPlanosRepositorio _planoRepositorio;
        public PlanoController(IPlanosRepositorio planoRepositorio)
        {
            _planoRepositorio = planoRepositorio;
        }
        [HttpGet]
        public async Task<ActionResult<List<PlanosModel>>> BuscarTodosPlanos()
        {
            List<PlanosModel> planos = await _planoRepositorio.BuscarTodosPlanos();
            return Ok(planos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PlanosModel>> BuscarPorId(int id)
        {
            PlanosModel plano = await _planoRepositorio.BuscarPorId(id);
            return Ok(plano);
        }

        [HttpPost]
        public async Task<ActionResult<PlanosModel>> Cadastrar([FromBody] PlanosModel planoModel)
        {
            PlanosModel plano = await _planoRepositorio.Adicionar(planoModel);
            return Ok(plano);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PlanosModel>> Atualizar([FromBody] PlanosModel planoModel, int id)
        {
            planoModel.Id = id;
            PlanosModel plano = await _planoRepositorio.Atualizar(planoModel, id);
            return Ok(plano);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<PlanosModel>> Apagar(int id)
        {
            bool removido = await _planoRepositorio.Apagar(id);
            return Ok(removido);
        }
    }
}

