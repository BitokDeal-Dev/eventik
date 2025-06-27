using Eventik.Application.DTOs.Auth.Request;
using Eventik.Application.DTOs.Auth.Response;
using Eventik.Application.Interfaces.Services;
using Eventik.Core.Entities;
using Eventik.Core.Interfaces;
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
            Name = request.Name
        };

        await userRepository.AddAsync(user);

        var token = tokenService.GenerateToken(user);
        return new AuthResponse(token, user.Id, user.Email);
    }

    public async Task<Result<AuthResponse>> LoginAsync(LoginRequest request)
    {
        var user = await userRepository.GetByEmailAsync(request.Email);
        if (user == null || !passwordHasher.VerifyPassword(request.Password, user.PasswordHash))
            return Result.Fail("Invalid credentials");

        return new AuthResponse(tokenService.GenerateToken(user), user.Id, user.Email);
    }
}