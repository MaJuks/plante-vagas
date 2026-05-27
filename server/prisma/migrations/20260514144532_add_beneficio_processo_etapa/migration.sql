/*
  Warnings:

  - You are about to drop the column `beneficio` on the `Vaga` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vaga" DROP COLUMN "beneficio",
ADD COLUMN     "salario" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Beneficio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "vagaId" INTEGER NOT NULL,

    CONSTRAINT "Beneficio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessoSeletivo" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataDeNascimento" TIMESTAMP(3) NOT NULL,
    "genero" TEXT NOT NULL,
    "pessoaComDeficiencia" TEXT NOT NULL,
    "vagaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcessoSeletivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EtapaProcessoSeletivo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "processoSeletivoId" INTEGER NOT NULL,

    CONSTRAINT "EtapaProcessoSeletivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProcessoSeletivo_vagaId_key" ON "ProcessoSeletivo"("vagaId");

-- AddForeignKey
ALTER TABLE "Beneficio" ADD CONSTRAINT "Beneficio_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessoSeletivo" ADD CONSTRAINT "ProcessoSeletivo_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EtapaProcessoSeletivo" ADD CONSTRAINT "EtapaProcessoSeletivo_processoSeletivoId_fkey" FOREIGN KEY ("processoSeletivoId") REFERENCES "ProcessoSeletivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
