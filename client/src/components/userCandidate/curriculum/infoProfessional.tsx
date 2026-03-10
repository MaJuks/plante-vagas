import { PlusCircle, Save, Trash2 } from "lucide-react";
import { useState } from "react";

export default function ProfessionalInfo() {
  const [bloquear, setBloquear] = useState(false);

  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr className="w-full" />
        <div className="my-6">
          <h1 className="text-xl md:text-2xl font-medium">
            Adicione suas experiências profissionais
          </h1>
        </div>

        <div className="flex items-center mb-6">
          <button className="flex items-center gap-2 text-deepGreen hover:text-opacity-80 transition-colors">
            <PlusCircle className="w-5 h-5" />
            <span>Adicionar experiência profissional</span>
          </button>
        </div>

        <div className="bg-paleGreen border border-deepGreen rounded-md p-4 md:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="cargo" className="text-sm font-medium mb-1">
                Cargo
              </label>
              <input
                type="text"
                id="cargo"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="empresa" className="text-sm font-medium mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="empregoAtual"
              checked={bloquear}
              onChange={(e) => setBloquear(e.target.checked)}
              className="w-4 h-4 text-deepGreen border-gray-300 rounded focus:ring-deepGreen"
            />
            <label htmlFor="empregoAtual" className="ml-2 text-sm">
              Emprego Atual
            </label>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="inicio" className="text-sm font-medium mb-1">
                Início
              </label>
              <input
                type="date"
                id="inicio"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="fim" className="text-sm font-medium mb-1">
                Fim
              </label>
              <input
                type="date"
                id="fim"
                disabled={bloquear}
                className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen ${
                  bloquear
                    ? "bg-oliveGreen cursor-not-allowed opacity-60"
                    : "bg-MediumGray"
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="descricao" className="text-sm font-medium mb-1">
              Descrição da função e atividades
            </label>
            <textarea
              id="descricao"
              rows={3}
              className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
            ></textarea>
          </div>

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
