import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Plus, Loader2 } from "lucide-react";
import EtapasDisplay from "./etapasDisplay";
import { getVagaById, addEtapa, EtapaProcessoSeletivo, Vaga } from "@/services/vaga";

const MainManagementProcess = () => {
  const [searchParams] = useSearchParams();
  const vagaId = searchParams.get("vagaId");

  const [vaga, setVaga] = useState<Vaga | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [nomeEtapa, setNomeEtapa] = useState("");
  const [descricaoEtapa, setDescricaoEtapa] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [erroForm, setErroForm] = useState("");

  const fetchVaga = () => {
    if (!vagaId) {
      setErro("Nenhuma vaga selecionada.");
      setLoading(false);
      return;
    }
    setLoading(true);
    getVagaById(Number(vagaId))
      .then(setVaga)
      .catch((e) => setErro(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchVaga();
  }, [vagaId]);

  const etapas: EtapaProcessoSeletivo[] = vaga?.etapas ?? [];

  const handleAdicionarEtapa = async () => {
    if (!nomeEtapa.trim()) {
      setErroForm("O nome da etapa é obrigatório.");
      return;
    }
    setSalvando(true);
    setErroForm("");
    try {
      const nova = await addEtapa(Number(vagaId), {
        nome: nomeEtapa.trim(),
        descricao: descricaoEtapa.trim(),
      });
      setVaga((prev) => prev ? { ...prev, etapas: [...prev.etapas, nova] } : prev);
      setNomeEtapa("");
      setDescricaoEtapa("");
      setShowForm(false);
    } catch (e: any) {
      setErroForm(e.message || "Erro ao adicionar etapa");
    } finally {
      setSalvando(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen font-SecondFont text-gray-500 gap-3">
        <Loader2 size={32} className="animate-spin text-mediumGreen" aria-hidden="true" />
        Carregando...
      </div>
    );
  }

  if (erro) {
    return (
      <div className="flex justify-center items-center h-screen font-SecondFont">
        <p className="text-red-500">{erro}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent transition-all duration-300";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8">
          <div>
            <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont">
              Processo seletivo
            </h1>
            <p className="text-gray-600 font-SecondFont mt-1">
              {vaga?.nome} — {vaga?.cargo}
            </p>
          </div>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="inline-flex items-center justify-center gap-2 bg-deepGreen text-white px-5 py-3 rounded-xl font-SecondFont font-semibold hover:bg-mediumGreen transition-colors duration-200 self-start sm:self-auto"
          >
            <Plus size={18} aria-hidden="true" />
            Nova etapa
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8 flex flex-col gap-5 font-SecondFont">
            <h2 className="text-lg font-bold text-deepGreen font-PrimaryFont">Nova etapa</h2>

            <div>
              <label className={labelClass}>Nome da etapa</label>
              <input
                type="text"
                value={nomeEtapa}
                onChange={(e) => setNomeEtapa(e.target.value)}
                placeholder="Ex: Entrevista técnica"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Descrição da etapa</label>
              <textarea
                value={descricaoEtapa}
                onChange={(e) => setDescricaoEtapa(e.target.value)}
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {erroForm && <p className="text-red-500 text-sm">{erroForm}</p>}

            <div className="flex justify-end gap-3">
              <button
                onClick={() => { setShowForm(false); setErroForm(""); }}
                className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors duration-200 font-SecondFont font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdicionarEtapa}
                disabled={salvando}
                className="flex items-center gap-2 bg-deepGreen text-white px-6 py-2.5 rounded-xl hover:bg-mediumGreen transition-colors duration-200 font-SecondFont font-semibold disabled:opacity-60"
              >
                {salvando && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
                {salvando ? "Salvando..." : "Adicionar"}
              </button>
            </div>
          </div>
        )}

        {etapas.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-500 font-SecondFont">Nenhuma etapa cadastrada ainda.</p>
          </div>
        ) : (
          <EtapasDisplay
            etapas={etapas}
            vagaId={Number(vagaId)}
            onExcluir={(id) =>
              setVaga((prev) =>
                prev ? { ...prev, etapas: prev.etapas.filter((e) => e.id !== id) } : prev
              )
            }
            onAtualizar={(atualizada) =>
              setVaga((prev) =>
                prev ? { ...prev, etapas: prev.etapas.map((e) => e.id === atualizada.id ? atualizada : e) } : prev
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default MainManagementProcess;
