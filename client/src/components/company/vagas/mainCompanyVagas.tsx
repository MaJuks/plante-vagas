import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Briefcase, Loader2 } from "lucide-react";
import { getVagasByEmpresa, Vaga } from "@/services/vaga";
import VagaVagas from "./vagaVagas";

export default function MainCompanyVagas() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getVagasByEmpresa()
      .then(setVagas)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-deepGreen font-PrimaryFont">
              Vagas abertas
            </h1>
            <p className="text-gray-600 font-SecondFont mt-1">
              {loading ? "Carregando..." : `${vagas.length} vaga${vagas.length !== 1 ? "s" : ""} publicada${vagas.length !== 1 ? "s" : ""}`}
            </p>
          </div>
          <button
            onClick={() => navigate("/criar-vaga")}
            className="inline-flex items-center justify-center gap-2 bg-deepGreen text-white px-5 py-3 rounded-xl font-SecondFont font-semibold hover:bg-mediumGreen transition-colors duration-200 self-start sm:self-auto"
          >
            <Plus size={18} aria-hidden="true" />
            Nova vaga
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 font-SecondFont">
            <Loader2 size={32} className="animate-spin text-mediumGreen mb-3" aria-hidden="true" />
            Carregando vagas...
          </div>
        ) : vagas.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-gray-100">
            <Briefcase size={32} className="text-gray-300 mb-3" aria-hidden="true" />
            <p className="text-gray-500 font-SecondFont">Nenhuma vaga cadastrada ainda.</p>
            <button
              onClick={() => navigate("/criar-vaga")}
              className="mt-4 text-deepGreen font-SecondFont font-semibold hover:text-mediumGreen transition-colors duration-200 underline underline-offset-4"
            >
              Publicar a primeira vaga
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6 pb-8">
            {vagas.map((vaga) => (
              <VagaVagas key={vaga.id} vaga={vaga} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
