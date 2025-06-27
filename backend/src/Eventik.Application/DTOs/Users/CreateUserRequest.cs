namespace Eventik.Application.DTOs.Users;

public record CreateUserRequest(string Email, string Name, string Password, string City);