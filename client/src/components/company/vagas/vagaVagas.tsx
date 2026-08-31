import { Briefcase, DollarSign, Tag, Clock, ArrowRight, Building2 } from "lucide-react";
import { useNavigate } from "react-router";
import { Vaga } from "@/services/vaga";
import { timeAgo } from "@/utils/timeAgo";

const VagaVagas = ({ vaga }: { vaga: Vaga }) => {
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
          {vaga.empresa?.logoUrl ? (
            <img src={vaga.empresa.logoUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <Building2 size={40} className="text-gray-300" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-deepGreen font-PrimaryFont group-hover:text-mediumGreen transition-colors duration-300 break-words">
            {vaga.nome}
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-3 text-gray-600 font-SecondFont text-sm">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-mediumGreen" />
              Postada há {timeAgo(vaga.createdAt)}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-paleGreen text-deepGreen px-3 py-1.5 rounded-full text-xs font-SecondFont font-medium">
            <Briefcase size={14} />
            {vaga.cargo}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-SecondFont font-medium">
            <DollarSign size={14} />
            {vaga.salario ? `R$ ${vaga.salario.toLocaleString("pt-BR")}` : "A combinar"}
          </span>
          {vaga.beneficios.map((b) => (
            <span
              key={b.id}
              className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-SecondFont font-medium"
            >
              <Tag size={14} />
              {b.nome}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm font-SecondFont leading-relaxed line-clamp-2 break-words">
          {vaga.descricao}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-stretch justify-center gap-3 w-full md:w-56 flex-shrink-0">
        <button
          onClick={() => navigate(`/gerenciar-processo?vagaId=${vaga.id}`)}
          className="flex items-center justify-center gap-2 bg-deepGreen text-white px-6 py-3 rounded-xl font-SecondFont font-semibold hover:bg-mediumGreen transition-colors duration-200"
        >
          Gerenciar processo
          <ArrowRight size={16} aria-hidden="true" />
        </button>
        <button
          onClick={() => navigate(`/criar-vaga?vagaId=${vaga.id}`)}
          className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-SecondFont font-medium hover:border-deepGreen hover:text-deepGreen transition-colors duration-200"
        >
          Editar vaga
        </button>
      </div>
    </div>
  );
};

export default VagaVagas;
