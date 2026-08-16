import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Users, Loader2, Info } from "lucide-react";
import { getVagaById, Vaga } from "@/services/vaga";

export default function MainCandidates() {
  const [searchParams] = useSearchParams();
  const vagaId = searchParams.get("vagaId");
  const etapaId = searchParams.get("etapaId");

  const [vaga, setVaga] = useState<Vaga | null>(null);
  const [loading, setLoading] = useState(!!vagaId);

  useEffect(() => {
    if (!vagaId) return;
    getVagaById(Number(vagaId))
      .then(setVaga)
      .finally(() => setLoading(false));
  }, [vagaId]);

  const etapa = vaga?.etapas.find((e) => e.id === Number(etapaId));

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="py-8">
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

        <div className="flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 py-16 px-6">
          <div className="w-16 h-16 bg-paleGreen/40 rounded-2xl flex items-center justify-center mb-4">
            <Users size={28} className="text-deepGreen" aria-hidden="true" />
          </div>
          <p className="text-gray-700 font-SecondFont font-medium mb-2">
            Ainda não é possível ver candidatos aqui
          </p>
          <div className="flex items-start gap-2 max-w-md text-left mt-2 bg-paleGreen/20 border border-paleGreen rounded-xl p-4">
            <Info size={18} className="text-deepGreen flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-gray-600">
              O backend ainda não tem um jeito de um candidato se candidatar a uma vaga, nem
              de listar quem se candidatou (o botão "Candidatar-se" na página da vaga também
              não faz nada ainda). Documentado no pendencias.txt, item 8.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
