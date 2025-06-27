using BCrypt.Net;
using Eventik.Core.Interfaces.Services;

namespace Eventik.Infrastructure.Services;

public class BCryptPasswordHasher : IPasswordHasher
{
    public string HashPassword(string password)
    {
        if (string.IsNullOrEmpty(password))
            throw new ArgumentNullException(nameof(password));
            
        return BCrypt.Net.BCrypt.HashPassword(password);
    }

    public bool VerifyPassword(string hashedPassword, string password)
    {
        if (string.IsNullOrEmpty(hashedPassword))
            throw new ArgumentNullException(nameof(hashedPassword));
            
        if (string.IsNullOrEmpty(password))
            throw new ArgumentNullException(nameof(password));

        try
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }
        catch (SaltParseException)
        {
            return false;
        }
    }
}