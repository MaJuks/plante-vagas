import { PlusCircle, SaveAll, Trash2 } from "lucide-react";
import { useCurriculum } from "../curriculumContext";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

const EMPTY_LENGUAGE = { idioma: "", nivel: "" }

const normalizeIdiomas = (list: any[]) =>
list.map(({ idioma, nivel }) => ({ idioma, nivel }))

export default function Language() {

  const {curriculum, saveSection} = useCurriculum()
  const [confirmIndex, setConfirmIndex] = useState<number | null>(null)
  const [lenguages, setLenguages] = useState(
    curriculum.idiomas.length > 0 ? normalizeIdiomas(curriculum.idiomas) : [EMPTY_LENGUAGE]
  )

  useEffect(() => {
    setLenguages(curriculum.idiomas.length > 0 ? normalizeIdiomas(curriculum.idiomas) : [EMPTY_LENGUAGE])
  }, [curriculum.idiomas])

  const handleChange = async (index: number, field: string, value: string) => {
   const newList = [...lenguages]
   newList[index] = {...lenguages[index], [field]: value }
   setLenguages(newList)
  }

  const handleSave = async () => {
    const loadingToast = toast.loading("Salvando idioma...")
    try {
      await saveSection("idiomas", normalizeIdiomas(lenguages))
      toast.success("Idioma salvo com sucesso", { id: loadingToast })
    } catch {
      toast.error("Erro ao salvar idioma", { id: loadingToast })
    }
  }

  const handleDelete = async (index: number) => {
    const loadingToast = toast.loading("Excluindo idioma...")
    try {
      const deletedList = lenguages.filter((_, i) => i !== index)
      setLenguages(deletedList)
      await saveSection("idiomas", normalizeIdiomas(deletedList))
      toast.success("Idioma excluído com sucesso!", { id: loadingToast })
    } catch {
      toast.error("Erro ao excluir idioma.", { id: loadingToast })
    }
  }

  return (
    <>
      <ConfirmDialog
        open={confirmIndex !== null}
        onOpenChange={(open) => { if (!open) setConfirmIndex(null) }}
        title="Excluir idioma"
        description="Tem certeza que deseja excluir este idioma? Esta ação não pode ser desfeita."
        onConfirm={() => { if (confirmIndex !== null) { handleDelete(confirmIndex); setConfirmIndex(null) } }}
      />
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr />
        <br />
        <h1 className="text-xl">Adicione os idiomas que você fala</h1>
        <br />
        <br />
        <div className="flex items-center">
          <button className="cursor-pointer flex items-center gap-2 sm:gap-4 text-deepGreen" onClick={() => setLenguages([...lenguages , {idioma: "", nivel: ""} ])}>
            <PlusCircle />
            <span>Adicionar idioma</span>
          </button>
        </div>
        <br />
      {lenguages.map((lenguage, index) => (

        <div key={index} className="bg-paleGreen border border-deepGreen rounded-md p-4 md:p-6 shadow-sm mt-10">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-4">
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-1">Idioma</label>
              <select
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                value={lenguage.idioma}
                onChange={(e) => handleChange(index, "idioma", e.target.value)}
              >
                <option value=""></option>
                <option value="portugues">Português</option>
                <option value="ingles">Inglês</option>
                <option value="espanhol">Espanhol</option>
                <option value="frances">Francês</option>
                <option value="alemao">Alemão</option>
                <option value="italiano">Italiano</option>
                <option value="mandarim">Mandarim</option>
                <option value="japones">Japonês</option>
                <option value="coreano">Coreano</option>
                <option value="arabe">Árabe</option>
                <option value="russo">Russo</option>
              </select>
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-1">Nível</label>
              <select
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                value={lenguage.nivel}
                onChange={(e) => handleChange(index, "nivel", e.target.value)}
              >
                <option value=""></option>
                <option value="basico">Básico</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
                <option value="fluente">Fluente / Proficiência</option>
                <option value="nativo">Nativo</option>
              </select>
            </div>
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
      ) )}
        
      </div>
    </>
  );
}
