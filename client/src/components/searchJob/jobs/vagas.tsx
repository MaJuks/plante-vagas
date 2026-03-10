import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Briefcase, FileText, DollarSign, UserCheck, ArrowRight, Building2 } from "lucide-react";
import logoEmpresa from "../../../assets/images/empresas.png";

const Vagas = (props: {
  name: string;
  cidade: string;
  postada: string;
  pcd: any;
  regime: string;
  contratacao: string;
  salario: any;
  descricao: string;
  imagem: any;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="group bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl
               border border-gray-100 hover:border-mediumGreen/30
               transition-all duration-300 flex flex-col md:flex-row gap-6 max-w-4xl mx-auto"
    >
      {/* Company Logo */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-50 rounded-2xl flex items-center justify-center
                      border border-gray-100 group-hover:border-mediumGreen/30 transition-colors duration-300 overflow-hidden">
          {props.imagem ? (
            <img
              src={props.imagem}
              alt="Logo da empresa"
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <Building2 size={40} className="text-gray-300" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-deepGreen font-PrimaryFont group-hover:text-mediumGreen transition-colors duration-300">
            {props.name}
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-3 text-gray-600 font-SecondFont text-sm">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-mediumGreen" />
              {props.cidade}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-mediumGreen" />
              Postada há {props.postada} horas
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
          {props.pcd && (
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-SecondFont font-medium">
              <UserCheck size={14} />
              PCD
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 bg-paleGreen text-deepGreen px-3 py-1.5 rounded-full text-xs font-SecondFont font-medium">
            <Briefcase size={14} />
            {props.regime}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-SecondFont font-medium">
            <FileText size={14} />
            {props.contratacao}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-SecondFont font-medium">
            <DollarSign size={14} />
            {props.salario || "A combinar"}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm font-SecondFont leading-relaxed line-clamp-2">
          {props.descricao}
        </p>
      </div>

      {/* Action Button */}
      <div className="flex items-center justify-center md:justify-end">
        <button
          onClick={() => navigate("/Pagina-vaga")}
          className="group/btn flex items-center gap-2 bg-deepGreen text-white px-6 py-3 rounded-xl
                   font-SecondFont font-semibold hover:bg-mediumGreen transition-all duration-300
                   hover:shadow-lg hover:shadow-deepGreen/20 w-full md:w-auto justify-center"
        >
          VER VAGA
          <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default Vagas;
