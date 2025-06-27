using Eventik.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Eventik.Infrastructure.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<UserEntity> Users { get; set; } = null!;
    public DbSet<UserPreferenceTag> UserPreferenceTags { get; set; } = null!;
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserPreferenceTag>()
            .Property(p => p.Type)
            .HasConversion<string>();

        modelBuilder.Entity<UserPreferenceTag>()
            .HasIndex(p => p.Type)
            .IsUnique();
    }
}