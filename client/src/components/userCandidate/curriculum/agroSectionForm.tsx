import { PlusCircle, SaveAll, Trash2 } from "lucide-react";
import { useCurriculum } from "../curriculumContext";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import type { AgroItem, CurriculumPayload } from "@/services/curriculum";

export const NIVEL_EXPERIENCIA_OPTIONS = [
  { value: "basico", label: "Básico" },
  { value: "intermediario", label: "Intermediário" },
  { value: "avancado", label: "Avançado" },
];

const EMPTY_ITEM: AgroItem = { nome: "", nivelExperiencia: "", descricao: "" };

const normalizeItems = (list: AgroItem[]) =>
  list.map(({ nome, nivelExperiencia, descricao }) => ({ nome, nivelExperiencia, descricao }));

type AgroSection = "operacoesAgricolas" | "operacoesPecuarias" | "operacoesFlorestais" | "culturas" | "maquinas" | "tecnologias";

type Props = {
  section: AgroSection;
  title: string;
  addLabel: string;
  nameLabel: string;
  entityLabel: string;
  nameOptions: { value: string; label: string }[];
};

export default function AgroSectionForm({ section, title, addLabel, nameLabel, entityLabel, nameOptions }: Props) {
  const { curriculum, saveSection } = useCurriculum();
  const [confirmIndex, setConfirmIndex] = useState<number | null>(null);
  const sectionData = curriculum[section as keyof CurriculumPayload] as AgroItem[];
  const [items, setItems] = useState<AgroItem[]>(
    sectionData.length > 0 ? normalizeItems(sectionData) : [EMPTY_ITEM]
  );

  useEffect(() => {
    setItems(sectionData.length > 0 ? normalizeItems(sectionData) : [EMPTY_ITEM]);
  }, [sectionData]);

  const handleChange = (index: number, field: keyof AgroItem, value: string) => {
    const newList = [...items];
    newList[index] = { ...items[index], [field]: value };
    setItems(newList);
  };

  const handleSave = async () => {
    const loadingToast = toast.loading(`Salvando ${entityLabel}...`);
    try {
      await saveSection(section, normalizeItems(items));
      toast.success(`${entityLabel} salvo com sucesso`, { id: loadingToast });
    } catch {
      toast.error(`Erro ao salvar ${entityLabel}`, { id: loadingToast });
    }
  };

  const handleDelete = async (index: number) => {
    const loadingToast = toast.loading(`Excluindo ${entityLabel}...`);
    try {
      const deletedList = items.filter((_, i) => i !== index);
      setItems(deletedList);
      await saveSection(section, normalizeItems(deletedList));
      toast.success(`${entityLabel} excluído com sucesso!`, { id: loadingToast });
    } catch {
      toast.error(`Erro ao excluir ${entityLabel}.`, { id: loadingToast });
    }
  };

  return (
    <>
      <ConfirmDialog
        open={confirmIndex !== null}
        onOpenChange={(open) => { if (!open) setConfirmIndex(null) }}
        title={`Excluir ${entityLabel}`}
        description={`Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita.`}
        onConfirm={() => { if (confirmIndex !== null) { handleDelete(confirmIndex); setConfirmIndex(null) } }}
      />
      <div className="flex flex-col p-8 md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr />
        <br />
        <h1 className="text-xl">{title}</h1>
        <br />
        <br />
        <div className="flex items-center">
          <button
            className="cursor-pointer flex items-center gap-2 sm:gap-4 text-deepGreen"
            onClick={() => setItems([...items, { ...EMPTY_ITEM }])}
          >
            <PlusCircle />
            <span>{addLabel}</span>
          </button>
        </div>
        <br />
        {items.map((item, index) => (
          <div key={index} className="bg-paleGreen border border-deepGreen rounded-md p-4 md:p-6 shadow-sm mt-10">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-4">
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-1">{nameLabel}</label>
                <select
                  className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                  value={item.nome}
                  onChange={(e) => handleChange(index, "nome", e.target.value)}
                >
                  <option value=""></option>
                  {nameOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-1">Nível de experiência</label>
                <select
                  className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                  value={item.nivelExperiencia}
                  onChange={(e) => handleChange(index, "nivelExperiencia", e.target.value)}
                >
                  <option value=""></option>
                  {NIVEL_EXPERIENCIA_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor={`descricao-${section}-${index}`}>Descrição</label>
              <textarea
                id={`descricao-${section}-${index}`}
                className="bg-MediumGray border border-gray-300 rounded p-2 my-1 h-28 resize-none"
                value={item.descricao}
                onChange={(e) => handleChange(index, "descricao", e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 mt-2">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-deepGreen text-white rounded-md cursor-pointer hover:opacity-90 transition"
                onClick={() => handleSave()}
              >
                <SaveAll size={18} />
                <span>Salvar</span>
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-md cursor-pointer hover:opacity-90 transition"
                onClick={() => setConfirmIndex(index)}
              >
                <Trash2 size={18} />
                <span>Excluir</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
