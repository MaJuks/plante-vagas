-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "Curriculo" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curriculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperienciaProfissional" (
    "id" SERIAL NOT NULL,
    "cargo" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "inicioData" TIMESTAMP(3) NOT NULL,
    "fimData" TIMESTAMP(3),
    "empregoAtual" BOOLEAN NOT NULL DEFAULT false,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "ExperienciaProfissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormacaoAcademica" (
    "id" SERIAL NOT NULL,
    "nivelFormacao" TEXT NOT NULL,
    "grauFormacao" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "nomeInstituicao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "inicioData" TIMESTAMP(3) NOT NULL,
    "fimData" TIMESTAMP(3),
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "FormacaoAcademica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificado" (
    "id" SERIAL NOT NULL,
    "nomeInstituicao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "Certificado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Idioma" (
    "id" SERIAL NOT NULL,
    "idioma" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "Idioma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diferencial" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "Diferencial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Curriculo_usuarioId_key" ON "Curriculo"("usuarioId");

-- AddForeignKey
ALTER TABLE "Curriculo" ADD CONSTRAINT "Curriculo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "UserCandidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperienciaProfissional" ADD CONSTRAINT "ExperienciaProfissional_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormacaoAcademica" ADD CONSTRAINT "FormacaoAcademica_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificado" ADD CONSTRAINT "Certificado_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Idioma" ADD CONSTRAINT "Idioma_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diferencial" ADD CONSTRAINT "Diferencial_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
