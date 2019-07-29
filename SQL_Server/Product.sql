USE [master]
GO

CREATE DATABASE [ProductsDB]
GO




USE [ProductsDB]
GO


CREATE TABLE [dbo].[Product](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[Description] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)
) ON [PRIMARY]
GO




USE [ProductsDB]
GO

INSERT INTO [dbo].[Product]
           ([Name]
           ,[Price]
           ,[Description])
     VALUES
           ('Dog Shampoo'
           ,10.57
           ,'shampoo for long hair dogs')
GO

INSERT INTO [dbo].[Product]
           ([Name]
           ,[Price]
           ,[Description])
     VALUES
           ('WD Red 4 TB'
           ,150.99
           ,'NAS hard drive')
GO

INSERT INTO [dbo].[Product]
           ([Name]
           ,[Price]
           ,[Description])
     VALUES
           ('2018 Nissan Mourano'
           ,37866.99
           ,'Nissan Mourano AWD with Tech Package?')
GO



SELECT * INTO [ProductsDB].[dbo].[Product_Copy] FROM [ProductsDB].[dbo].[Product]
GO

USE [ProductsDB]
GO

DELETE FROM [dbo].[Product_Copy]
      WHERE ID=2
GO
