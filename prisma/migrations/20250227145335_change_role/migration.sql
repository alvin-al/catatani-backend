-- CreateTable
CREATE TABLE "commodity" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "commodity_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "farm_activity" (
    "name" VARCHAR(50) NOT NULL,
    "activity_description" TEXT,

    CONSTRAINT "farm_activity_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "farmer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" TEXT,
    "phone_number" VARCHAR(20),

    CONSTRAINT "farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farmer_attendance" (
    "id" SERIAL NOT NULL,
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "farmer_id" INTEGER,
    "field_id" INTEGER,
    "proposal_id" UUID,
    "activity_id" VARCHAR(50),
    "commodity_id" VARCHAR(50),
    "working_date" DATE,
    "start_time" TIME(6),
    "end_time" TIME(6),

    CONSTRAINT "farmer_attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fields" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "area" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "harvest" (
    "id" SERIAL NOT NULL,
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "harvest_date" TIMESTAMP(6),
    "proposal_id" UUID,
    "commodity_id" VARCHAR(50),
    "field_id" INTEGER,
    "farmer_id" INTEGER,
    "gross_harvest" DECIMAL(10,2),
    "net_harvest" DECIMAL(10,2),

    CONSTRAINT "harvest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_uom" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "master_uom_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "material" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "uom_id" VARCHAR(50),
    "category_id" VARCHAR(50),

    CONSTRAINT "material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_category" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "material_category_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "material_usage" (
    "id" SERIAL NOT NULL,
    "usage_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "field_id" INTEGER,
    "proposal_id" UUID,
    "commodity_id" VARCHAR(50),
    "farmer_id" INTEGER,
    "activity_id" VARCHAR(50),
    "material_id" INTEGER,
    "quantity" DECIMAL(10,2) NOT NULL,
    "uom_id" VARCHAR(50),

    CONSTRAINT "material_usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "process" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "process_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "proposal" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "commodity_id" VARCHAR(50),
    "field_id" INTEGER,
    "planting_distance" INTEGER,
    "population" INTEGER,
    "harvest_weight_per_tree" INTEGER,
    "planting_plan_date" TIMESTAMP(6),
    "harvest_plan_date" TIMESTAMP(6),

    CONSTRAINT "proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchasing" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "purchased_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "field_id" INTEGER,
    "proposal_id" UUID,
    "commodity_id" VARCHAR(50),
    "farmer_id" INTEGER,
    "activity_id" VARCHAR(50),
    "material_id" INTEGER,
    "quantity" DECIMAL(10,2) NOT NULL,
    "uom_id" VARCHAR(50),
    "amount" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "purchasing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "sales_date" TIMESTAMP(6),
    "commodity_id" VARCHAR(50),
    "proposal_id" UUID,
    "qty" DECIMAL(10,2) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "username" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "role_id" VARCHAR(50),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wages" (
    "id" SERIAL NOT NULL,
    "activity_id" VARCHAR(50),
    "amount" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "wages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "farmer_attendance" ADD CONSTRAINT "farmer_attendance_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "farm_activity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "farmer_attendance" ADD CONSTRAINT "farmer_attendance_commodity_id_fkey" FOREIGN KEY ("commodity_id") REFERENCES "commodity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "farmer_attendance" ADD CONSTRAINT "farmer_attendance_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "farmer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "farmer_attendance" ADD CONSTRAINT "farmer_attendance_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "farmer_attendance" ADD CONSTRAINT "farmer_attendance_proposal_id_fkey" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "harvest" ADD CONSTRAINT "harvest_commodity_id_fkey" FOREIGN KEY ("commodity_id") REFERENCES "commodity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "harvest" ADD CONSTRAINT "harvest_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "farmer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "harvest" ADD CONSTRAINT "harvest_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "harvest" ADD CONSTRAINT "harvest_proposal_id_fkey" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material" ADD CONSTRAINT "material_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "material_category"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material" ADD CONSTRAINT "material_uom_id_fkey" FOREIGN KEY ("uom_id") REFERENCES "master_uom"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "farm_activity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_commodity_id_fkey" FOREIGN KEY ("commodity_id") REFERENCES "commodity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "farmer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_proposal_id_fkey" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "material_usage" ADD CONSTRAINT "material_usage_uom_id_fkey" FOREIGN KEY ("uom_id") REFERENCES "master_uom"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "proposal" ADD CONSTRAINT "proposal_commodity_id_fkey" FOREIGN KEY ("commodity_id") REFERENCES "commodity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "proposal" ADD CONSTRAINT "proposal_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchasing" ADD CONSTRAINT "purchasing_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "farm_activity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchasing" ADD CONSTRAINT "purchasing_commodity_id_fkey" FOREIGN KEY ("commodity_id") REFERENCES "commodity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchasing" ADD CONSTRAINT "purchasing_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "farmer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchasing" ADD CONSTRAINT "purchasing_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchasing" ADD CONSTRAINT "purchasing_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchasing" ADD CONSTRAINT "purchasing_proposal_id_fkey" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "purchasing" ADD CONSTRAINT "purchasing_uom_id_fkey" FOREIGN KEY ("uom_id") REFERENCES "master_uom"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_commodity_id_fkey" FOREIGN KEY ("commodity_id") REFERENCES "commodity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_proposal_id_fkey" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wages" ADD CONSTRAINT "wages_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "farm_activity"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;
