import Etapa from "./etapa";

type etapaType = {
  id: number;
  titulo: string;
  inscritos: number;
  descricao: string;
};

type Props = {
  etapas: etapaType[];
};

export default function EtapasDisplay({ etapas }: Props) {
  return (
    <div className="flex flex-col gap-8 w-full">
      {etapas.map((etapa, index) => (
        <Etapa key={index} etapa={etapa} />
      ))}
    </div>
  );
}
