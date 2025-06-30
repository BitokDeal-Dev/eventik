using Eventik.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Eventik.Infrastructure.Data;

public static class SeedData
{
    public static async Task Initialize(AppDbContext context, UserManager<UserEntity> userManager, RoleManager<IdentityRole<Guid>> roleManager)
    {
        // 1. Ensure the Admin role exists
        if (!await roleManager.RoleExistsAsync("Admin"))
        {
            await roleManager.CreateAsync(new IdentityRole<Guid>("Admin"));
        }

        // 2. Check if admin user already exists
        if (await userManager.FindByNameAsync("admin") != null)
            return;

        // 3. Create admin user with password
        var adminUser = new UserEntity
        {
            UserName = "admin",
            Email = "admin@example.com",
            FirstName = "Admin",
            LastName = "User",
            City = "SampleCity",
            EmailConfirmed = true
        };

        // 4. Create user with password
        var createResult = await userManager.CreateAsync(adminUser, "Admin123!");

        if (!createResult.Succeeded)
        {
            throw new Exception($"Admin user creation failed: {string.Join(", ", createResult.Errors)}");
        }

        // 5. Assign admin role
        var roleResult = await userManager.AddToRoleAsync(adminUser, "Admin");
        if (!roleResult.Succeeded)
        {
            throw new Exception($"Admin role assignment failed: {string.Join(", ", roleResult.Errors)}");
        }

        // 6. Verify the password was set
        var passwordCheck = await userManager.CheckPasswordAsync(adminUser, "Admin123!");
        if (!passwordCheck)
        {
            throw new Exception("Password verification failed after user creation");
        }
    }
}