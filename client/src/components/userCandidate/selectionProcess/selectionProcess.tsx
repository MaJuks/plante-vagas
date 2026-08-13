import { ClipboardList, Info } from "lucide-react";

export default function SelectionProcess() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont mb-6">
          Processos seletivos
        </h1>

        <div className="flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 py-16 px-6">
          <div className="w-16 h-16 bg-paleGreen/40 rounded-2xl flex items-center justify-center mb-4">
            <ClipboardList size={28} className="text-deepGreen" aria-hidden="true" />
          </div>
          <p className="text-gray-700 font-SecondFont font-medium mb-2">
            Você ainda não tem processos seletivos em andamento
          </p>
          <div className="flex items-start gap-2 max-w-md text-left mt-2 bg-paleGreen/20 border border-paleGreen rounded-xl p-4">
            <Info size={18} className="text-deepGreen flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-gray-600">
              O backend ainda não tem um jeito de você se candidatar a uma vaga, então essa
              tela não tem como mostrar processos reais ainda. Documentado no pendencias.txt,
              item 8.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
