import { useState } from "react";
import { Info } from "lucide-react";

const Processselective = ({ onProximo }: { onProximo: () => void }) => {
  const [nomeProcesso, setNomeProcesso] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [duracao, setDuracao] = useState("7 dias");
  const [descricao, setDescricao] = useState("");
  const maxCaracteres = 5000;

  const inputClass =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent transition-all duration-300";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 font-SecondFont">
        <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont mb-1">
          Processo seletivo
        </h1>
        <p className="text-gray-600 mb-6">
          Dê um nome e um período pro seu processo de seleção
        </p>

        <div className="flex items-start gap-3 bg-paleGreen/30 border border-paleGreen rounded-xl p-4 mb-8">
          <Info size={20} className="text-deepGreen flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-gray-700">
            Essas informações ainda não são salvas — o banco de dados não tem onde guardar
            nome, data de início ou duração do processo seletivo ainda (ver pendencias.txt,
            item 1). O que realmente fica salvo são as etapas, na próxima tela.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <label className={labelClass}>Nome do processo</label>
            <input
              type="text"
              value={nomeProcesso}
              onChange={(e) => setNomeProcesso(e.target.value)}
              placeholder="Ex: Seleção Engenheiro Agrônomo 2026"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Data de início</label>
              <input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Duração</label>
              <select
                value={duracao}
                onChange={(e) => setDuracao(e.target.value)}
                className={inputClass}
              >
                <option>3 dias</option>
                <option>7 dias</option>
                <option>10 dias</option>
                <option>15 dias</option>
                <option>20 dias</option>
                <option>30 dias</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Descrição do processo seletivo</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              maxLength={maxCaracteres}
              rows={6}
              className={`${inputClass} resize-none`}
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              {descricao.length}/{maxCaracteres}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onProximo}
              className="bg-deepGreen text-white px-8 py-3 rounded-xl font-SecondFont font-semibold hover:bg-mediumGreen transition-colors duration-200"
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processselective;
