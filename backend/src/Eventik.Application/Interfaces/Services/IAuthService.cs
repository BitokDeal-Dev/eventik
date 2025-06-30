using Eventik.Application.DTOs.Auth.Request;
using Eventik.Application.DTOs.Auth.Response;
using FluentResults;

namespace Eventik.Application.Interfaces.Services;

public interface IAuthService
{
    Task<Result<AuthResponse>> RegisterAsync(RegisterRequest request);
    Task<Result<AuthResponse>> LoginAsync(LoginRequest request);
}