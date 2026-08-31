import Etapa from "./etapa";
import { EtapaProcessoSeletivo } from "@/services/vaga";

type Props = {
  etapas: EtapaProcessoSeletivo[];
  vagaId: number;
  onExcluir: (id: number) => void;
  onAtualizar: (etapa: EtapaProcessoSeletivo) => void;
};

export default function EtapasDisplay({ etapas, vagaId, onExcluir, onAtualizar }: Props) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {etapas.map((etapa, index) => (
        <Etapa
          key={etapa.id}
          etapa={etapa}
          vagaId={vagaId}
          index={index + 1}
          podeExcluir={etapas.length > 1}
          onExcluir={onExcluir}
          onAtualizar={onAtualizar}
        />
      ))}
    </div>
  );
}
