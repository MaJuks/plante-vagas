/*
  Warnings:

  - You are about to drop the column `cpf` on the `ProcessoSeletivo` table. All the data in the column will be lost.
  - You are about to drop the column `dataDeNascimento` on the `ProcessoSeletivo` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `ProcessoSeletivo` table. All the data in the column will be lost.
  - You are about to drop the column `pessoaComDeficiencia` on the `ProcessoSeletivo` table. All the data in the column will be lost.
  - Added the required column `dataInicio` to the `ProcessoSeletivo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `ProcessoSeletivo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duracaoDias` to the `ProcessoSeletivo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `ProcessoSeletivo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProcessoSeletivo" DROP COLUMN "cpf",
DROP COLUMN "dataDeNascimento",
DROP COLUMN "genero",
DROP COLUMN "pessoaComDeficiencia",
ADD COLUMN     "dataInicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "duracaoDias" INTEGER NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
