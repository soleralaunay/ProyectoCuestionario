using System;
using System.Collections.Generic;

namespace ProyectoCuestionario.Models
{
    public partial class Pregunta
    {
        public Pregunta()
        {
            Respuesta = new HashSet<Respuesta>();
        }

        public int Id { get; set; }
        public string? TxtPregunta { get; set; }
        public byte? Tipo { get; set; }

        public virtual ICollection<Respuesta> Respuesta { get; set; }
    }
}
