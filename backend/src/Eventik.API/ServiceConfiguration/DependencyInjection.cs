using Eventik.Application.Interfaces.Services;
using Eventik.Application.Services;
using Eventik.Core.Interfaces;
using Eventik.Core.Interfaces.Repositories;
using Eventik.Core.Interfaces.Services;
using Eventik.Infrastructure.Data;
using Eventik.Infrastructure.Repositories;
using Eventik.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

namespace Eventik.API.ServiceConfiguration;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        string? connectionString)
    {
        services.AddDbContext<AppDbContext>(options => 
            options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

        services.AddScoped(typeof(IRepository<>), typeof(Repository<>))
            .AddScoped<IUserRepository, UserRepository>()
            .AddScoped<IPasswordHasher, BCryptPasswordHasher>()
            .AddScoped<ITokenService, JwtTokenService>();
        
        return services;
    }

    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IAuthService, AuthService>()
            .AddScoped<IUserService, UserService>();
        
        return services;
    }
}