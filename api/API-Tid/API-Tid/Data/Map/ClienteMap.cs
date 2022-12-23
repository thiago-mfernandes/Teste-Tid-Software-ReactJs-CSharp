using API_Tid.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API_Tid.Data.Map
{
    public class ClienteMap : IEntityTypeConfiguration<ClientesModel>
    {
        public void Configure(EntityTypeBuilder<ClientesModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Ultima_visita).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Cpf).IsRequired().HasMaxLength(15);
            builder.Property(x => x.Genero).IsRequired().HasMaxLength(15);
            builder.Property(x => x.Telefone).IsRequired().HasMaxLength(15);
            builder.Property(x => x.PlanoId);
        }
    }
}
