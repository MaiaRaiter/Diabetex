USE [master]
GO
/****** Object:  Database [Diabetex]    Script Date: 23/11/2023 10:39:10 ******/
CREATE DATABASE [Diabetex]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Diabetex', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Diabetex.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Diabetex_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Diabetex_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Diabetex] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Diabetex].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Diabetex] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Diabetex] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Diabetex] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Diabetex] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Diabetex] SET ARITHABORT OFF 
GO
ALTER DATABASE [Diabetex] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Diabetex] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Diabetex] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Diabetex] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Diabetex] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Diabetex] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Diabetex] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Diabetex] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Diabetex] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Diabetex] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Diabetex] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Diabetex] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Diabetex] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Diabetex] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Diabetex] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Diabetex] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Diabetex] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Diabetex] SET RECOVERY FULL 
GO
ALTER DATABASE [Diabetex] SET  MULTI_USER 
GO
ALTER DATABASE [Diabetex] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Diabetex] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Diabetex] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Diabetex] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Diabetex] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Diabetex', N'ON'
GO
ALTER DATABASE [Diabetex] SET QUERY_STORE = OFF
GO
USE [Diabetex]
GO
/****** Object:  User [Diabetex]    Script Date: 23/11/2023 10:39:10 ******/
CREATE USER [Diabetex] FOR LOGIN [Diabetex] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 23/11/2023 10:39:10 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Diabetex]
GO
/****** Object:  Table [dbo].[AccesoProducto]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccesoProducto](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[FechaAcceso] [datetime] NULL,
	[CodigoBarra] [varchar](50) NULL,
	[Foto] [varchar](max) NULL,
	[CantMeGusta] [int] NULL,
	[Nombre] [varchar](50) NULL,
 CONSTRAINT [PK_AccesoProducto] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Carpeta]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Carpeta](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Carpetas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CarpetaXUsuario]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarpetaXUsuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdProducto] [int] NULL,
	[IdCarpeta] [int] NULL,
 CONSTRAINT [PK_CarpetaXProducto] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Etiquetas]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Etiquetas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IAceitePalma] [varchar](50) NULL,
	[IVegano] [varchar](50) NULL,
	[IVegetariano] [varchar](50) NULL,
	[NGrasa] [varchar](50) NULL,
	[NGrasasSaturadas] [varchar](50) NULL,
	[NAzucares] [varchar](50) NULL,
	[NSal] [varchar](50) NULL,
	[CodigoBarra] [varchar](50) NULL,
 CONSTRAINT [PK_Etiquetas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EtiquetaXProducto]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EtiquetaXProducto](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdEtiqueta] [int] NULL,
	[IdProducto] [int] NULL,
 CONSTRAINT [PK_EtiquetaXProducto] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MeGustaXUsuario]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MeGustaXUsuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NULL,
	[IdProducto] [int] NULL,
 CONSTRAINT [PK_MeGustaXUsuario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Plan]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Plan](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Free] [bit] NULL,
	[Premium] [bit] NULL,
	[IdUsuario] [int] NOT NULL,
 CONSTRAINT [PK_Plan] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PreferenciaXUsuario]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PreferenciaXUsuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Notificacion] [int] NULL,
	[IdUsuario] [int] NOT NULL,
 CONSTRAINT [PK_PreferenciaXUsuario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Producto]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Producto](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Ingredientes] [varchar](max) NULL,
	[Cantidad] [varchar](50) NULL,
	[CantMeGusta] [int] NULL,
	[Marca] [varchar](50) NULL,
	[EspeciesAmenazadas] [bit] NULL,
	[LugarFabricacion] [varchar](max) NULL,
	[HCAgricultura] [float] NULL,
	[HCProcesado] [float] NULL,
	[HCEmbalaje] [float] NULL,
	[HCTransporte] [float] NULL,
	[HCDistribución] [float] NULL,
	[HCConsumo] [float] NULL,
	[HCTotal] [float] NULL,
	[NAlcohol100g] [float] NULL,
	[NCarbohidratos100g] [float] NULL,
	[NEnergia100g] [float] NULL,
	[NGrasa100g] [float] NULL,
	[NFibra100g] [float] NULL,
	[NProteinas100g] [float] NULL,
	[NSal100g] [float] NULL,
	[NGrasasSaturadas100g] [float] NULL,
	[NSodio100g] [float] NULL,
	[NAzucar100g] [float] NULL,
	[Foto] [varchar](max) NULL,
	[CodigoBarra] [varchar](50) NULL,
 CONSTRAINT [PK_Productos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 23/11/2023 10:39:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Apellido] [varchar](50) NULL,
	[Gmail] [varchar](320) NULL,
	[Contrasena] [varchar](20) NULL,
	[Fecha] [datetime] NULL,
	[Token] [varchar](50) NULL,
	[TokenExpirationDate] [varchar](50) NULL,
 CONSTRAINT [PK_Table_1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AccesoProducto] ON 

INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (30, 2, CAST(N'2023-08-11T12:30:20.857' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', NULL, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (31, 2, CAST(N'2023-08-30T19:51:34.563' AS DateTime), N'7798147780055', N'https://images.openfoodfacts.org/images/products/779/814/778/0055/front_es.24.400.jpg', 1000, N'bombones - FraNui')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (32, 2, CAST(N'2023-08-30T19:53:43.980' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (33, 2, CAST(N'2023-08-30T19:55:30.280' AS DateTime), N'7790040116610', N'https://images.openfoodfacts.org/images/products/779/004/011/6610/front_es.17.400.jpg', NULL, N'Alfajor Tofi Negro')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (34, 3, CAST(N'2023-08-30T19:57:06.763' AS DateTime), N'7613031154111', N'https://images.openfoodfacts.org/images/products/761/303/115/4111/front_es.13.400.jpg', NULL, N'Nescafé Gold')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (35, 2, CAST(N'2023-09-01T11:20:50.203' AS DateTime), N'77939234', N'https://images.openfoodfacts.org/images/products/77939234/front_es.28.400.jpg', NULL, N'Alfajor Terrabusi Clásico')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (38, 2, CAST(N'2023-09-01T11:57:35.210' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (39, 2, CAST(N'2023-09-01T11:57:35.820' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (40, 2, CAST(N'2023-09-01T11:57:35.997' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (41, 2, CAST(N'2023-09-01T11:57:36.150' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (44, 2, CAST(N'2023-09-01T11:57:41.260' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (81, 2, CAST(N'2023-09-01T13:06:31.407' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (84, 2, CAST(N'2023-09-01T13:09:33.963' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (85, 2, CAST(N'2023-09-01T13:13:35.360' AS DateTime), N'7795735000328', N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', NULL, N'Bizcocho Salado Don Satur')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (94, 2, CAST(N'2023-10-06T13:02:25.987' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (121, 2, CAST(N'2023-10-06T14:16:35.067' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (124, 2, CAST(N'2023-10-06T14:17:34.677' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (129, 2, CAST(N'2023-10-06T14:21:56.287' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (136, 2, CAST(N'2023-10-06T14:30:08.800' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (137, 2, CAST(N'2023-10-20T11:11:21.290' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (138, 2, CAST(N'2023-10-20T11:20:43.580' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (139, 2, CAST(N'2023-10-20T11:42:56.880' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (140, 2, CAST(N'2023-10-20T11:42:56.890' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (142, 2, CAST(N'2023-10-20T12:02:17.257' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (144, 2, CAST(N'2023-10-20T12:02:17.273' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (146, 2, CAST(N'2023-10-20T12:02:35.130' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (147, 2, CAST(N'2023-10-20T12:02:35.140' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (148, 2, CAST(N'2023-10-20T12:02:43.130' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (150, 2, CAST(N'2023-10-20T12:34:37.547' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (152, 2, CAST(N'2023-10-20T12:34:37.570' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (167, 2, CAST(N'2023-10-20T12:40:32.817' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (168, 2, CAST(N'2023-10-20T12:40:32.827' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (169, 2, CAST(N'2023-10-20T12:41:54.637' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (170, 2, CAST(N'2023-10-20T12:41:54.647' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (171, 2, CAST(N'2023-10-20T12:42:23.197' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (172, 2, CAST(N'2023-10-20T12:44:55.207' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (173, 2, CAST(N'2023-10-20T12:44:57.217' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (175, 2, CAST(N'2023-10-20T12:44:57.233' AS DateTime), N'5901234123457', NULL, 0, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (177, 2, CAST(N'2023-10-20T12:45:21.953' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (178, 2, CAST(N'2023-10-20T12:45:21.967' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (180, 2, CAST(N'2023-10-20T12:48:16.940' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (182, 2, CAST(N'2023-10-20T12:48:16.953' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (183, 2, CAST(N'2023-10-20T12:48:53.197' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (184, 2, CAST(N'2023-10-20T12:48:55.457' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (186, 2, CAST(N'2023-10-20T12:48:55.473' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (188, 2, CAST(N'2023-10-20T12:48:58.970' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (190, 2, CAST(N'2023-10-20T12:48:58.987' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (196, 2, CAST(N'2023-10-20T12:49:33.857' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (197, 2, CAST(N'2023-10-20T12:49:33.867' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (199, 2, CAST(N'2023-10-20T12:53:01.023' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (201, 2, CAST(N'2023-10-20T12:53:01.043' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (202, 2, CAST(N'2023-10-20T12:53:29.927' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (204, 2, CAST(N'2023-10-20T12:53:29.940' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (206, 2, CAST(N'2023-10-20T12:54:10.143' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (209, 2, CAST(N'2023-10-20T12:54:10.160' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (210, 2, CAST(N'2023-10-20T12:56:37.660' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (213, 2, CAST(N'2023-10-20T12:56:37.677' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (214, 2, CAST(N'2023-10-20T12:56:39.813' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (217, 2, CAST(N'2023-10-20T12:56:39.830' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (218, 2, CAST(N'2023-10-20T13:01:13.737' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (221, 2, CAST(N'2023-10-20T13:01:13.760' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (222, 2, CAST(N'2023-10-20T13:01:43.450' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (225, 2, CAST(N'2023-10-20T13:01:43.467' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (226, 2, CAST(N'2023-10-20T13:11:54.277' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (228, 2, CAST(N'2023-10-20T13:11:54.300' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (230, 2, CAST(N'2023-10-20T13:12:23.167' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (232, 2, CAST(N'2023-10-20T13:12:23.180' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (234, 2, CAST(N'2023-10-20T13:12:33.843' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (236, 2, CAST(N'2023-10-20T13:12:33.857' AS DateTime), N'5012345678900', N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', 0, N'Hair vitamines')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (237, 2, CAST(N'2023-11-23T11:03:02.927' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (238, 2, CAST(N'2023-11-23T11:03:02.943' AS DateTime), N'3017620425035', NULL, 0, N'')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (239, 2, CAST(N'2023-11-23T12:36:12.847' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (240, 2, CAST(N'2023-11-23T12:36:12.860' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (241, 2, CAST(N'2023-11-23T12:36:48.597' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (242, 2, CAST(N'2023-11-23T12:36:48.607' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (243, 2, CAST(N'2023-11-23T12:38:25.277' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (244, 2, CAST(N'2023-11-23T12:38:25.287' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (245, 2, CAST(N'2023-11-23T12:44:33.003' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (246, 2, CAST(N'2023-11-23T12:44:33.013' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (247, 2, CAST(N'2023-11-23T12:44:56.963' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (248, 2, CAST(N'2023-11-23T12:44:56.973' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (249, 2, CAST(N'2023-11-23T12:52:52.783' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (250, 2, CAST(N'2023-11-23T12:52:52.793' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (251, 2, CAST(N'2023-11-23T12:53:23.260' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (252, 2, CAST(N'2023-11-23T12:53:23.277' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (253, 2, CAST(N'2023-11-23T13:01:16.587' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (254, 2, CAST(N'2023-11-23T13:01:16.600' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (255, 2, CAST(N'2023-11-23T13:17:54.047' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (256, 2, CAST(N'2023-11-23T13:17:54.060' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (257, 2, CAST(N'2023-11-23T13:18:22.137' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (258, 2, CAST(N'2023-11-23T13:18:22.147' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (259, 2, CAST(N'2023-11-23T13:18:46.187' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (260, 2, CAST(N'2023-11-23T13:18:46.197' AS DateTime), N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', 4, N'Nutella')
SET IDENTITY_INSERT [dbo].[AccesoProducto] OFF
GO
SET IDENTITY_INSERT [dbo].[Carpeta] ON 

INSERT [dbo].[Carpeta] ([Id], [IdUsuario], [Nombre]) VALUES (1, 2, N'Lunes')
INSERT [dbo].[Carpeta] ([Id], [IdUsuario], [Nombre]) VALUES (2, 2, N'Gym')
INSERT [dbo].[Carpeta] ([Id], [IdUsuario], [Nombre]) VALUES (44, 2, N'Martes')
INSERT [dbo].[Carpeta] ([Id], [IdUsuario], [Nombre]) VALUES (45, 2, N'Dieta')
INSERT [dbo].[Carpeta] ([Id], [IdUsuario], [Nombre]) VALUES (46, 2, N'Para las vacaciones')
SET IDENTITY_INSERT [dbo].[Carpeta] OFF
GO
SET IDENTITY_INSERT [dbo].[CarpetaXUsuario] ON 

INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta]) VALUES (57, 2, 46)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta]) VALUES (61, 8, 44)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta]) VALUES (62, 9, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta]) VALUES (63, 10, 46)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta]) VALUES (64, 14, 46)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta]) VALUES (65, 28, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta]) VALUES (66, 20, 45)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta]) VALUES (67, 28, 45)
SET IDENTITY_INSERT [dbo].[CarpetaXUsuario] OFF
GO
SET IDENTITY_INSERT [dbo].[Etiquetas] ON 

INSERT [dbo].[Etiquetas] ([Id], [IAceitePalma], [IVegano], [IVegetariano], [NGrasa], [NGrasasSaturadas], [NAzucares], [NSal], [CodigoBarra]) VALUES (1, N'en:palm-oil', N'en:non-vegan', N'en:vegetarian-status-unknown', N'en:fat-in-high-quantity', N'en:saturated-fat-in-high-quantity', N'en:sugars-in-high-quantity', N'en:salt-in-low-quantity', N'3017620425035')
SET IDENTITY_INSERT [dbo].[Etiquetas] OFF
GO
SET IDENTITY_INSERT [dbo].[MeGustaXUsuario] ON 

INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (2, 2, 8)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (4, 3, 9)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (5, 4, 10)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (6, 1, 14)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (8, 3, 2)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (9, 4, 2)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (10, 1, 16)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (11, 2, 14)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (12, 3, 9)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (22, 1, 2)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (31, 2, 9)
INSERT [dbo].[MeGustaXUsuario] ([Id], [IdUsuario], [IdProducto]) VALUES (34, 2, 2)
SET IDENTITY_INSERT [dbo].[MeGustaXUsuario] OFF
GO
SET IDENTITY_INSERT [dbo].[Producto] ON 

INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (2, N'Nutella', N'Azúcar, manteca de palma, AVELLANAS 13%, LECHE desnatada en polvo 8.7%, cacao desgrasado 7.4%, emulgentes (lecitinas (SOJA)), vainillina.', N'200 g', 12, N'Ferrero', 1, N'', 2.7444684, 4.5534882, 0.17097517, 0.18005618, 0.017321188, 0, 7.666309138, NULL, 57.5, 539, 30.9, NULL, 6.3, 0.107, 10.6, 0.0428, 56.3, N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', N'80135463')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (8, N'Pan de molde grande', N'Harina de trigo, agua, levadura, aceite vegetal (girasol), sal, conservadores (E 282, E200), emulgentes (E471, E472e), vinagre de vino, harina de haba, almidón de trigo y maíz, agentes de tratamiento de la harina (E300, E341).', N'375 g', 19, N'Bimbo', 1, N'', 1.0452153, 0.31401024, 0.28166528, 0.11801454, 0.0048545734, 0, 1.7637599334, NULL, 45, 252, 2.7, 4.7, 9.8, 1.1, 0.5, 0.44, 3.8, N'https://images.openfoodfacts.org/images/products/841/260/001/2185/front_es.4.400.jpg', N'8412600012185')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (9, N'Frutigran Avena y Pasas', N'Harina de trigo enriquecida (hierro 0.0030%, niacina 0.0013%, vitamina B1 0.00063%, ácido fólico 0.00022%, vitamina B2 0.00013%), azúcar, aceite de girasol de alto oleico, avena arrollada, pasas de uva, almidón de maíz, jarabe de maíz, sal, emulsionante (monoglicéridos de ácidos grasos), regulador de la acidez (bicarbonato de sodio), leudante químico (bicarbonato de amonio), aromatizante natural de vainilla, aromatizante idéntico al natural de manteca, antioxidante (tocoferoles).', N'250 g', 100, N'Granix,Frutigran', 1, N'Buenos Aires,Argentina', 2.3889426, 0.22878446, 0.11014808, 0.13545355, 0.019530673, 0, 2.882859363, NULL, 68, 429, 14, 3.9, 7.7, 0.7, 1.8, 0.28, NULL, N'https://images.openfoodfacts.org/images/products/779/004/500/1188/front_es.55.400.jpg', N'7790045001188')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (10, N'Alfajor Terrabusi Clásico', N'dulce de leche [leche, azúcar, jarabe de glucosa, humectante (sorbitol), espesante (alginato de sodio), conservante (sorbato de potasio), aromatizante (vainilla)], harina de trigo enriquecida según ley 25630 (harina de trigo, ácido fólico, vitamina B1, Vitamina B2, niacina), azúcar, jarabe de maíz de alta fructosa, huevo, sal, leudantes químicos (bicarbonato de amonio, bicarbonato de sodio, polirricinoleato de poliglicerol), conservante (sorbato de potasio), aromatizante natural limón, aromatizante idéntico al natural (vainillina), aromatizante artificial vainilla', N'50 g', 51, N'Terrabusi', 1, N'Tigre,Buenos Aires,Argentina', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 59, 409, 15, 1.9, 7, 0.435, 8.4, 0.174, 40, N'https://images.openfoodfacts.org/images/products/77939234/front_es.28.400.jpg', N'77939234')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (14, N'Rocklets', N'CHOCOLATE CON LECHE 68% (AZÚCAR; MASA DE CACAO; LECHE ENTERA EN POLVO; MANTECA DE CACAO; GRASA VEGETAL EQUIVALENTE A LA MANTECA DE CACAO; LECHE DESCREMADA EN POLVO; EMULSIONANTES: LECITINA DE SOJA, POLIGLICEROL POLIRRICINOLEATO; AROMATIZANTE: VAINILLINA); AZÚCAR; ESTABILIZANTE: GOMA ARÁBIGA; GLASEANTE: CERA CARNAUBA; COLORANTES: DIÓXIDO DE TITANIO (E171), TARTRAZINA (E102), ROJO ALLURA (E129), AMARILLO OCASO (E110), AZUL BRILLANTE (E133), INDIGOTINA (E132). CONTIENE TARTRAZINA, LECHE Y DERIVADOS DE SOJA.', N'40 g', 1000, N'Arcor', 1, N'', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 14, 477, 3.9, 0, 1, 0.04, 2.3, 0.016, 14, N'https://images.openfoodfacts.org/images/products/779/058/032/7415/front_es.10.400.jpg', N'7790580327415')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (16, N'bombones', N'Frambuesas congeladas, chocolate con leche (Azúcar, manteca y masa de cacao, leche en polvo, arom, vainillina, emul, E322), chocolate blanco (azúcar, manteca de cacao, leche en polvo, arom, vainillina, emul, E322), CONTIENE LECHE, DERIVADO DE SOJA, PUEDE CONTENER TRAZAS DE MANI, PISTACHOS, AVELLANAS Y NUECES, FRAMBUESAS CONGELADAS, BANADAS EN CHOCOLATE BLANCO Y CHOCOLATE CON LECHE LIBRE DE GLUTEN Sin TAC Sin TACC 150gs', N'150g', 1001, N'FraNui,RapaNui', 1, N'Bariloche,Rio Negro,Argentina', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 40.8, 372, 21.7, 2.52, 4.48, 0, 4.48, 0, NULL, N'https://images.openfoodfacts.org/images/products/779/814/778/0055/front_es.24.400.jpg', N'7798147780055')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (18, N'Bizcocho Salado Don Satur', N'Harina de trigo enriquecida, grasa bovina refinada, agua, sal, azúcar.', N'200 g', NULL, N'Don Satur', 1, N'Ramos Mejia', 3.0064344, 0.23441268, 0.28818476, 0.13687933, 0.019530673, 0, 3.685441843, 0, 16, 155, 8.9, 0, 2.7, 0.4318, 4.1, 0.17272, 0, N'https://images.openfoodfacts.org/images/products/779/573/500/0328/front_es.17.400.jpg', N'7795735000328')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (19, N'Alfajor Tofi Negro', N'DULCE DE LECHE 47% (LECHE ENTERA; AZUCAR; JARABE DE GLUCOSA; HUMECTANTE: SORBITOL; ESTABILIZANTES: ALGINATO DE SODIO, CARRAGENINA, AGAR; CONSERVADOR: SORBATO DE POTASIÓ; AROMATIZANTE): HARINA DE TRIGO ENRIQUECIDA (HIERRO: 30 mg/kg: ACIDO FOLICO: 2,2 mg/kg; TIAMINA: 6.3 mg/kg; RIBOFLAVINA: 1,3 mg/kg; NIACINA: 13 mg/kg); BAÑO DE REPOSTERIA (EMULSIONANTES: LECITINA DE SOJA/SOYA, POLIGLICEROL POLIRRICINOLEATO); AZÚCAR; ACEITE DE GIRASOL ALTO OLEICO; JARABE DE GLUCOSA; ALMIDÓN; CACAO EN POLVO; YEMA DE HUEVO; SAL; LEUDANTES QUIMICOS: BICARBONATO DE AMONIO, BICARBONATO DE SODIO; EMULSIONANTES: MONO Y DIGLICERIDOS DE ACIDOS GRASOS, LECITINA DE SOJA/SOYA; MEJORADOR DE LA HARINA: METABISULFITO DE SODIO; CONSERVADOR: PROPIONATO DE CALCIO; AROMATIZANTES ART?FICIALES: VAINILLINA, AROMAS CHOCOLATE, LECHE CONDENSADA Y NARANJA. CONTIENE LECHE, DERIVADOS DE TRIGO, HUEVO Y SOJA/SOYA.', N'46 g', NULL, N'tofi', 1, N'Argentina', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 61, 392, 14, 1.6, 6.1, 0.275, 6.4, 0.11, 41, N'https://images.openfoodfacts.org/images/products/779/004/011/6610/front_es.17.400.jpg', N'7790040116610')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (20, N'Nescafé Gold', N'Café soluble, café molido 3%.', N'100 g', NULL, N'Nescafé,Nestlé', 1, N'Staffordshire,Reino Unido', 19.495674, 6.9985445, 0.10010411, 0.45621559, 0.015708527, 0, 27.066246727, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'https://images.openfoodfacts.org/images/products/761/303/115/4111/front_es.13.400.jpg', N'7613031154111')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (21, NULL, N'Farine de blé, sucre de canne roux, huile de colza, sésame toasté 10,6%, germe de blé 5,4%, farine complète de blé 5,4%, arôme naturel, magnésium, émulsifiant : lécithines de colza, poudres à lever (tartrates de potassium, carbonates de sodium, carbonates d''ammonium), sel de mer, amidon de blé, vitamines (E, PP, B6, B1, B9).', N'230g', NULL, N'Gerblé', 1, N'France', 2.3889426, 0.22878446, 0.11014808, 0.13545355, 0.019530673, 0, 2.882859363, NULL, 64.3, 470, 18.3, 4.35, 10.4, 0.435, 1.74, 0.174, 17.4, NULL, N'3175680011480')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (22, N'Presto pronta Polenta Instantánea', N'Harina de maíz precocida.', N'500 g', NULL, N'Presto Pronta,Arcor', 1, N'Arroyito,Córdoba,Argentina', 0.68192043, 0.5907792, 0.26539933, 0.1135113, 0.016099476, 0, 1.667709736, NULL, 78, 340, 0.8, 2.2, 7, 0, 0.3, 0, 0.5, N'https://images.openfoodfacts.org/images/products/779/058/066/0000/front_es.34.400.jpg', N'7790580660000')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (23, N'Criollitas (original)', N'Harina de trigo, grasa bovina, sal, extracto de malta (cebada), jarabe de glucosa, levadura, leudante químico/gasificante: bicarbonato de sodio, emulsionante/lecitina de soja', N'100 g', NULL, N'Bagley', 1, N'', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 69, 438, 13, NULL, 11, 1.1, 6, 0.44, 0.8, N'https://images.openfoodfacts.org/images/products/779/004/037/7707/front_es.43.400.jpg', N'7790040377707')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (24, N'', N'Sucre, huile de palme, NOISETTES 13%, LAIT écrémé en poudre 8,7%, cacao maigre 7,4%, émulsifiants: lécithines [SOJA]; vanilline. Sans gluten', N'1 kg', NULL, N'Ferrero', 1, N'France', 2.7444684, 4.5534882, 0.17097517, 0.18005618, 0.017321188, 0, 7.666309138, NULL, 57.5, 539, 30.9, 0, 6.3, 0.107, 10.6, 0.0428, 56.3, NULL, N'3017620425035')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (25, N'0', N'? ? 5901234123457 HE USA f C D&C medicine, te daily under the ochers, or dion. KRTURAL ONTAINER 30 100% NATURAL *** 100% NAT OF ORGANIC EHIGHEST T08% VATSRAL DAILY VALUE THE MADE IN MADE IN 85 MG 5OMG 40MG 20 MG 2AMG 15 MG 10 MG FDA', N'11 oz', NULL, N'eggo', 1, N'', 1.9473624, 0.22467015, 0.28819905, 0.12981117, 0.019530673, 0, 2.609573443, NULL, 6, 197, 18, NULL, 2.8, 2.1, 12, 0.84, 4.2, NULL, N'5901234123457')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (26, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (27, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (28, N'Hair vitamines', N'Sparkling water, pressed rhubarb juice (12%) pressed apple juice (8%), sugar, malic acid, vitamin C', N'250g', NULL, N'cawstonpress', 1, N'', 0.29805322, 0, 0.17736425, 0.11062475, 0.019530673, 0, 0.605572893, NULL, 1, 1, 10, NULL, 90, 5, 10, 2, 1, N'https://images.openfoodfacts.org/images/products/501/234/567/8900/front_es.14.400.jpg', N'5012345678900')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (29, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (30, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (31, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (32, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Producto] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Gmail], [Contrasena], [Fecha], [Token], [TokenExpirationDate]) VALUES (1, N'Juan', NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Gmail], [Contrasena], [Fecha], [Token], [TokenExpirationDate]) VALUES (2, N'Julia', NULL, NULL, N'nove', NULL, N'34b70070-4c46-4cdc-a6fd-90d374cfc682', N'2023-11-23T11:38:48.894Z')
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Gmail], [Contrasena], [Fecha], [Token], [TokenExpirationDate]) VALUES (3, N'Marcos', NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Gmail], [Contrasena], [Fecha], [Token], [TokenExpirationDate]) VALUES (4, N'Marcos', NULL, NULL, N'nove', NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
USE [master]
GO
ALTER DATABASE [Diabetex] SET  READ_WRITE 
GO
