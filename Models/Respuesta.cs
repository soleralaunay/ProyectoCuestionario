using System;
using System.Collections.Generic;

namespace ProyectoCuestionario.Models
{
    public partial class Respuesta
    {
        public int Id { get; set; }
        public string? TxtRespuesta { get; set; }
        public int? IdPregunta { get; set; }

        public virtual Pregunta? IdPreguntaNavigation { get; set; }
    }
}
