import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { ArrowLeft, Users, Loader2, Mail, Phone, Check, X } from "lucide-react";
import { toast } from "sonner";
import { getVagaById, Vaga } from "@/services/vaga";
import {
  getCandidatosPorEtapa,
  getCandidatosPorVaga,
  moverCandidatura,
  type Candidatura,
} from "@/services/candidatura";

export default function MainCandidates() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const vagaId = searchParams.get("vagaId");
  const etapaId = searchParams.get("etapaId");

  const [vaga, setVaga] = useState<Vaga | null>(null);
  const [candidatos, setCandidatos] = useState<Candidatura[]>([]);
  const [loading, setLoading] = useState(!!(vagaId || etapaId));
  const [atualizandoId, setAtualizandoId] = useState<number | null>(null);

  useEffect(() => {
    if (vagaId) getVagaById(Number(vagaId)).then(setVaga);
  }, [vagaId]);

  useEffect(() => {
    if (etapaId) {
      getCandidatosPorEtapa(Number(etapaId))
        .then(setCandidatos)
        .finally(() => setLoading(false));
    } else if (vagaId) {
      getCandidatosPorVaga(Number(vagaId))
        .then(setCandidatos)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [vagaId, etapaId]);

  const etapa = vaga?.etapas.find((e) => e.id === Number(etapaId));

  const handleAtualizarStatus = async (candidaturaId: number, statusCandidato: boolean) => {
    setAtualizandoId(candidaturaId);
    try {
      const atualizada = await moverCandidatura(candidaturaId, { statusCandidato });
      setCandidatos((prev) => prev.map((c) => (c.id === candidaturaId ? atualizada : c)));
      toast.success(statusCandidato ? "Candidato marcado como avançado" : "Candidato marcado como não avançado");
    } catch (e: any) {
      toast.error(e.message || "Erro ao atualizar candidato");
    } finally {
      setAtualizandoId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={() => navigate(`/gerenciar-processo?vagaId=${vagaId}`)}
          className="flex items-center gap-2 text-gray-600 hover:text-deepGreen transition-colors duration-200 pt-8 font-SecondFont text-sm"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Voltar para o processo seletivo
        </button>

        <div className="pb-8 pt-2">
          <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont">
            Candidatos
          </h1>
          {loading ? (
            <p className="text-gray-500 font-SecondFont mt-1 flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Carregando...
            </p>
          ) : vaga ? (
            <p className="text-gray-600 font-SecondFont mt-1">
              {vaga.nome} — {vaga.cargo}
              {etapa && <> · Etapa: {etapa.nome}</>}
            </p>
          ) : (
            <p className="text-gray-600 font-SecondFont mt-1">Nenhuma vaga selecionada</p>
          )}
        </div>

        {!loading && candidatos.length === 0 && (
          <div className="flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 py-16 px-6">
            <div className="w-16 h-16 bg-paleGreen/40 rounded-2xl flex items-center justify-center mb-4">
              <Users size={28} className="text-deepGreen" aria-hidden="true" />
            </div>
            <p className="text-gray-700 font-SecondFont font-medium mb-2">
              Ainda não há candidatos aqui
            </p>
            <p className="text-sm text-gray-500 max-w-md">
              Assim que um candidato se candidatar a esta vaga, ele vai aparecer nesta lista.
            </p>
          </div>
        )}

        {!loading && candidatos.length > 0 && (
          <div className="flex flex-col gap-4 pb-8">
            {candidatos.map((candidatura) => (
              <div
                key={candidatura.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 font-SecondFont"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-deepGreen font-PrimaryFont">
                      {candidatura.candidato?.name ?? "Candidato"}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600 text-sm">
                      {candidatura.candidato?.email && (
                        <span className="flex items-center gap-1.5">
                          <Mail size={14} className="text-mediumGreen" />
                          {candidatura.candidato.email}
                        </span>
                      )}
                      {candidatura.candidato?.phone && (
                        <span className="flex items-center gap-1.5">
                          <Phone size={14} className="text-mediumGreen" />
                          {candidatura.candidato.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className={`text-sm px-3 py-1 rounded-full flex-shrink-0 ${
                      candidatura.statusCandidato
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {candidatura.statusCandidato ? "Avançou" : "Em análise"}
                  </span>
                </div>

                <div className="flex gap-3 justify-end mt-5">
                  <button
                    onClick={() => handleAtualizarStatus(candidatura.id, false)}
                    disabled={atualizandoId === candidatura.id || !candidatura.statusCandidato}
                    className="flex items-center gap-2 text-sm text-gray-600 px-4 py-2 rounded-xl border border-gray-200 hover:border-red-300 hover:text-red-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <X size={16} aria-hidden="true" />
                    Não avançou
                  </button>
                  <button
                    onClick={() => handleAtualizarStatus(candidatura.id, true)}
                    disabled={atualizandoId === candidatura.id || candidatura.statusCandidato}
                    className="flex items-center gap-2 text-sm text-white bg-deepGreen px-4 py-2 rounded-xl hover:bg-mediumGreen transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {atualizandoId === candidatura.id ? (
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    ) : (
                      <Check size={16} aria-hidden="true" />
                    )}
                    Avançou
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
