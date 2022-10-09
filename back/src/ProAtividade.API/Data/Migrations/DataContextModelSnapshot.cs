﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProAtividade.API.Data;

namespace ProAtividade.api.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.10");

            modelBuilder.Entity("ProAtividade.API.Models.Atividade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Descricao")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Prioridade")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Titulo")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Atividades");
                });
#pragma warning restore 612, 618
        }
    }
}
