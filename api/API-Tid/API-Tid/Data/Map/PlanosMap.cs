using API_Tid.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API_Tid.Data.Map
{
    public class PlanosMap : IEntityTypeConfiguration<PlanosModel>
    {
        public void Configure(EntityTypeBuilder<PlanosModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Filiacao).HasMaxLength(50);
            builder.Property(x => x.Preco).HasMaxLength(15);
        }
    }
}
