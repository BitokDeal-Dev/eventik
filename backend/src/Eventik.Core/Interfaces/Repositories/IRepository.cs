using System.Linq.Expressions;

namespace Eventik.Core.Interfaces.Repositories;

public interface IRepository<T> where T : class
{
    Task<T?> GetByIdAsync(Guid id);
    Task<IEnumerable<T>> GetAllAsync();
    Task AddAsync(T entity);
    
    void Update(T entity);
    void Remove(T entity);
}