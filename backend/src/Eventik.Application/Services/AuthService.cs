using Eventik.Application.DTOs.Auth.Request;
using Eventik.Application.DTOs.Auth.Response;
using Eventik.Application.Interfaces.Services;
using Eventik.Core.Entities;
using Eventik.Core.Interfaces.Repositories;
using Eventik.Core.Interfaces.Services;
using FluentResults;

namespace Eventik.Application.Services;

public class AuthService(
    IUserRepository userRepository,
    IPasswordHasher passwordHasher,
    ITokenService tokenService)
    : IAuthService
{
    public async Task<Result<AuthResponse>> RegisterAsync(RegisterRequest request)
    {
        if (!await userRepository.IsEmailUniqueAsync(request.Email))
            return Result.Fail("Email already exists");

        var user = new UserEntity
        {
            Email = request.Email,
            PasswordHash = passwordHasher.HashPassword(request.Password),
            UserName = request.Name
        };

        await userRepository.AddAsync(user);

        var token = tokenService.GenerateToken(user);
        return new AuthResponse(token, user.Id, user.Email);
    }

    public async Task<Result<AuthResponse>> LoginAsync(LoginRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email))
            return Result.Fail("Email is required");

        if (string.IsNullOrWhiteSpace(request.Password))
            return Result.Fail("Password is required");

        var user = await userRepository.GetByEmailAsync(request.Email);
        if (user == null)
            return Result.Fail("Invalid credentials, User not found!");

        if (user.PasswordHash != null && !passwordHasher.VerifyPassword(user.PasswordHash, request.Password))
            return Result.Fail("Invalid credentials verify password!");

        return new AuthResponse(tokenService.GenerateToken(user), user.Id, user.Email);
    }
}