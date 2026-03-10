import {
  MapPin,
  UserCheck,
  Briefcase,
  Clipboard,
  DollarSign,
} from "lucide-react";

type VagaProps = {
  vaga: {
    name: string;
    cidade: string;
    postada: string;
    pcd: boolean;
    regime: string;
    contratacao: string;
    salario: string;
  };
};

const VagaProfile = ({ vaga }: VagaProps) => {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-8 p-6 sm:p-8 md:p-12 rounded-lg w-full max-w-3xl mx-auto shadow-md">
      <div className="flex flex-col flex-1">
        <h1 className="font-PrimaryFont text-xl sm:text-2xl font-bold mb-4 break-words">
          {vaga.name}
        </h1>

        <div className="flex flex-wrap font-SecondFont gap-4 font-bold mb-2 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{vaga.cidade}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Postada há {vaga.postada} horas</span>
          </div>
        </div>

        <hr className="border-t border-deepGreen my-2" />

        <div className="flex flex-wrap font-SecondFont font-bold gap-4 text-sm">
          {vaga.pcd && (
            <div className="flex items-center gap-1">
              <UserCheck className="w-4 h-4" />
              <span>PCD</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            <span>{vaga.regime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clipboard className="w-4 h-4" />
            <span>{vaga.contratacao}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>{vaga.salario}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 w-full md:w-auto">
        <button className="bg-deepGreen text-white px-6 py-3 rounded-lg hover:bg-green-900 font-semibold font-PrimaryFont w-full md:w-auto">
          EDITAR VAGA
        </button>
        <button className="font-semibold font-PrimaryFont underline cursor-pointer mt-2">
          Ver candidatos
        </button>
      </div>
    </div>
  );
};

export default VagaProfile;
