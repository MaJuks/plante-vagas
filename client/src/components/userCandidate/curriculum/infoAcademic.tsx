import { PlusCircle, Save, Trash2 } from "lucide-react";
export default function AcademicInfo() {
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr className="w-full" />
        <div className="my-6">
          <h1 className="text-xl md:text-2xl font-medium">
            Adicione suas informações acadêmicas
          </h1>
        </div>

        <div className="flex items-center mb-6">
          <button className="flex items-center gap-2 text-deepGreen hover:text-opacity-80 transition-colors">
            <PlusCircle className="w-5 h-5" />
            <span>Adicionar suas formações acadêmicas</span>
          </button>
        </div>

        <div className="bg-paleGreen border border-deepGreen rounded-md p-4 md:p-6 shadow-sm">
          {/* Primeira linha - Nível e Grau */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="education-level"
                className="text-sm font-medium mb-1"
              >
                Nível de formação
              </label>
              <select
                id="education-level"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              >
                <option value=""></option>
                <option value="fundamental_incompleto">
                  Ensino Fundamental Incompleto
                </option>
                <option value="fundamental_completo">
                  Ensino Fundamental Completo
                </option>
                <option value="medio_incompleto">
                  Ensino Médio Incompleto
                </option>
                <option value="medio_completo">Ensino Médio Completo</option>
                <option value="tecnico_incompleto">
                  Curso Técnico Incompleto
                </option>
                <option value="tecnico_completo">Curso Técnico Completo</option>
                <option value="superior_incompleto">
                  Ensino Superior Incompleto
                </option>
                <option value="superior_completo">
                  Ensino Superior Completo
                </option>
                <option value="pos_graduacao">
                  Pós-graduação (Especialização)
                </option>
                <option value="mestrado">Mestrado</option>
                <option value="doutorado">Doutorado</option>
                <option value="pos_doutorado">Pós-doutorado</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="degree-type" className="text-sm font-medium mb-1">
                Grau de formação
              </label>
              <select
                id="degree-type"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              >
                <option value=""></option>
                <option value="tecnologo">Tecnólogo</option>
                <option value="licenciatura">Licenciatura</option>
                <option value="bacharelado">Bacharelado</option>
                <option value="especializacao">
                  Pós-graduação (Especialização / MBA)
                </option>
                <option value="mestrado">Mestrado</option>
                <option value="doutorado">Doutorado</option>
                <option value="pos_doutorado">Pós-doutorado</option>
              </select>
            </div>
          </div>

          {/* Segunda linha - Status e Curso */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
            <div className="flex flex-col md:w-1/3">
              <label htmlFor="status" className="text-sm font-medium mb-1">
                Status
              </label>
              <select
                id="status"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              >
                <option value=""></option>
                <option value="concluido">Concluído</option>
                <option value="em_andamento">Em andamento</option>
                <option value="trancado">Trancado</option>
                <option value="interrompido">Interrompido</option>
                <option value="nao_iniciado">Não iniciado</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="course" className="text-sm font-medium mb-1">
                Curso
              </label>
              <input
                type="text"
                id="course"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              />
            </div>
          </div>

          {/* Terceira linha - Nome da instituição */}
          <div className="flex flex-col mb-4">
            <label htmlFor="institution" className="text-sm font-medium mb-1">
              Nome da instituição
            </label>
            <input
              type="text"
              id="institution"
              className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
            />
          </div>

          {/* Quarta linha - Datas */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="start-date" className="text-sm font-medium mb-1">
                Início
              </label>
              <input
                type="date"
                id="start-date"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="end-date" className="text-sm font-medium mb-1">
                Fim
              </label>
              <input
                type="date"
                id="end-date"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              />
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="text-deepGreen hover:bg-deepGreen hover:bg-opacity-10 p-2 rounded-full transition-colors"
              aria-label="Salvar"
            >
              <Save className="w-5 h-5" />
            </button>
            <button
              className="text-red-900 hover:bg-red-100 p-2 rounded-full transition-colors"
              aria-label="Excluir"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
