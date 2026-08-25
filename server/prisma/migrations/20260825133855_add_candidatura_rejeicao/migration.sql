-- AlterTable
ALTER TABLE "CandidatoEtapa" ADD COLUMN     "motivoRejeicao" TEXT,
ADD COLUMN     "rejeitado" BOOLEAN NOT NULL DEFAULT false;
