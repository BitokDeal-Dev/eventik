namespace Eventik.Application.DTOs.Auth.Request;

public record RegisterRequest(string Email, string Password, string Name);