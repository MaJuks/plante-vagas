import { Briefcase, DollarSign, Tag, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Vaga } from "@/services/vaga";
import { timeAgo } from "@/utils/timeAgo";

const VagaVagas = ({ vaga }: { vaga: Vaga }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col md:flex-row gap-8 p-6 sm:p-8 md:p-10 rounded-2xl w-full shadow-sm border border-gray-100 hover:border-mediumGreen/30 transition-colors duration-300">
      <div className="flex flex-col flex-1">
        <h2 className="font-PrimaryFont text-xl sm:text-2xl font-bold text-deepGreen mb-3 break-words">
          {vaga.nome}
        </h2>

        <div className="flex flex-wrap font-SecondFont gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-mediumGreen" aria-hidden="true" />
            <span>{vaga.cargo}</span>
          </div>
          {vaga.salario && (
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-mediumGreen" aria-hidden="true" />
              <span>R$ {vaga.salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-mediumGreen" aria-hidden="true" />
            <span>Postada há {timeAgo(vaga.createdAt)}</span>
          </div>
        </div>

        {vaga.beneficios.length > 0 && (
          <div className="flex flex-wrap font-SecondFont gap-2 mb-3">
            {vaga.beneficios.map((b) => (
              <span
                key={b.id}
                className="inline-flex items-center gap-1.5 bg-paleGreen/40 text-deepGreen px-3 py-1 rounded-full text-xs font-medium"
              >
                <Tag className="w-3 h-3" aria-hidden="true" />
                {b.nome}
              </span>
            ))}
          </div>
        )}

        <p className="font-SecondFont text-sm text-gray-600 leading-relaxed break-words line-clamp-2">
          {vaga.descricao}
        </p>
      </div>

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
