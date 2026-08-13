-- CreateTable
CREATE TABLE "OperacaoAgricola" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nivelExperiencia" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "OperacaoAgricola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperacaoPecuaria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nivelExperiencia" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "OperacaoPecuaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperacaoFlorestal" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nivelExperiencia" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "OperacaoFlorestal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cultura" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nivelExperiencia" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "Cultura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maquina" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nivelExperiencia" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "Maquina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnologia" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nivelExperiencia" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "Tecnologia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OperacaoAgricola" ADD CONSTRAINT "OperacaoAgricola_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperacaoPecuaria" ADD CONSTRAINT "OperacaoPecuaria_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperacaoFlorestal" ADD CONSTRAINT "OperacaoFlorestal_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cultura" ADD CONSTRAINT "Cultura_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maquina" ADD CONSTRAINT "Maquina_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tecnologia" ADD CONSTRAINT "Tecnologia_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
