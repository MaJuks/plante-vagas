import { Users } from "lucide-react";
import { useNavigate } from "react-router";

type EtapaProps = {
  etapa: {
    id: number;
    inscritos: number;
    descricao: string;
    titulo: string;
  };
};

const Etapa = ({ etapa }: EtapaProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 font-SecondFont w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <h1 className="text-xl break-words">{etapa.titulo}</h1>

          <div className="flex gap-2 sm:gap-4 -translate-y-8 sm:translate-y-0">
            <span className="bg-MediumGray p-2 rounded">{etapa.id}</span>

            <div className="bg-lightBrown p-2 flex gap-2 items-center rounded">
              <Users />
              <span>{etapa.inscritos}</span>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <p className="p-4 sm:p-6 md:p-10 break-words">{etapa.descricao}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-end w-full">
          <button
            onClick={() => navigate("/candidatos")}
            className="bg-deepGreen text-sm text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-900 font-PrimaryFont w-full sm:w-auto"
          >
            ANALISAR RESPOSTAS
          </button>

          <button className="bg-red-900 text-sm text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-900 font-PrimaryFont w-full sm:w-auto">
            EXCLUIR ETAPA
          </button>
        </div>
      </div>
    </>
  );
};

export default Etapa;
