/*
  Warnings:

  - You are about to drop the `fields` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "farmer_attendance" DROP CONSTRAINT "farmer_attendance_field_id_fkey";

-- DropForeignKey
ALTER TABLE "harvest" DROP CONSTRAINT "harvest_field_id_fkey";

-- DropForeignKey
ALTER TABLE "material_usage" DROP CONSTRAINT "material_usage_field_id_fkey";

-- DropForeignKey
ALTER TABLE "proposal" DROP CONSTRAINT "proposal_field_id_fkey";

-- DropForeignKey
ALTER TABLE "purchasing" DROP CONSTRAINT "purchasing_field_id_fkey";

-- AlterTable
ALTER TABLE "farmer_attendance" ADD COLUMN     "sub_field_id" INTEGER;

-- AlterTable
ALTER TABLE "harvest" ADD COLUMN     "sub_field_id" INTEGER;

-- AlterTable
ALTER TABLE "material_usage" ADD COLUMN     "sub_field_id" INTEGER;

-- DropTable
DROP TABLE "fields";

-- CreateTable
CREATE TABLE "Field" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "area" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubField" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "area" DECIMAL(10,2) NOT NULL,
    "field_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "SubField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "farmer_attendance" ADD CONSTRAINT "farmer_attendance_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "farmer_attendance" ADD CONSTRAINT "farmer_attendance_sub_field_id_fkey" FOREIGN KEY ("sub_field_id") REFERENCES "SubField"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SubField" ADD CONSTRAINT "SubField_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "harvest" ADD CONSTRAINT "harvest_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "harvest" ADD CONSTRAINT "harvest_sub_field_id_fkey" FOREIGN KEY ("sub_field_id") REFERENCES "SubField"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_sub_field_id_fkey" FOREIGN KEY ("sub_field_id") REFERENCES "SubField"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "proposal" ADD CONSTRAINT "proposal_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchasing" ADD CONSTRAINT "purchasing_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
