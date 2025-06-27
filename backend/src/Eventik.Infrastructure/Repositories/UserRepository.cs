using Eventik.Core.Entities;
using Eventik.Core.Interfaces;
using Eventik.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Eventik.Infrastructure.Repositories;

public class UserRepository(AppDbContext context) : Repository<UserEntity>(context), IUserRepository
{
    public async Task<UserEntity?> GetByEmailAsync(string email)
        => await context.Users.FirstOrDefaultAsync(u => u.Email == email);

    public async Task<bool> IsEmailUniqueAsync(string email)
        => !await context.Users.AnyAsync(u => u.Email == email);
}