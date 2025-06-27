using System.ComponentModel.DataAnnotations;

namespace Eventik.Core.Entities;

public class UserEntity
{
    public Guid Id { get; init; }

    [Required, EmailAddress, MaxLength(255)]
    public string Email { get; init; } = string.Empty;

    [Required, MaxLength(128)] 
    public string PasswordHash { get; init; } = string.Empty;

    [Required]
    public string City { get; init; } = string.Empty;

    public string? Name { get; init; }
    public string? Surname { get; init; }
    
    public ICollection<UserPreferenceTag> Preferences { get; init; } = new List<UserPreferenceTag>();
}