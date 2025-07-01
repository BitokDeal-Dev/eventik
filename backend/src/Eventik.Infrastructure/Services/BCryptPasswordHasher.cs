using Microsoft.AspNetCore.Identity;
using Eventik.Core.Interfaces.Services;

namespace Eventik.Infrastructure.Services;

public class BCryptPasswordHasher : IPasswordHasher
{
    private readonly PasswordHasher<object> _hasher = new();

    public string HashPassword(string password)
    {
        return _hasher.HashPassword(null!, password);
    }

    public bool VerifyPassword(string hashedPassword, string password)
    {
        var result = _hasher.VerifyHashedPassword(null!, hashedPassword, password);
        return result != PasswordVerificationResult.Failed;
    }
}