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

 Date: 21/12/2021 16:07:10
*/


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
INSERT INTO "hady"."Category" VALUES (1, 'Paket', 'PTR-', NULL, 'f', NULL, NULL, NULL);

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
  "CategoryId" int4 NOT NULL,
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
  "WareHouseId" int4,
  "totalDamage" int4 DEFAULT 0,
  "totalReturn" int4 DEFAULT 0
)
;

-- ----------------------------
-- Records of Product
-- ----------------------------
INSERT INTO "hady"."Product" VALUES (2142, 'Tissue Baby', 'PTR-', 0, 0, 1, NULL, 'Batang', 0, 0, 'f', 'f', 'f', '2021-12-21 15:36:25', '2021-12-21 15:36:25', NULL, 0, NULL, 0, 0);
INSERT INTO "hady"."Product" VALUES (285, 'DVD RINREI DRN-533K', 'DVD-RNR-533K', 158810, NULL, 23, NULL, 'Pcs', -19, 0, 'f', 't', 'f', '2021-03-01 17:28:31', '2021-12-21 15:29:20', '2021-12-21 15:29:20', -10, 2, 51, 74);

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
-- Table structure for ProductPrice
-- ----------------------------
DROP TABLE IF EXISTS "hady"."ProductPrice";
CREATE TABLE "hady"."ProductPrice" (
  "id" int8 NOT NULL DEFAULT nextval('"ProductPrice_id_seq"'::regclass),
  "price" int4 NOT NULL DEFAULT 0,
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
INSERT INTO "hady"."ProductPrice" VALUES (12810, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (14209, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (15608, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (17007, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (35193, 0, 285, 'f', NULL, NULL, NULL);
INSERT INTO "hady"."ProductPrice" VALUES (36593, 0, 285, 'f', NULL, NULL, NULL);
INSERT INTO "hady"."ProductPrice" VALUES (37991, 0, 285, 'f', NULL, NULL, NULL);
INSERT INTO "hady"."ProductPrice" VALUES (9747, 175000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (11302, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (18406, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (19805, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (21204, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (22603, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (25401, 182500, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (29013, 182500, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (30417, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (31816, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (33215, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40204, 180000, 285, 'f', NULL, '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40759, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40761, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40764, 185000, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40766, 185000, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40768, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40769, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40770, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40776, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40779, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40780, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (24002, 180000, 285, 'f', NULL, '2021-07-02 12:53:16', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (26801, 180000, 285, 'f', NULL, '2021-07-02 12:53:16', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (34610, 180000, 285, 'f', NULL, '2021-07-02 12:53:16', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40760, 182500, 285, 'f', '2021-07-02 12:50:56', '2021-07-02 12:53:16', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40765, 182500, 285, 'f', '2021-07-06 13:59:08', '2021-07-06 13:59:08', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40778, 182500, 285, 'f', '2021-07-05 17:58:59', '2021-07-05 17:58:59', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40777, 182500, 285, 'f', '2021-07-05 20:36:21', '2021-07-05 20:36:21', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40775, 182500, 285, 'f', '2021-07-05 22:34:32', '2021-07-05 22:34:32', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40774, 182500, 285, 'f', '2021-07-05 23:04:09', '2021-07-05 23:04:09', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40773, 182500, 285, 'f', '2021-07-05 23:35:57', '2021-07-05 23:35:57', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40772, 182500, 285, 'f', '2021-07-06 07:13:42', '2021-07-06 07:13:42', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40781, 177500, 285, 'f', '2021-07-06 07:40:24', '2021-07-06 07:40:24', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40771, 182500, 285, 'f', '2021-07-06 07:57:41', '2021-07-06 07:57:41', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40767, 182500, 285, 'f', '2021-07-06 13:59:08', '2021-07-06 13:59:08', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40763, 182500, 285, 'f', '2021-07-06 15:10:28', '2021-07-02 12:50:56', NULL);
INSERT INTO "hady"."ProductPrice" VALUES (40762, 182500, 285, 'f', '2021-07-06 15:28:01', '2021-07-02 12:50:56', NULL);

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
INSERT INTO "hady"."User" VALUES (19, 'ibez', 'mahmud', '085274778797', 'admin@gmail.com', 'admin@gmail.com', 't', NULL, '$2y$12$3MJw.AsOdtmllGiGaAG2o.87xug2weCZQHOzUupXfCaGfz640.O0C', 123456, NULL, 1, 'SUPERADMIN', 'f', '2021-06-10 07:42:19', '2021-06-10 07:44:42', NULL, 'f');

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
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"hady"."Bank_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."Category_id_seq"
OWNED BY "hady"."Category"."id";
SELECT setval('"hady"."Category_id_seq"', 38, true);

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
ALTER SEQUENCE "hady"."ProductPrice_id_seq"
OWNED BY "hady"."ProductPrice"."id";
SELECT setval('"hady"."ProductPrice_id_seq"', 85952, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "hady"."Product_id_seq"
OWNED BY "hady"."Product"."id";
SELECT setval('"hady"."Product_id_seq"', 2143, true);

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
-- Primary Key structure for table Category
-- ----------------------------
ALTER TABLE "hady"."Category" ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table LogActivity
-- ----------------------------
ALTER TABLE "hady"."LogActivity" ADD CONSTRAINT "LogActivity_pkey" PRIMARY KEY ("id");

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
-- Foreign Keys structure for table LogActivity
-- ----------------------------
ALTER TABLE "hady"."LogActivity" ADD CONSTRAINT "User" FOREIGN KEY ("createdBy") REFERENCES "hady"."User" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ProductImages
-- ----------------------------
ALTER TABLE "hady"."ProductImages" ADD CONSTRAINT "ProductImages" FOREIGN KEY ("ProductId") REFERENCES "hady"."Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ProductPrice
-- ----------------------------
ALTER TABLE "hady"."ProductPrice" ADD CONSTRAINT "Product" FOREIGN KEY ("ProductId") REFERENCES "hady"."Product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

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
