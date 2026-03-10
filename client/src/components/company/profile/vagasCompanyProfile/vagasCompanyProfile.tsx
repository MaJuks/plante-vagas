import VagaProfile from "./vagaProfile";

type VagaType = {
  name: string;
  cidade: string;
  postada: string;
  pcd: boolean;
  regime: string;
  contratacao: string;
  salario: string;
};

type Props = {
  vagas: VagaType[];
};

export default function VagasCompanyProfile({ vagas }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {vagas.map((vaga, index) => (
        <VagaProfile key={index} vaga={vaga} />
      ))}
    </div>
  );
}
