using Eventik.Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Eventik.Infrastructure.Repositories;

public class Repository<T>(DbContext context) : IRepository<T>
    where T : class
{
    private readonly DbSet<T> _dbSet = context.Set<T>();

    public async Task<T?> GetByIdAsync(Guid id) => await _dbSet.FindAsync(id);
    public async Task<IEnumerable<T>> GetAllAsync() => await _dbSet.ToListAsync();
    public async Task AddAsync(T entity)
    {
        await _dbSet.AddAsync(entity);
        await context.SaveChangesAsync();
    }
    public void Update(T entity)
    {
        _dbSet.Update(entity);
        context.SaveChanges();
    }

    public void Remove(T entity)
    {
        _dbSet.Remove(entity);
        context.SaveChanges();
    }
}