import { Save, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useCurriculum } from "../curriculumContext";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

const adjetivos = [
  // Positivos
  "Comunicativo",
  "Proativo",
  "Organizado",
  "Pontual",
  "Responsável",
  "Criativo",
  "Dedicado",
  "Colaborativo",
  "Empático",
  "Focado",
  "Resiliente",
  "Inovador",
  "Comprometido",
  "Motivado",
  "Líder",
  "Versátil",
  "Curioso",
  "Analítico",
  "Paciente",
  "Adaptável",

  // Negativos ou pontos de atenção
  "Ansioso",
  "Perfeccionista",
  "Teimoso",
  "Impulsivo",
  "Distraído",
  "Crítico demais",
  "Introvertido",
  "Lento para decisões",
  "Dependente de validação",
  "Evita conflitos",

  // Neutros/contextuais
  "Cauteloso",
  "Observador",
  "Sincero",
  "Reservado",
  "Pragmático",
];

export default function Differentiate() {
  const { curriculum, saveSection } = useCurriculum();

  const [confirmGroup, setConfirmGroup] = useState<1 | 2 | null>(null);
  const [selecionados_1, setSelecionados_1] = useState<string[]>([]);
  const [selecionados_2, setSelecionados_2] = useState<string[]>([]);

  useEffect(() => {
    const descricoes = curriculum.diferenciais.map((d: any) => d.descricao);
    setSelecionados_1(descricoes.filter((d: string) => adjetivos.includes(d)));
  }, [curriculum.diferenciais]);

  const toggleSelecionado = (adj: string) => {
    setSelecionados_1((prev) =>
      prev.includes(adj) ? prev.filter((a) => a !== adj) : [...prev, adj]
    );
  };

  const toggleSelecionado2 = (adj: string) => {
    setSelecionados_2((prev) =>
      prev.includes(adj) ? prev.filter((a) => a !== adj) : [...prev, adj]
    );
  };

  const handleSave1 = async () => {
    const loadingToast = toast.loading("Salvando diferenciais...");
    try {
      const combined = [...new Set([...selecionados_1, ...selecionados_2])].map((d) => ({ descricao: d }));
      await saveSection("diferenciais", combined);
      toast.success("Diferenciais salvos com sucesso", { id: loadingToast });
    } catch {
      toast.error("Erro ao salvar diferenciais", { id: loadingToast });
    }
  };

  const handleSave2 = async () => {
    const loadingToast = toast.loading("Salvando diferenciais...");
    try {
      const combined = [...new Set([...selecionados_1, ...selecionados_2])].map((d) => ({ descricao: d }));
      await saveSection("diferenciais", combined);
      toast.success("Diferenciais salvos com sucesso", { id: loadingToast });
    } catch {
      toast.error("Erro ao salvar diferenciais", { id: loadingToast });
    }
  };

  const handleDelete1 = async () => {
    const loadingToast = toast.loading("Excluindo...");
    try {
      setSelecionados_1([]);
      const combined = selecionados_2.map((d) => ({ descricao: d }));
      await saveSection("diferenciais", combined);
      toast.success("Características removidas com sucesso!", { id: loadingToast });
    } catch {
      toast.error("Erro ao excluir características.", { id: loadingToast });
    }
  };

  const handleDelete2 = async () => {
    const loadingToast = toast.loading("Excluindo...");
    try {
      setSelecionados_2([]);
      const combined = selecionados_1.map((d) => ({ descricao: d }));
      await saveSection("diferenciais", combined);
      toast.success("Características removidas com sucesso!", { id: loadingToast });
    } catch {
      toast.error("Erro ao excluir características.", { id: loadingToast });
    }
  };

  return (
    <>
      <ConfirmDialog
        open={confirmGroup !== null}
        onOpenChange={(open) => { if (!open) setConfirmGroup(null) }}
        title="Limpar características"
        description="Tem certeza que deseja remover estas características? Esta ação não pode ser desfeita."
        onConfirm={() => {
          if (confirmGroup === 1) { handleDelete1(); }
          else if (confirmGroup === 2) { handleDelete2(); }
          setConfirmGroup(null);
        }}
      />
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr className="mb-6" />

        <h1 className="text-xl mb-6">
          Escreva características com base na sua personalidade, para que os
          empregadores conheçam melhor o seu perfil
        </h1>

        <h1 className="text-xl mb-4">Quais características você tem:</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
          {adjetivos.map((adj, index) => {
            const isSelected = selecionados_1.includes(adj);
            return (
              <button
                key={index}
                onClick={() => toggleSelecionado(adj)}
                className={`p-2 border border-deepGreen cursor-pointer transition rounded
                      ${
                        isSelected
                          ? "bg-oliveGreen"
                          : "bg-paleGreen hover:bg-oliveGreen"
                      }`}
              >
                {adj}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end gap-3 mb-10">
          <button className="flex items-center gap-2 px-4 py-2 bg-deepGreen text-white rounded-md cursor-pointer hover:opacity-90 transition" onClick={handleSave1}>
            <Save size={18} />
            <span>Salvar</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-md cursor-pointer hover:opacity-90 transition" onClick={() => setConfirmGroup(1)}>
            <Trash2 size={18} />
            <span>Excluir</span>
          </button>
        </div>

        <h1 className="text-xl mb-4">
          Quais características as pessoas acham que você deveria ter:
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
          {adjetivos.map((adj, index) => {
            const isSelected = selecionados_2.includes(adj);
            return (
              <button
                key={index}
                onClick={() => toggleSelecionado2(adj)}
                className={`p-2 border border-deepGreen cursor-pointer transition rounded
                      ${
                        isSelected
                          ? "bg-oliveGreen"
                          : "bg-paleGreen hover:bg-oliveGreen"
                      }`}
              >
                {adj}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end gap-3 mb-10">
          <button className="flex items-center gap-2 px-4 py-2 bg-deepGreen text-white rounded-md cursor-pointer hover:opacity-90 transition" onClick={handleSave2}>
            <Save size={18} />
            <span>Salvar</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-md cursor-pointer hover:opacity-90 transition" onClick={() => setConfirmGroup(2)}>
            <Trash2 size={18} />
            <span>Excluir</span>
          </button>
        </div>
      </div>
    </>
  );
}
