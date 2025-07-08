using Eventik.Application.Authorization.DTOs.Request;
using Eventik.Application.DTOs.Auth.Response;
using FluentResults;

namespace Eventik.Application.Authorization.Interfaces;

public interface IAuthService
{
    Task<Result<AuthResponse>> RegisterAsync(RegisterRequest request);
    Task<Result<AuthResponse>> LoginAsync(LoginRequest request);
}