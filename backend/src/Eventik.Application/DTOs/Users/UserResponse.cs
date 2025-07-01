namespace Eventik.Application.DTOs.Users;

public record UserResponse(Guid Id, string? Email, string? FirstName, string? LastName);