using Eventik.API.Endpoints;
using Eventik.API.ServiceConfiguration;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Configuration
    .AddJsonFile("appsettings.json")
    .AddEnvironmentVariables();

builder.Services
    .AddInfrastructure(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        builder.Configuration)
    .AddApplication();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapAuthEndpoints();

await app.UseMigrationsAndSeeding();
await app.RunAsync();