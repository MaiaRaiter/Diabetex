USE [Diabetex]
GO
/****** Object:  Table [dbo].[AccesoProducto]    Script Date: 11/8/2023 09:51:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccesoProducto](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[FechaAcceso] [datetime] NULL,
	[Favorito] [bit] NULL,
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
/****** Object:  Table [dbo].[Carpeta]    Script Date: 11/8/2023 09:51:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Carpeta](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
 CONSTRAINT [PK_Carpetas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CarpetaXUsuario]    Script Date: 11/8/2023 09:51:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarpetaXUsuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdProducto] [int] NULL,
	[IdCarpeta] [int] NULL,
	[IdUsuario] [int] NOT NULL,
 CONSTRAINT [PK_CarpetaXProducto] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Etiquetas]    Script Date: 11/8/2023 09:51:36 ******/
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
/****** Object:  Table [dbo].[EtiquetaXProducto]    Script Date: 11/8/2023 09:51:36 ******/
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
/****** Object:  Table [dbo].[MeGustaXUsuario]    Script Date: 11/8/2023 09:51:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MeGustaXUsuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NULL,
	[IdProducto] [int] NULL,
	[NombreUsuario] [varchar](50) NULL,
	[CodigoBarra] [varchar](50) NULL,
 CONSTRAINT [PK_MeGustaXUsuario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Plan]    Script Date: 11/8/2023 09:51:36 ******/
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
/****** Object:  Table [dbo].[PreferenciaXUsuario]    Script Date: 11/8/2023 09:51:36 ******/
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
/****** Object:  Table [dbo].[Producto]    Script Date: 11/8/2023 09:51:36 ******/
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
/****** Object:  Table [dbo].[Usuario]    Script Date: 11/8/2023 09:51:36 ******/
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

INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (1, 1, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (2, 2, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (3, 4, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (4, 5, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (5, 2, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (6, 3, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (7, 3, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (8, 1, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (9, 4, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (10, 5, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (11, 2, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (12, 3, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (13, 4, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (14, 5, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (15, 5, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (16, 2, CAST(N'2023-08-08T00:00:00.000' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (17, 2, CAST(N'2023-08-08T23:56:24.267' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (18, 3, CAST(N'2023-08-08T23:56:55.957' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (19, 4, CAST(N'2023-08-08T23:57:00.400' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (20, 5, CAST(N'2023-08-08T23:57:07.490' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (21, 4, CAST(N'2023-08-08T23:57:11.260' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (22, 5, CAST(N'2023-08-08T23:57:19.253' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (23, 4, CAST(N'2023-08-08T23:57:23.587' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (24, 5, CAST(N'2023-08-08T23:57:27.447' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (25, 5, CAST(N'2023-08-08T23:57:31.733' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (26, 4, CAST(N'2023-08-08T23:57:35.687' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (27, 4, CAST(N'2023-08-08T23:57:39.140' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (28, 5, CAST(N'2023-08-08T23:57:41.873' AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (29, 5, CAST(N'2023-08-11T12:29:55.367' AS DateTime), 0, N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', NULL, N'Nutella')
INSERT [dbo].[AccesoProducto] ([Id], [IdUsuario], [FechaAcceso], [Favorito], [CodigoBarra], [Foto], [CantMeGusta], [Nombre]) VALUES (30, 5, CAST(N'2023-08-11T12:30:20.857' AS DateTime), 0, N'80135463', N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', NULL, N'Nutella')
SET IDENTITY_INSERT [dbo].[AccesoProducto] OFF
GO
SET IDENTITY_INSERT [dbo].[Carpeta] ON 

INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (1, N'Lunes')
INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (2, N'Gym')
INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (3, N'Para Ian')
INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (5, NULL)
INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (6, N'Gimnasio nuevo')
INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (7, N'gym nuevo')
INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (8, N'gym new')
INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (9, N'hola new')
INSERT [dbo].[Carpeta] ([Id], [Nombre]) VALUES (10, N'hola chau')
SET IDENTITY_INSERT [dbo].[Carpeta] OFF
GO
SET IDENTITY_INSERT [dbo].[CarpetaXUsuario] ON 

INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (6, 15, 2, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (7, 32, 2, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (9, 24, 2, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (10, 30, 2, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (11, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (12, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (13, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (14, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (15, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (16, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (17, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (18, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (19, NULL, NULL, 1)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (20, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (21, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (22, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (23, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (24, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (25, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (26, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (27, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (28, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (29, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (30, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (31, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (32, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (33, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (34, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (35, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (36, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (37, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (38, NULL, NULL, 2)
INSERT [dbo].[CarpetaXUsuario] ([Id], [IdProducto], [IdCarpeta], [IdUsuario]) VALUES (45, NULL, 10, 2)
SET IDENTITY_INSERT [dbo].[CarpetaXUsuario] OFF
GO
SET IDENTITY_INSERT [dbo].[Producto] ON 

INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (1, N'', N'Ingrédients blé complet 35,0%, chocolat en poudre 22,5% (sucre, cacao en poudre), farine de blé 17,0%, semoule de maïs, sirop de glucose, sucre, extrait de malt d''orge (orge, orge malté), contient de l''huile de tournesol et/ou de palme, carbonate de calcium, émulsifiant : lécithines, sel, arômes naturels, fer, vitamines B3, B5, D, B6, B1, B2 et B9, Peut contenir du lait et des fruits à coque,', N'430 g', NULL, N'Nestlé,Chocapic', 1, N'France,Rumilly,Haute-Savoie,Itancourt,Aisne,', 2.2396004, 0.77051126, 0.11010562, 0.25828336, 0.019530673, 0, 3.398031313, NULL, 73.6, 388, 4.8, 7.5, 8.8, 0.22, 2, 0.088, 22.4, NULL, N'7613034626844')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (2, N'Nutella', N'Azúcar, manteca de palma, AVELLANAS 13%, LECHE desnatada en polvo 8.7%, cacao desgrasado 7.4%, emulgentes (lecitinas (SOJA)), vainillina.', N'200 g', NULL, N'Ferrero', 1, N'', 2.7444684, 4.5534882, 0.17097517, 0.18005618, 0.017321188, 0, 7.666309138, NULL, 57.5, 539, 30.9, NULL, 6.3, 0.107, 10.6, 0.0428, 56.3, N'https://images.openfoodfacts.org/images/products/80135463/front_es.212.400.jpg', N'80135463')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (3, NULL, N'sucre, noisettes 20%, huiles végétales (tournesol, colza), lait écrémé en poudre, cacao maigre en poudre 5,5% beurre de cacao, émulsifiant : lécithine de tournesol, extrait de vanille. Peut contenir d''autres fruits à coque.', N'360 g', NULL, N'Bonne Maman', 1, N'', 2.7444684, 4.5534882, 0.17097517, 0.18005618, 0.017321188, 0, 7.666309138, NULL, 53, 551, 34, 3.3, 6.7, 0.1, 5.2, 0.04, 51, NULL, N'3608580065340')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (4, NULL, N'Lait écrémé, ferments lactiques (lait). Lait: Origine France', N'480 g', NULL, N'Danone', 1, N'france', 4.456254, 0.26259642, 0.26266115, 0.21150363, 0.03557378, 0.0066875618, 5.2352765418, NULL, 3.9, 57, 0.2, 0, 10, 0.1, 0.1, 0.04, 3.9, NULL, N'3033491454080')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (5, N'', N'water, almond (2,3%), calcium (tricalcium phosphate), sea salt, stabilisers (locust bean gum, gellan gum), emulsifier (lecithins (sunflower]), vitamins (b2, b12, e, d2),', N'1l', NULL, N'Alpro', 1, N'United Kingdom', 0.071461404, 0.06882513, 0.10010411, 0.11771991, 0.014644818, 0, 0.372755372, NULL, 0, 13, 1.1, 0.3, 0.4, 0.14, 0.1, 0.056, 0, N'https://images.openfoodfacts.org/images/products/541/118/811/2709/front_es.396.400.jpg', N'5411188112709')
INSERT [dbo].[Producto] ([Id], [Nombre], [Ingredientes], [Cantidad], [CantMeGusta], [Marca], [EspeciesAmenazadas], [LugarFabricacion], [HCAgricultura], [HCProcesado], [HCEmbalaje], [HCTransporte], [HCDistribución], [HCConsumo], [HCTotal], [NAlcohol100g], [NCarbohidratos100g], [NEnergia100g], [NGrasa100g], [NFibra100g], [NProteinas100g], [NSal100g], [NGrasasSaturadas100g], [NSodio100g], [NAzucar100g], [Foto], [CodigoBarra]) VALUES (6, NULL, N'Farine de blé, sucre de canne roux, huile de colza, sésame toasté 10,6%, germe de blé 5,4%, farine complète de blé 5,4%, arôme naturel, magnésium, émulsifiant : lécithines de colza, poudres à lever (tartrates de potassium, carbonates de sodium, carbonates d''ammonium), sel de mer, amidon de blé, vitamines (E, PP, B6, B1, B9).', N'230g', NULL, N'Gerblé', 1, N'France', 2.3889426, 0.22878446, 0.11014808, 0.13545355, 0.019530673, 0, 2.882859363, NULL, 64.3, 470, 18.3, 4.35, 10.4, 0.435, 1.74, 0.174, 17.4, NULL, N'3175680011480')
SET IDENTITY_INSERT [dbo].[Producto] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Gmail], [Contrasena], [Fecha], [Token], [TokenExpirationDate]) VALUES (1, N'Juan', NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Gmail], [Contrasena], [Fecha], [Token], [TokenExpirationDate]) VALUES (2, N'Julia', NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Gmail], [Contrasena], [Fecha], [Token], [TokenExpirationDate]) VALUES (3, N'Marcos', NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Gmail], [Contrasena], [Fecha], [Token], [TokenExpirationDate]) VALUES (4, N'Lucas', NULL, NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
