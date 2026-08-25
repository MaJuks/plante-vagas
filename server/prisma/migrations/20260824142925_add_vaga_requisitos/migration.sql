-- CreateTable
CREATE TABLE "Requisito" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "vagaId" INTEGER NOT NULL,

    CONSTRAINT "Requisito_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Requisito" ADD CONSTRAINT "Requisito_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE CASCADE ON UPDATE CASCADE;
