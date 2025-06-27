using Eventik.Core.Entities;

namespace Eventik.Core.Interfaces.Repositories;

public interface IUserRepository : IRepository<UserEntity>
{
    Task<UserEntity?> GetByEmailAsync(string email);
    Task<bool> IsEmailUniqueAsync(string email);
}