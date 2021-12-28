/*
 Navicat Premium Data Transfer

 Source Server         : HADY
 Source Server Type    : PostgreSQL
 Source Server Version : 110003
 Source Host           : 192.168.99.100:5432
 Source Catalog        : hady
 Source Schema         : hady

 Target Server Type    : PostgreSQL
 Target Server Version : 110003
 File Encoding         : 65001

 Date: 29/12/2021 01:08:31
*/


-- ----------------------------
-- Sequence structure for Article_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Article_id_seq";
CREATE SEQUENCE "hady"."Article_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Bank_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Bank_id_seq";
CREATE SEQUENCE "hady"."Bank_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Category_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Category_id_seq";
CREATE SEQUENCE "hady"."Category_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Company_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Company_id_seq";
CREATE SEQUENCE "hady"."Company_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for InvoiceDate_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."InvoiceDate_id_seq";
CREATE SEQUENCE "hady"."InvoiceDate_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for InvoiceItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."InvoiceItem_id_seq";
CREATE SEQUENCE "hady"."InvoiceItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for InvoicePayment_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."InvoicePayment_id_seq";
CREATE SEQUENCE "hady"."InvoicePayment_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for InvoicePiece_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."InvoicePiece_id_seq";
CREATE SEQUENCE "hady"."InvoicePiece_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for InvoiceReturnItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."InvoiceReturnItem_id_seq";
CREATE SEQUENCE "hady"."InvoiceReturnItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for InvoiceReturn_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."InvoiceReturn_id_seq";
CREATE SEQUENCE "hady"."InvoiceReturn_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Invoice_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Invoice_id_seq";
CREATE SEQUENCE "hady"."Invoice_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for LogActivity_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."LogActivity_id_seq";
CREATE SEQUENCE "hady"."LogActivity_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for MutationItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."MutationItem_id_seq";
CREATE SEQUENCE "hady"."MutationItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Mutation_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Mutation_id_seq";
CREATE SEQUENCE "hady"."Mutation_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Permission_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Permission_id_seq";
CREATE SEQUENCE "hady"."Permission_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ProductImages_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."ProductImages_id_seq";
CREATE SEQUENCE "hady"."ProductImages_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ProductItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."ProductItem_id_seq";
CREATE SEQUENCE "hady"."ProductItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ProductPackage_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."ProductPackage_id_seq";
CREATE SEQUENCE "hady"."ProductPackage_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ProductPrice_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."ProductPrice_id_seq";
CREATE SEQUENCE "hady"."ProductPrice_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Product_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Product_id_seq";
CREATE SEQUENCE "hady"."Product_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for PurchaseInvoiceItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."PurchaseInvoiceItem_id_seq";
CREATE SEQUENCE "hady"."PurchaseInvoiceItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for PurchaseInvoice_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."PurchaseInvoice_id_seq";
CREATE SEQUENCE "hady"."PurchaseInvoice_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for PurchaseOrderItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."PurchaseOrderItem_id_seq";
CREATE SEQUENCE "hady"."PurchaseOrderItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for PurchaseOrder_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."PurchaseOrder_id_seq";
CREATE SEQUENCE "hady"."PurchaseOrder_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for RolePermission_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."RolePermission_id_seq";
CREATE SEQUENCE "hady"."RolePermission_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Role_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Role_id_seq";
CREATE SEQUENCE "hady"."Role_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for SalesOrderItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."SalesOrderItem_id_seq";
CREATE SEQUENCE "hady"."SalesOrderItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for SalesOrder_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."SalesOrder_id_seq";
CREATE SEQUENCE "hady"."SalesOrder_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for StockCheckItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."StockCheckItem_id_seq";
CREATE SEQUENCE "hady"."StockCheckItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for StockCheck_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."StockCheck_id_seq";
CREATE SEQUENCE "hady"."StockCheck_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for StockItem_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."StockItem_id_seq";
CREATE SEQUENCE "hady"."StockItem_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Stock_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Stock_id_seq";
CREATE SEQUENCE "hady"."Stock_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for UserProfileRole_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."UserProfileRole_id_seq";
CREATE SEQUENCE "hady"."UserProfileRole_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for User_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."User_id_seq";
CREATE SEQUENCE "hady"."User_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Zone_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "hady"."Zone_id_seq";
CREATE SEQUENCE "hady"."Zone_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for Article
-- ----------------------------
DROP TABLE IF EXISTS "hady"."Article";
CREATE TABLE "hady"."Article" (
  "id" int8 NOT NULL DEFAULT nextval('"Article_id_seq"'::regclass),
  "title" varchar(200) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "status" varchar(255) COLLATE "pg_catalog"."default",
  "category" varchar(100) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "isDeleted" bool
)
;

-- ----------------------------
-- Records of Article
-- ----------------------------
INSERT INTO "hady"."Article" VALUES (10, 'sdsd', NULL, NULL, 'sde', '2021-12-29 00:19:05', '2021-12-29 00:19:05', NULL);
INSERT INTO "hady"."Article" VALUES (11, 'sdsd', NULL, NULL, 'dsd', '2021-12-29 00:30:01', '2021-12-29 00:30:01', NULL);
INSERT INTO "hady"."Article" VALUES (12, 'sd', NULL, 'dsd', 'sde', '2021-12-29 00:37:19', '2021-12-29 00:37:19', NULL);
INSERT INTO "hady"."Article" VALUES (13, 'sdsd', NULL, 'sdsd', 'sdsdsd', '2021-12-29 00:39:11', '2021-12-29 00:39:11', NULL);
INSERT INTO "hady"."Article" VALUES (14, 'ssd', NULL, 'sd', 'sde', '2021-12-29 00:49:23', '2021-12-29 00:49:23', NULL);
INSERT INTO "hady"."Article" VALUES (15, 'sd', NULL, 'sd', 'sd', '2021-12-29 00:50:23', '2021-12-29 00:50:23', NULL);

