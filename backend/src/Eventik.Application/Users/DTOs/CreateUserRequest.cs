namespace Eventik.Application.Users.DTOs;

public record CreateUserRequest(string Email, string FirstName, string LastName, string Password, string City);