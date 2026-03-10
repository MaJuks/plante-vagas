import { useNavigate } from "react-router";
import EtapasDisplay from "./etapasDisplay";
type EtapaProcessoSeletivo = {
  id: number;
  titulo: string;
  inscritos: number;
  descricao: string;
};

const etapas: EtapaProcessoSeletivo[] = [
  {
    id: 1,
    titulo: "INSCRIÇÃO",
    inscritos: 150,
    descricao: "Candidatos preencheram o formulário de inscrição online.",
  },
  {
    id: 2,
    titulo: "TRIAGEM DE CURRÍCULOS",
    inscritos: 100,
    descricao: "Currículos foram avaliados com base nos requisitos da vaga.",
  },
  {
    id: 3,
    titulo: "ENTREVISTA TÉCNICA",
    inscritos: 40,
    descricao:
      "Candidatos participaram de uma entrevista focada em habilidades técnicas.",
  },
  {
    id: 4,
    titulo: "ENTREVISTA COMPORTAMENTAL",
    inscritos: 20,
    descricao:
      "Entrevista para avaliar o perfil comportamental e alinhamento com a cultura.",
  },
  {
    id: 5,
    titulo: "PROPOSTA",
    inscritos: 5,
    descricao: "Candidatos selecionados receberam uma proposta de contratação.",
  },
];
const MainManagementProcess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-paleGreen mt-20 font-SecondFont py-10 sm:py-15 gap-6 sm:gap-8 px-6 sm:px-0">
      <h1 className="text-2xl text-center max-w-[600px]">
        Etapas do processo seletivo - Auxiliar Comercial (Cascavel-PR)
      </h1>

      <button
        onClick={() => {
          navigate("/criar-vaga");
        }}
        className="bg-oliveGreen h-20 w-20 sm:h-30 sm:w-30 cursor-pointer rounded-lg text-4xl sm:text-6xl text-deepGreen shadow-md"
      >
        +
      </button>

      <EtapasDisplay etapas={etapas} />
    </div>
  );
};

export default MainManagementProcess;
