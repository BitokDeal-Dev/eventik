using Eventik.Application.Users.DTOs;
using FluentResults;

namespace Eventik.Application.Users.Interfaces.Services;

public interface IUserService
{
    Task<Result<UserResponse>> CreateUserAsync(CreateUserRequest request);
    Task<Result<UserResponse>> GetUserAsync(Guid userId);
}