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

const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent transition-all duration-200";
const labelClass = "text-sm font-medium text-gray-700 mb-1.5 block";

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
      <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 font-SecondFont">
          <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont mb-6">
            {title}
          </h1>

          <button
            className="inline-flex items-center gap-2 border border-deepGreen text-deepGreen px-4 py-2.5 rounded-xl font-medium hover:bg-deepGreen hover:text-white transition-colors duration-200 mb-6"
            onClick={() => setItems([...items, { ...EMPTY_ITEM }])}
          >
            <PlusCircle size={18} aria-hidden="true" />
            {addLabel}
          </button>

          {items.map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor={`nome-${section}-${index}`} className={labelClass}>{nameLabel}</label>
                  <select
                    id={`nome-${section}-${index}`}
                    className={inputClass}
                    value={item.nome}
                    onChange={(e) => handleChange(index, "nome", e.target.value)}
                  >
                    <option value=""></option>
                    {nameOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`nivel-${section}-${index}`} className={labelClass}>Nível de experiência</label>
                  <select
                    id={`nivel-${section}-${index}`}
                    className={inputClass}
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

              <div className="mb-4">
                <label htmlFor={`descricao-${section}-${index}`} className={labelClass}>Descrição</label>
                <textarea
                  id={`descricao-${section}-${index}`}
                  className={`${inputClass} h-28 resize-none`}
                  value={item.descricao}
                  onChange={(e) => handleChange(index, "descricao", e.target.value)}
                ></textarea>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  className="flex items-center gap-2 px-5 py-2.5 bg-deepGreen text-white rounded-xl hover:bg-mediumGreen transition-colors duration-200"
                  onClick={() => handleSave()}
                >
                  <SaveAll size={18} aria-hidden="true" />
                  Salvar
                </button>
                <button
                  className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors duration-200"
                  onClick={() => setConfirmIndex(index)}
                >
                  <Trash2 size={18} aria-hidden="true" />
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
