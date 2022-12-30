using Microsoft.EntityFrameworkCore;
using API_Tid.Data;
using API_Tid.Repositorios;
using API_Tid.Repositorios.Interfaces;
using Microsoft.Extensions.Options;
using System;

namespace API_Tid
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddCors();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddEntityFrameworkSqlServer()
                .AddDbContext<BaseDBContext>(
                    options => options.UseSqlServer(builder.Configuration.GetConnectionString("DataBase"))
            );

            builder.Services.AddScoped<IClientesRepositorio, ClientesRepositorio>();
            builder.Services.AddScoped<IPlanosRepositorio, PlanosRepositorio>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors(options =>
            {
                // options.WithOrigins("http://localhost:3000/");
                options.AllowAnyHeader();
                options.AllowAnyMethod();
                options.AllowAnyOrigin();
            });

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();


        }
    }
}