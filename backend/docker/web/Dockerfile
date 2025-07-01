FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY ["src/Eventik.sln", "./"]

COPY ["src/Eventik.API/Eventik.API.csproj", "Eventik.API/"]
COPY ["src/Eventik.Application/Eventik.Application.csproj", "Eventik.Application/"]
COPY ["src/Eventik.Infrastructure/Eventik.Infrastructure.csproj", "Eventik.Infrastructure/"]
COPY ["src/Eventik.Core/Eventik.Core.csproj", "Eventik.Core/"]
COPY ["src/Eventik.Shared/Eventik.Shared.csproj", "Eventik.Shared/"]

RUN mkdir -p {Eventik.Api,Eventik.Application,Eventik.Infrastructure,Eventik.Core,Eventik.Shared}

RUN dotnet restore "Eventik.sln"

COPY src/. .

WORKDIR "/src/Eventik.API"
RUN dotnet build "Eventik.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Eventik.API.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Eventik.API.dll"]