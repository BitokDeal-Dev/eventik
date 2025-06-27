using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Eventik.Core.Entities;
using Eventik.Core.Interfaces.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Eventik.Infrastructure.Services;

public class JwtTokenService(IConfiguration configuration) : ITokenService
{
    private readonly string? _key = configuration["Jwt:Key"];
    private readonly string? _issuer = configuration["Jwt:Issuer"];
    private readonly string? _audience = configuration["Jwt:Audience"];
    private readonly int _expiryInMinutes = configuration.GetValue("Jwt:ExpiryInMinutes", 60);

    public string GenerateToken(UserEntity user)
    {
        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new(JwtRegisteredClaimNames.Email, user.Email!),
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new("name", user.UserName ?? string.Empty),
            new("city", user.City)
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key!));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddMinutes(_expiryInMinutes),
            SigningCredentials = credentials,
            Issuer = _issuer,
            Audience = _audience
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    public async Task<bool> ValidateTokenAsync(string token)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key!));
        var tokenHandler = new JwtSecurityTokenHandler();

        try
        {
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = key,
                ValidateIssuer = true,
                ValidIssuer = _issuer,
                ValidateAudience = true,
                ValidAudience = _audience,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            }, out _);

            return await Task.FromResult(true);
        }
        catch
        {
            return false;
        }
    }
}