-- ----------------------------
-- Table structure for Category
-- ----------------------------
DROP TABLE IF EXISTS "hady"."Category";
CREATE TABLE "hady"."Category" (
  "id" int8 NOT NULL DEFAULT nextval('"Category_id_seq"'::regclass),
  "name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "code" varchar(8) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "isDeleted" bool NOT NULL DEFAULT false,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "deletedAt" timestamp(0)
)
;

-- ----------------------------
-- Records of Category
-- ----------------------------
INSERT INTO "hady"."Category" VALUES (40, 'Julianto', '989', NULL, 't', '2021-12-29 00:12:48', '2021-12-29 00:13:09', '2021-12-29 00:13:09');
INSERT INTO "hady"."Category" VALUES (39, 'memeysdk', '668006', NULL, 'f', '2021-12-22 08:11:26', '2021-12-29 00:33:52', NULL);

-- ----------------------------
-- Table structure for Daftar
-- ----------------------------
DROP TABLE IF EXISTS "hady"."Daftar";
CREATE TABLE "hady"."Daftar" (
  "NIK" varchar(255) COLLATE "pg_catalog"."default",
  "namapasien" varchar(255) COLLATE "pg_catalog"."default",
  "alamat" varchar(255) COLLATE "pg_catalog"."default",
  "tanggallahir" varchar(255) COLLATE "pg_catalog"."default",
  "telepon" varchar(255) COLLATE "pg_catalog"."default",
  "tanggalkunjungan" varchar(255) COLLATE "pg_catalog"."default",
  "politujuan" varchar(255) COLLATE "pg_catalog"."default",
  "keluhan" varchar(255) COLLATE "pg_catalog"."default",
  "jenispembayaran" varchar(255) COLLATE "pg_catalog"."default",
  "id" int4 NOT NULL
)
;

-- ----------------------------
-- Records of Daftar
-- ----------------------------

