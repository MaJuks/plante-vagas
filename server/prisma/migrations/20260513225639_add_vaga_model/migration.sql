-- CreateTable
CREATE TABLE "Vaga" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "regime" TEXT NOT NULL,
    "contratacao" TEXT NOT NULL,
    "salario" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT,
    "pcd" BOOLEAN NOT NULL DEFAULT false,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "duracao" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vaga_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vaga" ADD CONSTRAINT "Vaga_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "UserCompany"("id") ON DELETE CASCADE ON UPDATE CASCADE;
