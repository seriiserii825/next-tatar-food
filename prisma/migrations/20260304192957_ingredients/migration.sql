-- CreateEnum
CREATE TYPE "Category" AS ENUM ('VEGETABLE', 'FRUIT', 'MEAT', 'DAIRY', 'SPICES', 'OTHER');

-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('GRAM', 'KILOGRAM', 'LITERS', 'MILLILITERS', 'PIECES');

-- CreateTable
CREATE TABLE "ingredients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "unit" "Unit" NOT NULL,
    "price_per_unit" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);
