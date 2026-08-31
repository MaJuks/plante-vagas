import VagaProfile from "./vagaProfile";
import { Vaga } from "@/services/vaga";

export default function VagasCompanyProfile({
  vagas,
  onVagaExcluida,
}: {
  vagas: Vaga[];
  onVagaExcluida?: (id: number) => void;
}) {
  if (vagas.length === 0) {
    return (
      <p className="text-gray-500 text-center py-8">Nenhuma vaga cadastrada ainda.</p>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {vagas.map((vaga) => (
        <VagaProfile key={vaga.id} vaga={vaga} onExcluida={onVagaExcluida} />
      ))}
    </div>
  );
}
