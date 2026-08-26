import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardList, Loader2, Building2, ArrowRight, X } from "lucide-react";
import { toast } from "sonner";
import { getMinhasCandidaturas, cancelarCandidatura, type Candidatura } from "@/services/candidatura";
import { timeAgo } from "@/utils/timeAgo";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export default function SelectionProcess() {
  const navigate = useNavigate();
  const [candidaturas, setCandidaturas] = useState<Candidatura[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancelarAlvo, setCancelarAlvo] = useState<Candidatura | null>(null);
  const [cancelando, setCancelando] = useState(false);

  useEffect(() => {
    getMinhasCandidaturas()
      .then(setCandidaturas)
      .finally(() => setLoading(false));
  }, []);

  const handleConfirmarCancelamento = async () => {
    if (!cancelarAlvo) return;
    setCancelando(true);
    try {
      await cancelarCandidatura(cancelarAlvo.id);
      setCandidaturas((prev) => prev.filter((c) => c.id !== cancelarAlvo.id));
      toast.success("Candidatura cancelada");
      setCancelarAlvo(null);
    } catch (e: any) {
      toast.error(e.message || "Erro ao cancelar candidatura");
    } finally {
      setCancelando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont mb-6">
          Processos seletivos
        </h1>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 font-SecondFont">
            <Loader2 size={32} className="animate-spin text-mediumGreen mb-3" aria-hidden="true" />
            Carregando...
          </div>
        ) : candidaturas.length === 0 ? (
          <div className="flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 py-16 px-6">
            <div className="w-16 h-16 bg-paleGreen/40 rounded-2xl flex items-center justify-center mb-4">
              <ClipboardList size={28} className="text-deepGreen" aria-hidden="true" />
            </div>
            <p className="text-gray-700 font-SecondFont font-medium mb-2">
              Você ainda não tem processos seletivos em andamento
            </p>
            <button
              onClick={() => navigate("/pesquisa-de-vagas")}
              className="mt-2 text-deepGreen font-SecondFont font-semibold hover:text-mediumGreen transition-colors duration-200 underline underline-offset-4"
            >
              Ver vagas disponíveis
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {candidaturas.map((candidatura) => {
              const vaga = candidatura.etapa?.vaga;
              const nomeEmpresa = vaga?.empresa?.fantasyName || vaga?.empresa?.name;

              return (
                <div
                  key={candidatura.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 font-SecondFont cursor-pointer hover:border-mediumGreen/30 transition-colors duration-200"
                  onClick={() => vaga && navigate(`/pagina-vaga/${vaga.id}`)}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-paleGreen/40 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {vaga?.empresa?.logoUrl ? (
                          <img src={vaga.empresa.logoUrl} alt={nomeEmpresa ? `Logo de ${nomeEmpresa}` : "Logo da empresa"} className="w-full h-full object-cover" />
                        ) : (
                          <Building2 size={20} className="text-deepGreen" aria-hidden="true" />
                        )}
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-deepGreen font-PrimaryFont">
                          {vaga?.nome ?? "Vaga"}
                        </h2>
                        {nomeEmpresa && (
                          <span className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                            <Building2 size={14} className="text-mediumGreen" />
                            {nomeEmpresa}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-gray-400 flex-shrink-0" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <span className="bg-paleGreen/50 text-deepGreen text-sm px-3 py-1 rounded-full">
                      Etapa: {candidatura.etapa?.nome ?? "—"}
                    </span>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        candidatura.rejeitado
                          ? "bg-red-100 text-red-700"
                          : candidatura.statusCandidato
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {candidatura.rejeitado ? "Não selecionado(a)" : candidatura.statusCandidato ? "Avançou" : "Em análise"}
                    </span>
                    <span className="text-gray-400 text-xs">
                      Candidatura enviada há {timeAgo(candidatura.createdAt)}
                    </span>
                  </div>

                  {candidatura.rejeitado && candidatura.motivoRejeicao && (
                    <p className="text-red-700 bg-red-50 border border-red-100 rounded-xl p-3 text-sm mt-4">
                      {candidatura.motivoRejeicao}
                    </p>
                  )}

                  {candidatura.observacoes && (
                    <p className="text-gray-600 text-sm mt-4 break-words">{candidatura.observacoes}</p>
                  )}

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCancelarAlvo(candidatura);
                      }}
                      className="flex items-center gap-2 text-sm text-gray-600 px-4 py-2 rounded-xl border border-gray-200 hover:border-red-300 hover:text-red-600 transition-colors duration-200"
                    >
                      <X size={16} aria-hidden="true" />
                      Cancelar candidatura
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <AlertDialog open={!!cancelarAlvo} onOpenChange={(open) => !open && setCancelarAlvo(null)}>
        <AlertDialogContent className="font-SecondFont">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-deepGreen">
              Cancelar candidatura?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja cancelar sua candidatura para{" "}
              {cancelarAlvo?.etapa?.vaga?.nome ?? "esta vaga"}? Essa ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Voltar</AlertDialogCancel>
            <button
              type="button"
              onClick={handleConfirmarCancelamento}
              disabled={cancelando}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-700 text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {cancelando && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
              {cancelando ? "Cancelando..." : "Cancelar candidatura"}
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
