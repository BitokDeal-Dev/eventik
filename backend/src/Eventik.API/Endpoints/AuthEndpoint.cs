using Eventik.Application.DTOs.Auth.Request;
using Eventik.Application.DTOs.Auth.Response;
using Eventik.Application.Interfaces.Services;
using FluentResults;
using Microsoft.AspNetCore.Mvc;

namespace Eventik.API.Endpoints;

public static class AuthEndpoints
{
    public static void MapAuthEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/auth")
            .WithTags("Authentication");

        group.MapPost("/register", Register)
            .Produces<AuthResponse>(StatusCodes.Status201Created)
            .ProducesProblem(StatusCodes.Status400BadRequest);

        group.MapPost("/login", Login)
            .Produces<AuthResponse>()
            .ProducesProblem(StatusCodes.Status400BadRequest);
    }

    private static async Task<IResult> Register(
        [FromBody] RegisterRequest request,
        [FromServices] IAuthService authService)
    {
        var result = await authService.RegisterAsync(request);
        return HandleResult(result, StatusCodes.Status201Created);
    }

    private static async Task<IResult> Login(
        [FromBody] LoginRequest request,
        [FromServices] IAuthService authService)
    {
        var result = await authService.LoginAsync(request);
        return HandleResult(result);
    }

    private static IResult HandleResult<T>(Result<T> result, int successStatusCode = StatusCodes.Status200OK)
    {
        return result.IsSuccess
            ? Results.Json(result.Value, statusCode: successStatusCode)
            : Results.BadRequest(new ProblemDetails
            {
                Title = "Validation Error",
                Detail = string.Join(", ", result.Errors.Select(e => e.Message)),
                Status = StatusCodes.Status400BadRequest
            });
    }
}