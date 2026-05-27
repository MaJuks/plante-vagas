import Etapa from "./etapa";
import { EtapaProcessoSeletivo } from "@/services/vaga";

type Props = {
  etapas: EtapaProcessoSeletivo[];
  onExcluir: (id: number) => void;
  onAtualizar: (etapa: EtapaProcessoSeletivo) => void;
};

export default function EtapasDisplay({ etapas, onExcluir, onAtualizar }: Props) {
  return (
    <div className="flex flex-col gap-8 w-full">
      {etapas.map((etapa, index) => (
        <Etapa key={etapa.id} etapa={etapa} index={index + 1} onExcluir={onExcluir} onAtualizar={onAtualizar} />
      ))}
    </div>
  );
}
