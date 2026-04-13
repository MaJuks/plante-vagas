/*
  Warnings:

  - Made the column `certificate_name` on table `Certificado` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Certificado" ALTER COLUMN "certificate_name" SET NOT NULL;
