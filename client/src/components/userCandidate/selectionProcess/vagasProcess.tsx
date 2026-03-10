import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import feather from "feather-icons";
import { MapPin } from "lucide-react";
import { UserCheck } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Clipboard } from "lucide-react";
import { DollarSign } from "lucide-react";
const VagasProcess = (props: {
  name: string;
  cidade: string;
  postada: string;
  pcd: any;
  regime: string;
  contratacao: string;
  salario: any;
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    feather.replace(); // Substitui os ícones no DOM
  }, []);
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-6 rounded-lg w-full max-w-3xl mx-auto shadow-md">
      <div className="flex flex-col">
        <h1 className="font-PrimaryFont text-2xl font-bold mb-6">
          {props.name}
        </h1>

        <div className="flex flex-wrap font-SecondFont gap-4 font-bold my-2">
          <div className="flex items-center gap-1">
            <MapPin />
            <span>{props.cidade}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin />
            <span>Postada a {props.postada} horas</span>
          </div>
        </div>

        <hr className="text-deepGreen my-2" />

        <div className="flex flex-wrap font-SecondFont font-bold gap-4 my-2">
          {props.pcd && (
            <div className="flex items-center gap-1">
              <UserCheck />
              <span>PCD</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Briefcase />
            <span>{props.regime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clipboard />
            <span>{props.contratacao}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign />
            <span>{props.salario}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-6 md:mt-0">
        <button className="bg-deepGreen text-white px-6 py-3 rounded-lg hover:bg-green-900 font-semibold font-PrimaryFont">
          ACOMPANHAR PROCESSO
        </button>
      </div>
    </div>
  );
};

export default VagasProcess;