-- ----------------------------
-- Table structure for LogActivity
-- ----------------------------
DROP TABLE IF EXISTS "hady"."LogActivity";
CREATE TABLE "hady"."LogActivity" (
  "id" int8 NOT NULL DEFAULT nextval('"LogActivity_id_seq"'::regclass),
  "action" varchar(255) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "oldValue" json,
  "newValue" json,
  "createdBy" int4 NOT NULL,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "initial" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of LogActivity
-- ----------------------------
INSERT INTO "hady"."LogActivity" VALUES (63194, 'CREATE', 'admin Menambah kategori meme', NULL, '{"name":"meme","description":null,"code":"668006","updatedAt":"2021-12-22T01:11:26.000000Z","createdAt":"2021-12-22T01:11:26.000000Z","id":39}', 19, '2021-12-22 08:11:27', '2021-12-22 08:11:27', 'Category');
INSERT INTO "hady"."LogActivity" VALUES (63195, 'CREATE', 'Menambah produk ', NULL, '{"description":null,"sellingPrice":0,"purchasePrice":0,"typeUnit":"Lembar","totalStock":0,"minimumStock":0,"isReminder":false,"isDeleted":false,"productName":"TWEETER MINI VIPER CM-006","productCode":"PTR-3","CategoryId":39,"updatedAt":"2021-12-22T01:11:44.000000Z","createdAt":"2021-12-22T01:11:44.000000Z","id":2142}', 19, '2021-12-22 08:11:44', '2021-12-22 08:11:44', 'Product');
INSERT INTO "hady"."LogActivity" VALUES (63196, 'CREATE', 'Menambah produk ', NULL, '{"description":null,"sellingPrice":0,"purchasePrice":0,"typeUnit":"Batang","totalStock":0,"minimumStock":0,"isReminder":false,"isDeleted":false,"productName":"TWEETER MINI VIPER CM-006","productCode":"PTR-3w","CategoryId":39,"updatedAt":"2021-12-28T11:47:04.000000Z","createdAt":"2021-12-28T11:47:04.000000Z","id":2143}', 19, '2021-12-28 18:47:04', '2021-12-28 18:47:04', 'Product');
INSERT INTO "hady"."LogActivity" VALUES (63197, 'UPDATE', 'admin Memperbaharui kategori memey', '{"id":39,"name":"meme","code":"668006","description":null,"isDeleted":false,"createdAt":"2021-12-22T01:11:26.000000Z","updatedAt":"2021-12-22T01:11:26.000000Z","deletedAt":null}', '{"id":39,"name":"memey","code":"668006","description":null,"isDeleted":false,"createdAt":"2021-12-22T01:11:26.000000Z","updatedAt":"2021-12-28T17:12:13.000000Z","deletedAt":null}', 19, '2021-12-29 00:12:13', '2021-12-29 00:12:13', 'Category');
INSERT INTO "hady"."LogActivity" VALUES (63198, 'CREATE', 'admin Menambah kategori Julianto', NULL, '{"name":"Julianto","description":null,"code":"989","updatedAt":"2021-12-28T17:12:48.000000Z","createdAt":"2021-12-28T17:12:48.000000Z","id":40}', 19, '2021-12-29 00:12:48', '2021-12-29 00:12:48', 'Category');
INSERT INTO "hady"."LogActivity" VALUES (63199, 'DELETE', 'admin Menghapus kategori Julianto', NULL, NULL, 19, '2021-12-29 00:13:09', '2021-12-29 00:13:09', 'Category');
INSERT INTO "hady"."LogActivity" VALUES (63200, 'UPDATE', 'Memperbaharui produk ', '{"id":2142,"productName":"TWEETER MINI VIPER CM-006","productCode":"PTR-3","purchasePrice":0,"sellingPrice":0,"CategoryId":39,"description":null,"typeUnit":"Lembar","totalStock":0,"minimumStock":0,"isReminder":false,"isDeleted":false,"isProductPackage":false,"createdAt":"2021-12-22T01:11:44.000000Z","updatedAt":"2021-12-22T01:11:44.000000Z","deletedAt":null,"holdItem":0,"totalDamage":0,"totalReturn":0}', '{"id":2142,"productName":"TWEETER MINI VIPER CM-006e","productCode":"PTR-3","purchasePrice":0,"sellingPrice":0,"CategoryId":39,"description":null,"typeUnit":"Lembar","totalStock":0,"minimumStock":0,"isReminder":false,"isDeleted":false,"isProductPackage":false,"createdAt":"2021-12-22T01:11:44.000000Z","updatedAt":"2021-12-28T17:25:05.000000Z","deletedAt":null,"holdItem":0,"totalDamage":0,"totalReturn":0}', 19, '2021-12-29 00:25:05', '2021-12-29 00:25:05', 'Product');
INSERT INTO "hady"."LogActivity" VALUES (63201, 'UPDATE', 'Memperbaharui produk ', '{"id":2142,"productName":"TWEETER MINI VIPER CM-006e","productCode":"PTR-3","purchasePrice":0,"sellingPrice":0,"CategoryId":39,"description":null,"typeUnit":"Lembar","totalStock":0,"minimumStock":0,"isReminder":false,"isDeleted":false,"isProductPackage":false,"createdAt":"2021-12-22T01:11:44.000000Z","updatedAt":"2021-12-28T17:25:05.000000Z","deletedAt":null,"holdItem":0,"totalDamage":0,"totalReturn":0}', '{"id":2142,"productName":"TWEETER MINI VIPER CM-006ewe","productCode":"PTR-3","purchasePrice":0,"sellingPrice":0,"CategoryId":39,"description":null,"typeUnit":"Lembar","totalStock":0,"minimumStock":0,"isReminder":false,"isDeleted":false,"isProductPackage":false,"createdAt":"2021-12-22T01:11:44.000000Z","updatedAt":"2021-12-28T17:25:35.000000Z","deletedAt":null,"holdItem":0,"totalDamage":0,"totalReturn":0}', 19, '2021-12-29 00:25:35', '2021-12-29 00:25:35', 'Product');
INSERT INTO "hady"."LogActivity" VALUES (63202, 'UPDATE', 'admin Memperbaharui kategori memeysd', '{"id":39,"name":"memey","code":"668006","description":null,"isDeleted":false,"createdAt":"2021-12-22T01:11:26.000000Z","updatedAt":"2021-12-28T17:12:13.000000Z","deletedAt":null}', '{"id":39,"name":"memeysd","code":"668006","description":null,"isDeleted":false,"createdAt":"2021-12-22T01:11:26.000000Z","updatedAt":"2021-12-28T17:26:08.000000Z","deletedAt":null}', 19, '2021-12-29 00:26:08', '2021-12-29 00:26:08', 'Category');
INSERT INTO "hady"."LogActivity" VALUES (63203, 'UPDATE', 'admin Memperbaharui kategori memeysdk', '{"id":39,"name":"memeysd","code":"668006","description":null,"isDeleted":false,"createdAt":"2021-12-22T01:11:26.000000Z","updatedAt":"2021-12-28T17:26:08.000000Z","deletedAt":null}', '{"id":39,"name":"memeysdk","code":"668006","description":null,"isDeleted":false,"createdAt":"2021-12-22T01:11:26.000000Z","updatedAt":"2021-12-28T17:33:52.000000Z","deletedAt":null}', 19, '2021-12-29 00:33:52', '2021-12-29 00:33:52', 'Category');
INSERT INTO "hady"."LogActivity" VALUES (63204, 'CREATE', 'Menambah produk ', NULL, '{"description":null,"sellingPrice":0,"purchasePrice":0,"typeUnit":"Keping","totalStock":0,"minimumStock":0,"isReminder":false,"isDeleted":false,"productName":"TWEETER MINI VIPER CM-00690q","productCode":"668006","CategoryId":39,"updatedAt":"2021-12-28T17:35:37.000000Z","createdAt":"2021-12-28T17:35:37.000000Z","id":2145}', 19, '2021-12-29 00:35:37', '2021-12-29 00:35:37', 'Product');
INSERT INTO "hady"."LogActivity" VALUES (33163, 'UPDATE', 'ibez Memperbaharui rute Route Q', '{"id":17,"name":"Route Q","description":"Tanjung Balai Karimun-Tanjung Batu","isDeleted":false,"createdAt":"2021-06-03T10:27:01.000000Z","updatedAt":"2021-08-09T10:56:45.000000Z","deletedAt":null,"repaymentDay":81}', '{"id":17,"name":"Route Q","description":"Tanjung Balai Karimun-Tanjung Batu","isDeleted":false,"createdAt":"2021-06-03T10:27:01.000000Z","updatedAt":"2021-08-09T10:57:40.000000Z","deletedAt":null,"repaymentDay":90}', 19, '2021-08-09 17:57:40', '2021-08-09 17:57:40', 'Zone');
INSERT INTO "hady"."LogActivity" VALUES (33161, 'UPDATE', 'ibez Memperbaharui rute Route Q', '{"id":17,"name":"Route Q","description":"Tanjung Balai Karimun-Tanjung Batu","isDeleted":false,"createdAt":"2021-06-03T10:27:01.000000Z","updatedAt":"2021-07-02T16:13:49.000000Z","deletedAt":null,"repaymentDay":81}', '{"id":17,"name":"Route Q","description":"Tanjung Balai Karimun-Tanjung Batu","isDeleted":false,"createdAt":"2021-06-03T10:27:01.000000Z","updatedAt":"2021-08-09T10:55:56.000000Z","deletedAt":null,"repaymentDay":90}', 19, '2021-08-09 17:55:56', '2021-08-09 17:55:56', 'Zone');
INSERT INTO "hady"."LogActivity" VALUES (33162, 'UPDATE', 'ibez Memperbaharui rute Route Q', '{"id":17,"name":"Route Q","description":"Tanjung Balai Karimun-Tanjung Batu","isDeleted":false,"createdAt":"2021-06-03T10:27:01.000000Z","updatedAt":"2021-08-09T10:55:56.000000Z","deletedAt":null,"repaymentDay":90}', '{"id":17,"name":"Route Q","description":"Tanjung Balai Karimun-Tanjung Batu","isDeleted":false,"createdAt":"2021-06-03T10:27:01.000000Z","updatedAt":"2021-08-09T10:56:45.000000Z","deletedAt":null,"repaymentDay":81}', 19, '2021-08-09 17:56:45', '2021-08-09 17:56:45', 'Zone');
INSERT INTO "hady"."LogActivity" VALUES (33164, 'UPDATE', 'ibez Memperbaharui rute Route Q', '{"id":17,"name":"Route Q","description":"Tanjung Balai Karimun-Tanjung Batu","isDeleted":false,"createdAt":"2021-06-03T10:27:01.000000Z","updatedAt":"2021-08-09T10:57:40.000000Z","deletedAt":null,"repaymentDay":90}', '{"id":17,"name":"Route Q","description":"Tanjung Balai Karimun-Tanjung Batu","isDeleted":false,"createdAt":"2021-06-03T10:27:01.000000Z","updatedAt":"2021-08-09T10:59:31.000000Z","deletedAt":null,"repaymentDay":81}', 19, '2021-08-09 17:59:31', '2021-08-09 17:59:31', 'Zone');
INSERT INTO "hady"."LogActivity" VALUES (39965, 'CREATE', 'Menambah pembayaran invoice 2021/06/0182/GRD', NULL, '{"paymentMethod":"CASH","InvoiceId":240,"payDate":"2021-08-25","totalPay":0,"useReturn":true,"note":null,"BankId":null,"giroBank":null,"giroDate":"2021-08-25T05:10:44.541Z","giroAmount":0,"giroNumber":null,"status":"PAID","paymentNumber":"KWI\/2021\/08\/0362","updatedAt":"2021-08-25T05:14:01.000000Z","createdAt":"2021-08-25T05:14:01.000000Z","id":388,"invoice":{"id":240,"invoiceNumber":"2021\/06\/0182\/GRD","PartnerId":350,"SalesId":8,"SalesOrderId":272,"orderDate":"2021-06-09","dueDate":"2021-07-10","paidDate":null,"totalItem":3,"totalPrice":1017500,"totalDiscount":0,"totalPiece":0,"totalPay":12000,"statusPayment":"UNPAID","typeInvoice":"GENERAL","notes":null,"terms":null,"rounding":0,"originalPrice":1017500,"isDeleted":false,"createdAt":"2021-06-10T04:23:00.000000Z","updatedAt":"2021-08-25T05:14:01.000000Z","deletedAt":null,"paymentDue":"2021-08-16","printDate":null,"printCount":0,"printBy":null,"cancelBy":null,"cancelNote":null,"isNewEdited":false,"isRequestEdit":false,"isEdited":false,"address":null,"useAddress":null,"cancelAt":null,"requestAt":null}}', 19, '2021-08-25 12:14:01', '2021-08-25 12:14:01', 'InvoicePayment');
INSERT INTO "hady"."LogActivity" VALUES (48364, 'CREATE', 'Menambah PO PO/2021/09/0026', NULL, '{"orderNumber":"PO\/2021\/09\/0026","PartnerId":600,"dueDate":"2021-12-13","totalItem":1,"totalPrice":0,"totalDiscount":0,"notes":null,"terms":null,"orderDate":"2021-09-14T08:37:26.230Z","signaturePath":null,"updatedAt":"2021-09-14T08:37:49.000000Z","createdAt":"2021-09-14T08:37:49.000000Z","id":281}', 19, '2021-09-14 15:37:49', '2021-09-14 15:37:49', 'PurchaseOrder');
INSERT INTO "hady"."LogActivity" VALUES (48365, 'CREATE', 'Menambah invoice pembelian PO/INV/2021/09/0026', NULL, '{"PartnerId":600,"PurchaseOrderId":281,"invoiceNumberSupplier":"test-01","invoiceNumber":"PO\/INV\/2021\/09\/0026","orderDate":"2021-09-14T00:00:00.000Z","dueDate":"2021-12-13T00:00:00.000Z","totalItem":1,"totalPrice":10000,"totalDiscount":0,"notes":null,"terms":null,"logisticPrice":null,"dateReceipt":null,"updatedAt":"2021-09-14T08:38:26.000000Z","createdAt":"2021-09-14T08:38:26.000000Z","id":280}', 19, '2021-09-14 15:38:26', '2021-09-14 15:38:26', 'PurchaseInvoice');
INSERT INTO "hady"."LogActivity" VALUES (52734, 'CREATE', 'Menambah produk ', NULL, '{"description":null,"sellingPrice":0,"purchasePrice":0,"typeUnit":"Paket","totalStock":0,"minimumStock":0,"isProductPackage":true,"isReminder":false,"isDeleted":false,"productName":"tes 22\/09","productCode":"PR-1632300663188","CategoryId":1,"WareHouseId":null,"updatedAt":"2021-09-22T08:51:07.000000Z","createdAt":"2021-09-22T08:51:07.000000Z","id":2048}', 19, '2021-09-22 15:51:07', '2021-09-22 15:51:07', 'Product');
INSERT INTO "hady"."LogActivity" VALUES (53190, 'UPDATE', 'Memperbaharui invoice return RJ/2021/09/0337', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-23","PartnerId":575,"SalesId":29,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-23T09:17:48.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-23T11:04:23.022Z","PartnerId":575,"SalesId":29,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-23T11:15:01.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', 19, '2021-09-23 18:15:01', '2021-09-23 18:15:01', 'InvoiceReturn');
INSERT INTO "hady"."LogActivity" VALUES (53191, 'UPDATE', 'Memperbaharui invoice return RJ/2021/09/0337', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-23","PartnerId":575,"SalesId":29,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-23T11:15:01.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-23T11:16:57.285Z","PartnerId":575,"SalesId":29,"totalItem":2,"totalPrice":270000,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-23T11:17:04.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', 19, '2021-09-23 18:17:04', '2021-09-23 18:17:04', 'InvoiceReturn');
INSERT INTO "hady"."LogActivity" VALUES (53579, 'UPDATE', 'Memperbaharui invoice return RJ/2021/09/0337', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-24","PartnerId":575,"SalesId":19,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-24T07:15:52.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-24T07:20:15.771Z","PartnerId":575,"SalesId":19,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-24T07:17:09.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', 19, '2021-09-24 14:17:09', '2021-09-24 14:17:09', 'InvoiceReturn');
INSERT INTO "hady"."LogActivity" VALUES (53578, 'UPDATE', 'Memperbaharui invoice return RJ/2021/09/0337', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-23","PartnerId":575,"SalesId":29,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-24T07:14:00.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-24T07:18:57.313Z","PartnerId":575,"SalesId":19,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-24T07:15:52.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', 19, '2021-09-24 14:15:52', '2021-09-24 14:15:52', 'InvoiceReturn');
INSERT INTO "hady"."LogActivity" VALUES (53593, 'UPDATE', 'Memperbaharui invoice return RJ/2021/09/0337', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-24","PartnerId":575,"SalesId":19,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-24T07:17:09.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-24T07:31:39.531Z","PartnerId":575,"SalesId":19,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-24T07:29:05.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', 19, '2021-09-24 14:29:05', '2021-09-24 14:29:05', 'InvoiceReturn');
INSERT INTO "hady"."LogActivity" VALUES (53595, 'UPDATE', 'Memperbaharui invoice return RJ/2021/09/0337', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-24","PartnerId":575,"SalesId":19,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-24T07:29:05.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', '{"id":683,"returnNumber":"RJ\/2021\/09\/0337","returnDate":"2021-09-24T07:33:08.460Z","PartnerId":575,"SalesId":19,"totalItem":1,"totalPrice":137500,"totalDiscount":0,"typeReturn":"CUSTOMER","usageStatus":false,"notes":null,"isDeleted":false,"createdAt":"2021-09-23T08:54:16.000000Z","updatedAt":"2021-09-24T07:29:50.000000Z","deletedAt":null,"status":null,"totalCredit":null,"totalUsage":0}', 19, '2021-09-24 14:29:50', '2021-09-24 14:29:50', 'InvoiceReturn');
INSERT INTO "hady"."LogActivity" VALUES (63193, 'CREATE', 'ibez Menambah kategori Romai Lidyawati', NULL, '{"name":"Romai Lidyawati","description":null,"code":"668006","updatedAt":"2021-12-21T23:22:27.000000Z","createdAt":"2021-12-21T23:22:27.000000Z","id":38}', 19, '2021-12-22 06:22:27', '2021-12-22 06:22:27', 'Category');

-- ----------------------------
-- Table structure for Pemeriksaan
-- ----------------------------
DROP TABLE IF EXISTS "hady"."Pemeriksaan";
CREATE TABLE "hady"."Pemeriksaan" (
  "id" int4 NOT NULL,
  "DaftarId" int4,
  "dokter" varchar(255) COLLATE "pg_catalog"."default",
  "diagnosa" varchar(255) COLLATE "pg_catalog"."default",
  "tindakan" varchar(255) COLLATE "pg_catalog"."default",
  "pengobatan" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of Pemeriksaan
-- ----------------------------

-- ----------------------------
-- Table structure for Permission
-- ----------------------------
DROP TABLE IF EXISTS "hady"."Permission";
CREATE TABLE "hady"."Permission" (
  "id" int8 NOT NULL DEFAULT nextval('"Permission_id_seq"'::regclass),
  "module" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "accessLevel" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of Permission
-- ----------------------------
INSERT INTO "hady"."Permission" VALUES (1, 'ADMINISTRATION', 'ACCESS');
INSERT INTO "hady"."Permission" VALUES (2, 'USERS', 'ACCESS');

-- ----------------------------
-- Table structure for Product
-- ----------------------------
DROP TABLE IF EXISTS "hady"."Product";
CREATE TABLE "hady"."Product" (
  "id" int8 NOT NULL DEFAULT nextval('"Product_id_seq"'::regclass),
  "productName" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "productCode" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "purchasePrice" int4 DEFAULT 0,
  "sellingPrice" int4 DEFAULT 0,
  "CategoryId" int4,
  "description" text COLLATE "pg_catalog"."default",
  "typeUnit" varchar(255) COLLATE "pg_catalog"."default",
  "totalStock" int4 NOT NULL DEFAULT 0,
  "minimumStock" int4 NOT NULL DEFAULT 0,
  "isReminder" bool DEFAULT false,
  "isDeleted" bool DEFAULT false,
  "isProductPackage" bool NOT NULL DEFAULT false,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "deletedAt" timestamp(0),
  "holdItem" int4 DEFAULT 0,
  "totalDamage" int4 DEFAULT 0,
  "totalReturn" int4 DEFAULT 0
)
;

-- ----------------------------
-- Records of Product
-- ----------------------------
INSERT INTO "hady"."Product" VALUES (2143, 'TWEETER MINI VIPER CM-006', 'PTR-3w', 0, 0, 39, NULL, 'Batang', 0, 0, 'f', 'f', 'f', '2021-12-28 18:47:04', '2021-12-28 18:47:04', NULL, 0, 0, 0);
INSERT INTO "hady"."Product" VALUES (2142, 'TWEETER MINI VIPER CM-006ewe', 'PTR-3', 0, 0, 39, NULL, 'Lembar', 0, 0, 'f', 'f', 'f', '2021-12-22 08:11:44', '2021-12-29 00:25:35', NULL, 0, 0, 0);
INSERT INTO "hady"."Product" VALUES (2145, 'TWEETER MINI VIPER CM-00690q', '668006', 0, 0, 39, NULL, 'Keping', 0, 0, 'f', 'f', 'f', '2021-12-29 00:35:37', '2021-12-29 00:35:37', NULL, 0, 0, 0);

-- ----------------------------
-- Table structure for ProductImages
-- ----------------------------
DROP TABLE IF EXISTS "hady"."ProductImages";
CREATE TABLE "hady"."ProductImages" (
  "id" int8 NOT NULL DEFAULT nextval('"ProductImages_id_seq"'::regclass),
  "path" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "ProductId" int4 NOT NULL,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0)
)
;

-- ----------------------------
-- Records of ProductImages
-- ----------------------------

-- ----------------------------
-- Table structure for ProductItem
-- ----------------------------
DROP TABLE IF EXISTS "hady"."ProductItem";
CREATE TABLE "hady"."ProductItem" (
  "id" int8 NOT NULL DEFAULT nextval('"ProductItem_id_seq"'::regclass),
  "ProductPackageId" int4 NOT NULL,
  "ProductId" int4 NOT NULL,
  "minimumItem" int4 DEFAULT 0,
  "bonusItem" int4 DEFAULT 0,
  "promoPrice" int4 NOT NULL DEFAULT 0,
  "isDeleted" bool NOT NULL DEFAULT false,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "deletedAt" timestamp(0)
)
;

-- ----------------------------
-- Records of ProductItem
-- ----------------------------

-- ----------------------------
-- Table structure for ProductPackage
-- ----------------------------
DROP TABLE IF EXISTS "hady"."ProductPackage";
CREATE TABLE "hady"."ProductPackage" (
  "id" int8 NOT NULL DEFAULT nextval('"ProductPackage_id_seq"'::regclass),
  "ProductId" int4 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "totalPrice" int4 NOT NULL DEFAULT 0,
  "image" varchar(255) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "isDeleted" bool NOT NULL DEFAULT false,
  "ZoneId" int4 NOT NULL,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "deletedAt" timestamp(0)
)
;

-- ----------------------------
-- Records of ProductPackage
-- ----------------------------

-- ----------------------------
-- Table structure for ProductPrice
-- ----------------------------
DROP TABLE IF EXISTS "hady"."ProductPrice";
CREATE TABLE "hady"."ProductPrice" (
  "id" int8 NOT NULL DEFAULT nextval('"ProductPrice_id_seq"'::regclass),
  "price" int4 NOT NULL DEFAULT 0,
  "ZoneId" int4 NOT NULL,
  "ProductId" int4 NOT NULL,
  "isDeleted" bool NOT NULL DEFAULT false,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "deletedAt" timestamp(0)
)
;

-- ----------------------------
-- Records of ProductPrice
-- ----------------------------

-- ----------------------------
-- Table structure for Role
-- ----------------------------
DROP TABLE IF EXISTS "hady"."Role";
CREATE TABLE "hady"."Role" (
  "id" int8 NOT NULL DEFAULT nextval('"Role_id_seq"'::regclass),
  "name" varchar(45) COLLATE "pg_catalog"."default",
  "label" varchar(45) COLLATE "pg_catalog"."default" NOT NULL,
  "notes" varchar(45) COLLATE "pg_catalog"."default",
  "group_by" varchar(45) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0)
)
;

-- ----------------------------
-- Records of Role
-- ----------------------------
INSERT INTO "hady"."Role" VALUES (1, 'Super Admin', 'SUPERADMIN', NULL, NULL, NULL, NULL);
INSERT INTO "hady"."Role" VALUES (2, 'Admin', 'ADMIN', NULL, NULL, NULL, NULL);
INSERT INTO "hady"."Role" VALUES (3, 'Sales', 'SALES', NULL, NULL, NULL, NULL);
INSERT INTO "hady"."Role" VALUES (4, 'Super Visor', 'SUPERVISOR', NULL, NULL, NULL, NULL);
INSERT INTO "hady"."Role" VALUES (5, 'Driver', 'DRIVER', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for RolePermission
-- ----------------------------
DROP TABLE IF EXISTS "hady"."RolePermission";
CREATE TABLE "hady"."RolePermission" (
  "RoleId" int8 NOT NULL,
  "PermissionId" int8 NOT NULL,
  "id" int4 NOT NULL DEFAULT nextval('"RolePermission_id_seq"'::regclass)
)
;

-- ----------------------------
-- Records of RolePermission
-- ----------------------------
INSERT INTO "hady"."RolePermission" VALUES (2, 1, 1);
INSERT INTO "hady"."RolePermission" VALUES (1, 1, 2);
INSERT INTO "hady"."RolePermission" VALUES (3, 2, 52);

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS "hady"."User";
CREATE TABLE "hady"."User" (
  "id" int8 NOT NULL DEFAULT nextval('"User_id_seq"'::regclass),
  "firstName" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
  "lastName" varchar(32) COLLATE "pg_catalog"."default",
  "contactNumber" varchar(20) COLLATE "pg_catalog"."default",
  "loginName" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "isActive" bool NOT NULL DEFAULT true,
  "email_verified_at" timestamp(0),
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "pin" int4,
  "remember_token" varchar(100) COLLATE "pg_catalog"."default",
  "roleId" int8,
  "typeUser" varchar(255) COLLATE "pg_catalog"."default" DEFAULT 'SALES'::character varying,
  "isDeleted" bool NOT NULL DEFAULT false,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "deletedAt" timestamp(0),
  "isNew" bool DEFAULT true
)
;

-- ----------------------------
-- Records of User
-- ----------------------------
INSERT INTO "hady"."User" VALUES (19, 'admin', 'mahmud', '082347343434', 'admin@gmail.com', 'admin@gmail.com', 't', NULL, '$2y$12$3MJw.AsOdtmllGiGaAG2o.87xug2weCZQHOzUupXfCaGfz640.O0C', 123456, NULL, 1, 'SUPERADMIN', 'f', '2021-06-10 07:42:19', '2021-06-10 07:44:42', NULL, 'f');

-- ----------------------------
-- Table structure for UserProfileRole
-- ----------------------------
DROP TABLE IF EXISTS "hady"."UserProfileRole";
CREATE TABLE "hady"."UserProfileRole" (
  "id" int8 NOT NULL DEFAULT nextval('"UserProfileRole_id_seq"'::regclass),
  "roleId" int4 NOT NULL,
  "UserId" int4 NOT NULL
)
;

-- ----------------------------
-- Records of UserProfileRole
-- ----------------------------

-- ----------------------------
-- Table structure for Zone
-- ----------------------------
DROP TABLE IF EXISTS "hady"."Zone";
CREATE TABLE "hady"."Zone" (
  "id" int8 NOT NULL DEFAULT nextval('"Zone_id_seq"'::regclass),
  "name" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "isDeleted" bool NOT NULL DEFAULT false,
  "createdAt" timestamp(0),
  "updatedAt" timestamp(0),
  "deletedAt" timestamp(0),
  "repaymentDay" int4 DEFAULT 0
)
;

-- ----------------------------
-- Records of Zone
-- ----------------------------

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."Article_id_seq"
OWNED BY "hady"."Article"."id";
SELECT setval('"hady"."Article_id_seq"', 16, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."Bank_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."Category_id_seq"
OWNED BY "hady"."Category"."id";
SELECT setval('"hady"."Category_id_seq"', 41, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."Company_id_seq"', 10, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."InvoiceDate_id_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."InvoiceItem_id_seq"', 14302, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."InvoicePayment_id_seq"', 2895, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."InvoicePiece_id_seq"', 193, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."InvoiceReturnItem_id_seq"', 2774, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."InvoiceReturn_id_seq"', 974, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."Invoice_id_seq"', 4023, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."LogActivity_id_seq"', 63205, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."MutationItem_id_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."Mutation_id_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."Permission_id_seq"', 99, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."ProductImages_id_seq"
OWNED BY "hady"."ProductImages"."id";
SELECT setval('"hady"."ProductImages_id_seq"', 1805, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."ProductItem_id_seq"
OWNED BY "hady"."ProductItem"."id";
SELECT setval('"hady"."ProductItem_id_seq"', 76, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."ProductPackage_id_seq"
OWNED BY "hady"."ProductPackage"."id";
SELECT setval('"hady"."ProductPackage_id_seq"', 63, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."ProductPrice_id_seq"
OWNED BY "hady"."ProductPrice"."id";
SELECT setval('"hady"."ProductPrice_id_seq"', 85952, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."Product_id_seq"
OWNED BY "hady"."Product"."id";
SELECT setval('"hady"."Product_id_seq"', 2146, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."PurchaseInvoiceItem_id_seq"', 841, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."PurchaseInvoice_id_seq"', 364, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."PurchaseOrderItem_id_seq"', 845, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."PurchaseOrder_id_seq"', 363, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."RolePermission_id_seq"', 27, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."Role_id_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."SalesOrderItem_id_seq"', 18087, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."SalesOrder_id_seq"', 3188, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."StockCheckItem_id_seq"', 71105, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."StockCheck_id_seq"', 106, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."StockItem_id_seq"', 635, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."Stock_id_seq"', 292, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."UserProfileRole_id_seq"
OWNED BY "hady"."UserProfileRole"."id";
SELECT setval('"hady"."UserProfileRole_id_seq"', 4, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."User_id_seq"
OWNED BY "hady"."User"."id";
SELECT setval('"hady"."User_id_seq"', 41, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."Zone_id_seq"
OWNED BY "hady"."Zone"."id";
SELECT setval('"hady"."Zone_id_seq"', 47, true);

-- ----------------------------
-- Primary Key structure for table Article
-- ----------------------------
ALTER TABLE "hady"."Article" ADD CONSTRAINT "Posts_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Category
-- ----------------------------
ALTER TABLE "hady"."Category" ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Daftar
-- ----------------------------
ALTER TABLE "hady"."Daftar" ADD CONSTRAINT "daftar_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table LogActivity
-- ----------------------------
ALTER TABLE "hady"."LogActivity" ADD CONSTRAINT "LogActivity_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Pemeriksaan
-- ----------------------------
ALTER TABLE "hady"."Pemeriksaan" ADD CONSTRAINT "pemeriksaan_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Permission
-- ----------------------------
ALTER TABLE "hady"."Permission" ADD CONSTRAINT "Permission_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Checks structure for table Product
-- ----------------------------
ALTER TABLE "hady"."Product" ADD CONSTRAINT "Product_typeUnit_check" CHECK ((("typeUnit")::text = ANY (ARRAY[('Unit'::character varying)::text, ('Buah'::character varying)::text, ('Pasang'::character varying)::text, ('Lembar'::character varying)::text, ('Keping'::character varying)::text, ('Batang'::character varying)::text, ('Bungkus'::character varying)::text, ('Butir'::character varying)::text, ('Roll'::character varying)::text, ('Dus'::character varying)::text, ('Paket'::character varying)::text, ('Pcs'::character varying)::text, ('Set'::character varying)::text, ('Kotak'::character varying)::text, ('Krat'::character varying)::text, ('Pasang'::character varying)::text, ('Kaleng'::character varying)::text])));

-- ----------------------------
-- Primary Key structure for table Product
-- ----------------------------
ALTER TABLE "hady"."Product" ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ProductImages
-- ----------------------------
ALTER TABLE "hady"."ProductImages" ADD CONSTRAINT "ProductImages_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ProductItem
-- ----------------------------
ALTER TABLE "hady"."ProductItem" ADD CONSTRAINT "ProductItem_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ProductPackage
-- ----------------------------
ALTER TABLE "hady"."ProductPackage" ADD CONSTRAINT "ProductPackage_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ProductPrice
-- ----------------------------
ALTER TABLE "hady"."ProductPrice" ADD CONSTRAINT "ProductPrice_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Role
-- ----------------------------
ALTER TABLE "hady"."Role" ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table RolePermission
-- ----------------------------
ALTER TABLE "hady"."RolePermission" ADD CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table User
-- ----------------------------
ALTER TABLE "hady"."User" ADD CONSTRAINT "user_email_unique" UNIQUE ("email");

-- ----------------------------
-- Checks structure for table User
-- ----------------------------
ALTER TABLE "hady"."User" ADD CONSTRAINT "User_typeUser_check" CHECK ((("typeUser")::text = ANY (ARRAY[('ADMIN'::character varying)::text, ('SALES'::character varying)::text, ('SUPERADMIN'::character varying)::text, ('SUPERVISOR'::character varying)::text, ('DRIVER'::character varying)::text])));

-- ----------------------------
-- Primary Key structure for table User
-- ----------------------------
ALTER TABLE "hady"."User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table UserProfileRole
-- ----------------------------
ALTER TABLE "hady"."UserProfileRole" ADD CONSTRAINT "UserProfileRole_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Zone
-- ----------------------------
ALTER TABLE "hady"."Zone" ADD CONSTRAINT "Zone_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table LogActivity
-- ----------------------------
ALTER TABLE "hady"."LogActivity" ADD CONSTRAINT "User" FOREIGN KEY ("createdBy") REFERENCES "hady"."User" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table Pemeriksaan
-- ----------------------------
ALTER TABLE "hady"."Pemeriksaan" ADD CONSTRAINT "Daftar" FOREIGN KEY ("DaftarId") REFERENCES "hady"."Daftar" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table Product
-- ----------------------------
ALTER TABLE "hady"."Product" ADD CONSTRAINT "Category" FOREIGN KEY ("CategoryId") REFERENCES "hady"."Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ProductImages
-- ----------------------------
ALTER TABLE "hady"."ProductImages" ADD CONSTRAINT "ProductImages" FOREIGN KEY ("ProductId") REFERENCES "hady"."Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ProductItem
-- ----------------------------
ALTER TABLE "hady"."ProductItem" ADD CONSTRAINT "Product" FOREIGN KEY ("ProductId") REFERENCES "hady"."Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "hady"."ProductItem" ADD CONSTRAINT "ProductPackage" FOREIGN KEY ("ProductPackageId") REFERENCES "hady"."ProductPackage" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ProductPackage
-- ----------------------------
ALTER TABLE "hady"."ProductPackage" ADD CONSTRAINT "Product" FOREIGN KEY ("ProductId") REFERENCES "hady"."Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "hady"."ProductPackage" ADD CONSTRAINT "Zone" FOREIGN KEY ("ZoneId") REFERENCES "hady"."Zone" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ProductPrice
-- ----------------------------
ALTER TABLE "hady"."ProductPrice" ADD CONSTRAINT "Product" FOREIGN KEY ("ProductId") REFERENCES "hady"."Product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "hady"."ProductPrice" ADD CONSTRAINT "Zone" FOREIGN KEY ("ZoneId") REFERENCES "hady"."Zone" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table RolePermission
-- ----------------------------
ALTER TABLE "hady"."RolePermission" ADD CONSTRAINT "Permission" FOREIGN KEY ("PermissionId") REFERENCES "hady"."Permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "hady"."RolePermission" ADD CONSTRAINT "Role" FOREIGN KEY ("RoleId") REFERENCES "hady"."Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table User
-- ----------------------------
ALTER TABLE "hady"."User" ADD CONSTRAINT "Role" FOREIGN KEY ("roleId") REFERENCES "hady"."Role" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table UserProfileRole
-- ----------------------------
ALTER TABLE "hady"."UserProfileRole" ADD CONSTRAINT "User" FOREIGN KEY ("UserId") REFERENCES "hady"."User" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
