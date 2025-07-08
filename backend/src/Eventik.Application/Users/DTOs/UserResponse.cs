namespace Eventik.Application.Users.DTOs;

public record UserResponse(Guid Id, string? Email, string? FirstName, string? LastName);