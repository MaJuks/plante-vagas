/*
  Warnings:

  - Changed the type of `openingDate` on the `UserCompany` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserCompany" DROP COLUMN "openingDate",
ADD COLUMN     "openingDate" TIMESTAMP(3) NOT NULL;
