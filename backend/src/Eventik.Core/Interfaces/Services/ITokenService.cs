using Eventik.Core.Entities;

namespace Eventik.Core.Interfaces.Services;

public interface ITokenService
{
    string GenerateToken(UserEntity user);
    Task<bool> ValidateTokenAsync(string token);
}