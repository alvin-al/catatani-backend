/*
  Warnings:

  - You are about to drop the column `created_date` on the `farmer_attendance` table. All the data in the column will be lost.
  - You are about to drop the column `created_date` on the `harvest` table. All the data in the column will be lost.
  - You are about to drop the column `created_date` on the `proposal` table. All the data in the column will be lost.
  - You are about to drop the column `created_date` on the `sales` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `commodity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `farm_activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `farmer_attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `harvest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `master_uom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `material_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `material_usage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `process` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `purchasing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `wages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "commodity" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "farm_activity" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "farmer" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "farmer_attendance" DROP COLUMN "created_date",
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "fields" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "harvest" DROP COLUMN "created_date",
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "master_uom" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "material" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "material_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "material_usage" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "process" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "proposal" DROP COLUMN "created_date",
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "purchasing" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "role" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "created_date",
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "wages" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;
