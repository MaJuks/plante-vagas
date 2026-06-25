/*
  Warnings:

  - Added the required column `vagaId` to the `EtapaProcessoSeletivo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EtapaProcessoSeletivo" DROP CONSTRAINT "EtapaProcessoSeletivo_processoSeletivoId_fkey";

-- AlterTable
ALTER TABLE "EtapaProcessoSeletivo" ADD COLUMN     "vagaId" INTEGER NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'aberta',
ALTER COLUMN "processoSeletivoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "EtapaProcessoSeletivo" ADD CONSTRAINT "EtapaProcessoSeletivo_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EtapaProcessoSeletivo" ADD CONSTRAINT "EtapaProcessoSeletivo_processoSeletivoId_fkey" FOREIGN KEY ("processoSeletivoId") REFERENCES "ProcessoSeletivo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
