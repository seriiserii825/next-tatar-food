/*
  Warnings:

  - The values [VEGETABLE,FRUIT,MEAT,DAIRY,SPICES,OTHER] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - The values [GRAM,KILOGRAM,LITERS,MILLILITERS,PIECES] on the enum `Unit` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('vegetable', 'fruit', 'meat', 'dairy', 'spices', 'other');
ALTER TABLE "ingredients" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "public"."Category_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Unit_new" AS ENUM ('gram', 'kilogram', 'liters', 'milliliters', 'pieces');
ALTER TABLE "ingredients" ALTER COLUMN "unit" TYPE "Unit_new" USING ("unit"::text::"Unit_new");
ALTER TYPE "Unit" RENAME TO "Unit_old";
ALTER TYPE "Unit_new" RENAME TO "Unit";
DROP TYPE "public"."Unit_old";
COMMIT;
