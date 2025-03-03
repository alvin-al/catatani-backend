/*
  Warnings:

  - You are about to drop the `SubField` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubField" DROP CONSTRAINT "SubField_field_id_fkey";

-- DropForeignKey
ALTER TABLE "farmer_attendance" DROP CONSTRAINT "farmer_attendance_sub_field_id_fkey";

-- DropForeignKey
ALTER TABLE "harvest" DROP CONSTRAINT "harvest_sub_field_id_fkey";

-- DropForeignKey
ALTER TABLE "material_usage" DROP CONSTRAINT "material_usage_sub_field_id_fkey";

-- DropTable
DROP TABLE "SubField";

-- CreateTable
CREATE TABLE "sub_field" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "area" DECIMAL(10,2) NOT NULL,
    "field_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "sub_field_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "farmer_attendance" ADD CONSTRAINT "farmer_attendance_sub_field_id_fkey" FOREIGN KEY ("sub_field_id") REFERENCES "sub_field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_field" ADD CONSTRAINT "sub_field_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "harvest" ADD CONSTRAINT "harvest_sub_field_id_fkey" FOREIGN KEY ("sub_field_id") REFERENCES "sub_field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_sub_field_id_fkey" FOREIGN KEY ("sub_field_id") REFERENCES "sub_field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
