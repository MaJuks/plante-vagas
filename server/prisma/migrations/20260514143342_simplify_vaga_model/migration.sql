/*
  Warnings:

  - You are about to drop the column `cidade` on the `Vaga` table. All the data in the column will be lost.
  - You are about to drop the column `contratacao` on the `Vaga` table. All the data in the column will be lost.
  - You are about to drop the column `dataInicio` on the `Vaga` table. All the data in the column will be lost.
  - You are about to drop the column `duracao` on the `Vaga` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Vaga` table. All the data in the column will be lost.
  - You are about to drop the column `pcd` on the `Vaga` table. All the data in the column will be lost.
  - You are about to drop the column `regime` on the `Vaga` table. All the data in the column will be lost.
  - You are about to drop the column `salario` on the `Vaga` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `Vaga` table. All the data in the column will be lost.
  - Added the required column `beneficio` to the `Vaga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargo` to the `Vaga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Vaga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vaga" DROP COLUMN "cidade",
DROP COLUMN "contratacao",
DROP COLUMN "dataInicio",
DROP COLUMN "duracao",
DROP COLUMN "estado",
DROP COLUMN "pcd",
DROP COLUMN "regime",
DROP COLUMN "salario",
DROP COLUMN "titulo",
ADD COLUMN     "beneficio" TEXT NOT NULL,
ADD COLUMN     "cargo" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
