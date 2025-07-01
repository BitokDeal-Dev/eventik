using Eventik.Application.DTOs.Users;
using FluentResults;

namespace Eventik.Application.Interfaces.Services;

public interface IUserService
{
    Task<Result<UserResponse>> CreateUserAsync(CreateUserRequest request);
    Task<Result<UserResponse>> GetUserAsync(Guid userId);
}