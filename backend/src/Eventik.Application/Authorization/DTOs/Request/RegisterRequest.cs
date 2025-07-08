namespace Eventik.Application.Authorization.DTOs.Request;

public record RegisterRequest(string Email, string Password, string Name);