-- DropForeignKey
ALTER TABLE "Curriculo" DROP CONSTRAINT "Curriculo_usuarioId_fkey";

-- AddForeignKey
ALTER TABLE "Curriculo" ADD CONSTRAINT "Curriculo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "UserCandidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
