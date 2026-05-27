-- CreateTable
CREATE TABLE "CandidatoEtapa" (
    "id" SERIAL NOT NULL,
    "statusCandidato" BOOLEAN NOT NULL DEFAULT false,
    "dataConclusao" TIMESTAMP(3),
    "observacoes" TEXT,
    "candidatoId" INTEGER NOT NULL,
    "etapaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CandidatoEtapa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CandidatoEtapa" ADD CONSTRAINT "CandidatoEtapa_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "UserCandidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidatoEtapa" ADD CONSTRAINT "CandidatoEtapa_etapaId_fkey" FOREIGN KEY ("etapaId") REFERENCES "EtapaProcessoSeletivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
