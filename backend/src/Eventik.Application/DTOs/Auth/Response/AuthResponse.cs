namespace Eventik.Application.DTOs.Auth.Response;

public record AuthResponse(string Token, Guid UserId, string Email);