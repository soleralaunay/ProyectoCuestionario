using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProyectoCuestionario.Models
{
    public partial class CuestionarioContext : DbContext
    {
        public CuestionarioContext()
        {
        }

        public CuestionarioContext(DbContextOptions<CuestionarioContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Pregunta> Preguntas { get; set; } = null!;
        public virtual DbSet<Respuesta> Respuestas { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB; DataBase=Cuestionario;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pregunta>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Tipo).HasColumnName("tipo");

                entity.Property(e => e.TxtPregunta)
                    .HasMaxLength(2000)
                    .IsUnicode(false)
                    .HasColumnName("txtPregunta");
            });

            modelBuilder.Entity<Respuesta>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.IdPregunta).HasColumnName("idPregunta");

                entity.Property(e => e.TxtRespuesta)
                    .HasMaxLength(2000)
                    .IsUnicode(false)
                    .HasColumnName("txtRespuesta");

                entity.HasOne(d => d.IdPreguntaNavigation)
                    .WithMany(p => p.Respuesta)
                    .HasForeignKey(d => d.IdPregunta)
                    .HasConstraintName("FK__Respuesta__idPre__38996AB5");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
