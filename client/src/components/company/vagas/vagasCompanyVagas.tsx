import VagaVagas from "./vagaVagas";


type VagaType = {
  name: string;
  cidade: string;
  postada: string;
  pcd: boolean;
  regime: string;
  contratacao: string;
  salario: string;
  descricao:string;
};

type Props = {
  vagas: VagaType[];
};

export default function VagasCompanyVagas({ vagas }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {vagas.map((vaga, index) => (
        <VagaVagas key={index} vaga={vaga} />
      ))}
    </div>
  );
}
