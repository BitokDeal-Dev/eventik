namespace Eventik.Application.DTOs.Users;

public record CreateUserRequest(string Email, string FirstName, string LastName, string Password, string City);