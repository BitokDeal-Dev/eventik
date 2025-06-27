using Eventik.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Eventik.Infrastructure.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) :
    IdentityDbContext<UserEntity, IdentityRole<Guid>, Guid>(options)
{
    public DbSet<UserPreferenceTag> UserPreferenceTags { get; set; } = null!;
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder); 
        
        modelBuilder.Entity<UserPreferenceTag>()
            .Property(p => p.Type)
            .HasConversion<string>();

        modelBuilder.Entity<UserPreferenceTag>()
            .HasIndex(p => p.Type)
            .IsUnique();

        modelBuilder.Entity<UserEntity>()
            .HasMany(u => u.PreferenceTags)
            .WithMany(p => p.Users);
    }
}