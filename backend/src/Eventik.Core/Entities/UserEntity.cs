using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Eventik.Core.Entities;

public class UserEntity : IdentityUser<Guid>
{
    [Required, MaxLength(50)] public string FirstName { get; init; } = string.Empty;

    [Required, MaxLength(50)] public string LastName { get; init; } = string.Empty;

    [Required, MaxLength(100)] public string City { get; init; } = string.Empty;

    public ICollection<UserPreferenceTag> PreferenceTags { get; init; } = new List<UserPreferenceTag>();
}