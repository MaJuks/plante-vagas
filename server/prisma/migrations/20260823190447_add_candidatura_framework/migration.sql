-- AlterTable
ALTER TABLE "CandidatoEtapa" ADD COLUMN     "origem" TEXT NOT NULL DEFAULT 'interna';

-- AlterTable
ALTER TABLE "UserCompany" ADD COLUMN     "chaveIntegracao" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserCompany_chaveIntegracao_key" ON "UserCompany"("chaveIntegracao");
