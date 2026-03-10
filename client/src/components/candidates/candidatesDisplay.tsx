import Candidate from "./candidate";


 type candidateType = {
    id: number;
    nome: string;
    cidade: string;
    estado: string;
    imagem: string;
    competencias: string[];
    descricao: string;
    };

type Props = {
  candidates: candidateType[];
};

export default function CandidatesDisplay({ candidates }: Props) {
  return (
    <div className="flex flex-col gap-8 w-full">
      {candidates.map((candidate, index) => (
        <Candidate key={index} candidate={candidate} />
      ))}
    </div>
  );
}
