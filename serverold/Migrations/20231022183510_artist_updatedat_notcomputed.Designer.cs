﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using melodiy.server.Data;

#nullable disable

namespace melodiy.server.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20231022183510_artist_updatedat_notcomputed")]
    partial class artist_updatedat_notcomputed
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("AlbumArtist", b =>
                {
                    b.Property<string>("ArtistsUID")
                        .HasColumnType("text");

                    b.Property<string>("ReleasesUID")
                        .HasColumnType("text");

                    b.HasKey("ArtistsUID", "ReleasesUID");

                    b.HasIndex("ReleasesUID");

                    b.ToTable("AlbumArtist");
                });

            modelBuilder.Entity("melodiy.server.Models.Album", b =>
                {
                    b.Property<string>("UID")
                        .HasColumnType("text");

                    b.Property<string>("CoverPath")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("Duration")
                        .HasColumnType("integer");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("ReleaseDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("SpotifyId")
                        .HasColumnType("text");

                    b.Property<int>("TotalTracks")
                        .HasColumnType("integer");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<DateTime?>("UpdatedAt")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("Verified")
                        .HasColumnType("boolean");

                    b.HasKey("UID")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.HasIndex("Id")
                        .IsUnique()
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.HasIndex("SpotifyId")
                        .IsUnique();

                    b.ToTable("Albums");
                });

            modelBuilder.Entity("melodiy.server.Models.Artist", b =>
                {
                    b.Property<string>("UID")
                        .HasColumnType("text");

                    b.Property<string>("CoverPath")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SpotifyId")
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("Verified")
                        .HasColumnType("boolean");

                    b.HasKey("UID")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.HasIndex("Id")
                        .IsUnique()
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.HasIndex("SpotifyId")
                        .IsUnique();

                    b.ToTable("Artists");
                });

            modelBuilder.Entity("melodiy.server.Models.Playlist", b =>
                {
                    b.Property<string>("UID")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ImagePath")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedAt")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("UID")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.HasIndex("Id")
                        .IsUnique()
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.HasIndex("UserId");

                    b.ToTable("Playlists");
                });

            modelBuilder.Entity("melodiy.server.Models.PlaylistSong", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("PlaylistUID")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SongUID")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedAt")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("PlaylistUID");

                    b.HasIndex("SongUID");

                    b.ToTable("PlaylistSongs");
                });

            modelBuilder.Entity("melodiy.server.Models.Song", b =>
                {
                    b.Property<string>("UID")
                        .HasColumnType("text");

                    b.Property<string>("Album")
                        .HasColumnType("text");

                    b.Property<string>("AlbumArtist")
                        .HasColumnType("text");

                    b.Property<string>("Artist")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CoverPath")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<int>("Duration")
                        .HasColumnType("integer");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Provider")
                        .HasColumnType("integer");

                    b.Property<DateTime>("ReleaseDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("SongPath")
                        .HasColumnType("text");

                    b.Property<string>("SpotifyId")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedAt")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("timestamp with time zone");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.Property<string>("YoutubeId")
                        .HasColumnType("text");

                    b.HasKey("UID")
                        .HasAnnotation("SqlServer:Clustered", false);

                    b.HasIndex("Id")
                        .IsUnique()
                        .HasAnnotation("SqlServer:Clustered", true);

                    b.HasIndex("SpotifyId")
                        .IsUnique();

                    b.HasIndex("UserId");

                    b.ToTable("Songs");
                });

            modelBuilder.Entity("melodiy.server.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<byte[]>("Password")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<byte[]>("Salt")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("AlbumArtist", b =>
                {
                    b.HasOne("melodiy.server.Models.Artist", null)
                        .WithMany()
                        .HasForeignKey("ArtistsUID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("melodiy.server.Models.Album", null)
                        .WithMany()
                        .HasForeignKey("ReleasesUID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("melodiy.server.Models.Playlist", b =>
                {
                    b.HasOne("melodiy.server.Models.User", "User")
                        .WithMany("Playlists")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("melodiy.server.Models.PlaylistSong", b =>
                {
                    b.HasOne("melodiy.server.Models.Playlist", "Playlist")
                        .WithMany("PlaylistSongs")
                        .HasForeignKey("PlaylistUID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("melodiy.server.Models.Song", "Song")
                        .WithMany("PlaylistSongs")
                        .HasForeignKey("SongUID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Playlist");

                    b.Navigation("Song");
                });

            modelBuilder.Entity("melodiy.server.Models.Song", b =>
                {
                    b.HasOne("melodiy.server.Models.User", "User")
                        .WithMany("Songs")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("melodiy.server.Models.Playlist", b =>
                {
                    b.Navigation("PlaylistSongs");
                });

            modelBuilder.Entity("melodiy.server.Models.Song", b =>
                {
                    b.Navigation("PlaylistSongs");
                });

            modelBuilder.Entity("melodiy.server.Models.User", b =>
                {
                    b.Navigation("Playlists");

                    b.Navigation("Songs");
                });
#pragma warning restore 612, 618
        }
    }
}