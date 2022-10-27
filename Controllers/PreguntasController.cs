using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoCuestionario.Models;

namespace ProyectoCuestionario.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PreguntasController : ControllerBase
    {
        // Instancia a contexto
        private readonly CuestionarioContext _dbcontext;

        // Constructor
        public PreguntasController(CuestionarioContext context)
        {
            _dbcontext = context;
        }

        // Obtener lista de preguntas
        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Pregunta> lista = await _dbcontext.Preguntas.OrderByDescending(c => c.Id).ToListAsync();
            
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        // Guardar respuestas
        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Pregunta request)
        {
            await _dbcontext.Preguntas.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }

    }
}
