using Eventik.Core.Interfaces;
using Eventik.Infrastructure.Data;
using Eventik.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Eventik.Infrastructure.ServiceConfiguration;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        string? connectionString)
    {
        services.AddDbContext<AppDbContext>(options => 
            options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
        
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        services.AddScoped<IUserRepository, UserRepository>();
        
        return services;
    }
}