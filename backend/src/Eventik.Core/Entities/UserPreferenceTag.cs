using System.ComponentModel.DataAnnotations;
using Eventik.Core.Enums;

namespace Eventik.Core.Entities;

public class UserPreferenceTag
{
    public Guid Id { get; init; }

    [Required, MaxLength(50)]
    public PreferenceType Type { get; init; }
    public ICollection<UserEntity> Users { get; init; } = new List<UserEntity>();
}