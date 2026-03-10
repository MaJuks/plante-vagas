import { Check, MessageSquare } from "lucide-react";

type candidateProps = {
  candidate: {
    id: number;
    nome: string;
    cidade: string;
    estado: string;
    imagem: string;
    competencias: string[];
    descricao: string;
  };
};

const Candidate = ({ candidate }: candidateProps) => {
  return (
    <>
      <div className="bg-white p-6 sm:p-10 flex flex-col sm:flex-row font-SecondFont justify-between gap-10 sm:gap-0">
        <div className="flex flex-col gap-6 sm:gap-8 sm:flex-1">
          <div className="flex items-center gap-6 sm:gap-8">
            <img
              src={candidate.imagem}
              className="rounded-full w-24 sm:w-40"
              alt={candidate.nome}
            />
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl">{candidate.nome}</h1>
              <h2 className="text-sm sm:text-base">
                {candidate.cidade} - {candidate.estado}
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm max-w-full sm:max-w-[480px]">
            {candidate.descricao}
          </p>

          <div className="flex items-center gap-3">
            <div className="bg-paleGreen w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 shadow-2xl flex items-center justify-center">
              <Check />
            </div>
            <span className="cursor-pointer underline text-sm sm:text-base">
              VER CURRÍCULO
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start justify-center gap-6 sm:gap-8 sm:flex-[0.6]">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full">
            <div>
              <h2 className="text-lg sm:text-xl mb-2">Competências</h2>
              {candidate.competencias.map((comp, index) => (
                <p key={index} className="text-xs sm:text-sm text-gray-700">
                  • {comp}
                </p>
              ))}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl mb-2">Mensagens</h2>
              <div className="flex gap-2 items-center">
                <MessageSquare />
                <span className="cursor-pointer underline text-xs sm:text-sm">
                  Enviar mensagem
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-8 w-full justify-center sm:justify-start">
            <button className="bg-deepGreen text-xs sm:text-sm text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-900 font-PrimaryFont">
              SELECIONAR
            </button>

            <button className="bg-red-900 text-xs sm:text-sm text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-900 font-PrimaryFont">
              FORA DO PERFIL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidate;
