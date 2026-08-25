import { useState } from "react";
import { useNavigate } from "react-router";
import { Loader2, Users, Lock } from "lucide-react";
import { toast } from "sonner";
import { EtapaProcessoSeletivo, deleteEtapa, updateEtapaService } from "@/services/vaga";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

type EtapaProps = {
  etapa: EtapaProcessoSeletivo;
  vagaId: number;
  index: number;
  onExcluir: (id: number) => void;
  onAtualizar: (etapa: EtapaProcessoSeletivo) => void;
};

const Etapa = ({ etapa, vagaId, index, onExcluir, onAtualizar }: EtapaProps) => {
  const navigate = useNavigate();
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState(etapa.nome);
  const [descricao, setDescricao] = useState(etapa.descricao);
  const [salvando, setSalvando] = useState(false);
  const [excluindo, setExcluindo] = useState(false);
  const [erro, setErro] = useState("");
  const [confirmFechar, setConfirmFechar] = useState(false);
  const [confirmExcluir, setConfirmExcluir] = useState(false);

  const fechada = etapa.status !== "aberta";

  const handleFecharEtapa = () => {
    setConfirmFechar(false);
    toast.info("Ainda não é possível fechar etapas de verdade", {
      description:
        "Falta um campo de status editável no backend e a integração com WhatsApp pra notificar os candidatos que não avançaram (ver pendencias.txt, item 9).",
      duration: 6000,
    });
  };

  const inputClass =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent transition-all duration-300";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  const handleSalvar = async () => {
    if (!nome.trim()) {
      setErro("O nome da etapa é obrigatório.");
      return;
    }
    setSalvando(true);
    setErro("");
    try {
      const atualizada = await updateEtapaService(etapa.id, { nome: nome.trim(), descricao: descricao.trim() });
      onAtualizar(atualizada);
      setEditando(false);
    } catch (e: any) {
      setErro(e.message || "Erro ao salvar etapa");
    } finally {
      setSalvando(false);
    }
  };

  const handleExcluir = async () => {
    setConfirmExcluir(false);
    setExcluindo(true);
    try {
      await deleteEtapa(etapa.id);
      onExcluir(etapa.id);
    } finally {
      setExcluindo(false);
    }
  };

  if (editando) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 font-SecondFont">
        <h2 className="text-lg font-bold text-deepGreen font-PrimaryFont mb-6">Editar etapa {index}</h2>

        <div className="flex flex-col gap-5">
          <div>
            <label className={labelClass}>Nome da etapa</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Descrição da etapa</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          {erro && <p className="text-red-500 text-sm">{erro}</p>}

          <div className="flex justify-end gap-3">
            <button
              onClick={() => { setEditando(false); setNome(etapa.nome); setDescricao(etapa.descricao); setErro(""); }}
              className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors duration-200 font-SecondFont font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleSalvar}
              disabled={salvando}
              className="flex items-center gap-2 bg-deepGreen text-white px-6 py-2.5 rounded-xl hover:bg-mediumGreen transition-colors duration-200 font-SecondFont font-semibold disabled:opacity-60"
            >
              {salvando && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
              {salvando ? "Salvando..." : "Salvar alterações"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 font-SecondFont">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg font-bold text-deepGreen font-PrimaryFont break-words">{etapa.nome}</h2>

        <div className="flex gap-2 flex-shrink-0">
          <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">{index}</span>
          <span className="bg-paleGreen/50 text-deepGreen text-sm px-3 py-1 rounded-full capitalize">{etapa.status}</span>
        </div>
      </div>

      {etapa.descricao && (
        <p className="text-gray-600 text-sm leading-relaxed mt-4 break-words">{etapa.descricao}</p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6">
        <button
          onClick={() => navigate(`/candidatos?vagaId=${vagaId}&etapaId=${etapa.id}`)}
          className="flex items-center justify-center gap-2 bg-deepGreen text-sm text-white px-5 py-2.5 rounded-xl hover:bg-mediumGreen transition-colors duration-200 font-SecondFont font-semibold"
        >
          <Users size={16} aria-hidden="true" />
          Ver candidatos
        </button>

        <button
          onClick={() => setEditando(true)}
          className="text-sm text-gray-700 px-5 py-2.5 rounded-xl border border-gray-200 hover:border-deepGreen hover:text-deepGreen transition-colors duration-200 font-SecondFont font-medium"
        >
          Editar etapa
        </button>

        <button
          onClick={() => setConfirmFechar(true)}
          disabled={fechada}
          className="flex items-center justify-center gap-2 text-sm text-amber-700 px-5 py-2.5 rounded-xl border border-amber-200 hover:bg-amber-50 transition-colors duration-200 font-SecondFont font-medium disabled:opacity-60 disabled:hover:bg-transparent"
        >
          <Lock size={16} aria-hidden="true" />
          {fechada ? "Etapa fechada" : "Fechar etapa"}
        </button>

        <button
          onClick={() => setConfirmExcluir(true)}
          disabled={excluindo}
          className="flex items-center justify-center gap-2 text-sm text-red-600 px-5 py-2.5 rounded-xl border border-red-200 hover:bg-red-50 transition-colors duration-200 font-SecondFont font-medium disabled:opacity-60"
        >
          {excluindo && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
          {excluindo ? "Excluindo..." : "Excluir etapa"}
        </button>
      </div>

      <ConfirmDialog
        open={confirmFechar}
        onOpenChange={setConfirmFechar}
        title="Fechar esta etapa?"
        description={`Ao fechar "${etapa.nome}", todos os candidatos que não avançaram vão receber uma notificação automática via WhatsApp avisando que não foram selecionados. Essa ação não pode ser desfeita.`}
        onConfirm={handleFecharEtapa}
        confirmLabel="Fechar etapa"
        confirmClassName="bg-amber-600 hover:bg-amber-700 text-white"
      />

      <ConfirmDialog
        open={confirmExcluir}
        onOpenChange={setConfirmExcluir}
        title="Excluir esta etapa?"
        description={`Tem certeza que deseja excluir "${etapa.nome}"? Essa ação não pode ser desfeita.`}
        onConfirm={handleExcluir}
        confirmLabel="Excluir etapa"
      />
    </div>
  );
};

export default Etapa;
