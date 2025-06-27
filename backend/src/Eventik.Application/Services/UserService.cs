using Eventik.Application.DTOs.Users;
using Eventik.Application.Interfaces.Services;
using Eventik.Core.Entities;
using Eventik.Core.Interfaces.Repositories;
using Eventik.Core.Interfaces.Services;
using FluentResults;

namespace Eventik.Application.Services;

public class UserService(
    IUserRepository userRepository,
    IPasswordHasher passwordHasher) : IUserService
{
    public async Task<Result<UserResponse>> CreateUserAsync(CreateUserRequest request)
    {
        // Validate request
        if (string.IsNullOrWhiteSpace(request.Name))
            return Result.Fail("Name is required");

        if (string.IsNullOrWhiteSpace(request.City))
            return Result.Fail("City is required");

        // Check if email already exists
        if (!await userRepository.IsEmailUniqueAsync(request.Email))
            return Result.Fail("Email already exists");

        // Create user entity
        var user = new UserEntity
        {
            Email = request.Email,
            Name = request.Name,
            City = request.City,
            PasswordHash = passwordHasher.HashPassword(request.Password),
        };

        await userRepository.AddAsync(user);

        return Result.Ok(new UserResponse(
            user.Id,
            user.Email,
            user.Name));
    }

    public async Task<Result<UserResponse>> GetUserAsync(Guid userId)
    {
        // Get user from repository
        var user = await userRepository.GetByIdAsync(userId);
        
        if (user == null)
            return Result.Fail<UserResponse>("User not found");

        // Return response DTO
        return Result.Ok(new UserResponse(
            user.Id,
            user.Email,
            user.Name));
    }
}