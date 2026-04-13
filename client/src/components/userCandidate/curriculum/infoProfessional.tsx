import { PlusCircle, Save, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useCurriculum } from "../curriculumContext";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";



const toDateInput = (iso: string) => iso ? iso.slice(0, 10) : ""

const normalizeExperiencias = (list: any[]) =>
  list.map(({ cargo, empresa, descricao, inicioData, fimData, empregoAtual }) => ({
    cargo,
    empresa,
    descricao,
    empregoAtual: empregoAtual ?? false,
    inicioData: toDateInput(inicioData),
    fimData: toDateInput(fimData ?? ""),
  }))

const EMPTY_EXP = { cargo: "", empresa: "", descricao: "", inicioData: "", fimData: "", empregoAtual: false }

export default function ProfessionalInfo() {
  const {curriculum, saveSection} = useCurriculum()
  const [confirmIndex, setConfirmIndex] = useState<number | null>(null)
  const [experiencias, setExperiencias] = useState(
    curriculum.experiencias.length > 0 ? normalizeExperiencias(curriculum.experiencias) : [EMPTY_EXP]
  )

  
  const handleChange = (index: number, field: string, value:any) => {
    const newList = [...experiencias]
    newList[index] = {...newList[index], [field]: value}
    setExperiencias(newList)
  }

  const formatExperiencias = (list: typeof experiencias) =>
    list.map(({ cargo, empresa, descricao, inicioData, fimData, empregoAtual }) => ({
      cargo,
      empresa,
      descricao,
      empregoAtual,
      inicioData: new Date(inicioData).toISOString(),
      fimData: fimData ? new Date(fimData).toISOString() : undefined,
    }))

  const handleSave = async () => {
      const loadingToast = toast.loading("Salvando experiência...")
      try {
        await saveSection("experiencias", formatExperiencias(experiencias))
        toast.success("Experiência salva com sucesso!", { id: loadingToast })
      } catch {
        toast.error("Erro ao salvar experiência.", { id: loadingToast })
      }
  }

  const handleDelete = async (index: number) => {
    const loadingToast = toast.loading("Excluindo experiência...")
    try {
      const deletedList = experiencias.filter((_, i) => i !== index)
      setExperiencias(deletedList)
      await saveSection("experiencias", formatExperiencias(deletedList))
      toast.success("Experiência excluída com sucesso!", { id: loadingToast })
    } catch {
      toast.error("Erro ao excluir experiência.", { id: loadingToast })
    }
  }

  useEffect(() => {
    setExperiencias(curriculum.experiencias.length > 0 ? normalizeExperiencias(curriculum.experiencias) : [EMPTY_EXP])
  }, [curriculum.experiencias])

 

  return (
    <>
      <ConfirmDialog
        open={confirmIndex !== null}
        onOpenChange={(open) => { if (!open) setConfirmIndex(null) }}
        title="Excluir experiência"
        description="Tem certeza que deseja excluir esta experiência? Esta ação não pode ser desfeita."
        onConfirm={() => { if (confirmIndex !== null) { handleDelete(confirmIndex); setConfirmIndex(null) } }}
      />
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr className="w-full" />
        <div className="my-6">
          <h1 className="text-xl md:text-2xl font-medium">
            Adicione suas experiências profissionais
          </h1>
        </div>

         <div className="flex items-center mb-6">
          <button className="flex items-center gap-2 text-deepGreen hover:text-opacity-80 transition-colors" onClick={() => setExperiencias([ ...experiencias ,{cargo: "", empresa: "", descricao: "", inicioData: "", fimData: "", empregoAtual: false}])}  >
            <PlusCircle className="w-5 h-5" />
            <span>Adicionar experiência profissional</span>
          </button>
        </div>


        {experiencias.map((experiencia, index) => (

          <div key={index}> 

          <div className="bg-paleGreen border border-deepGreen rounded-md p-4 md:p-6 shadow-sm mt-10">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="cargo" className="text-sm font-medium mb-1">
                Cargo
              </label>
              <input
                type="text"
                id="cargo"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                value={experiencia.cargo}
                onChange={(e) => handleChange(index, "cargo", e.target.value)}
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="empresa" className="text-sm font-medium mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                value={experiencia.empresa}
                onChange={(e) => handleChange(index, "empresa", e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="empregoAtual"
              checked={experiencia.empregoAtual}
              onChange={(e) => handleChange(index, "empregoAtual", e.target.checked)}
              className="w-4 h-4 text-deepGreen border-gray-300 rounded focus:ring-deepGreen"
            />
            <label htmlFor="empregoAtual" className="ml-2 text-sm">
              Emprego Atual
            </label>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="inicio" className="text-sm font-medium mb-1">
                Início
              </label>
              <input
                type="date"
                id="inicioData"
                className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                value={experiencia.inicioData}
                onChange={(e) => handleChange(index, "inicioData", e.target.value)}

          />  
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="fim" className="text-sm font-medium mb-1">
                Fim
              </label>
              <input
                type="date"
                id="fimData"
                disabled={experiencia.empregoAtual}
                className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen ${
                  experiencia.empregoAtual
                    ? "bg-oliveGreen cursor-not-allowed opacity-60"
                    : "bg-MediumGray"
                }`}
                value={experiencia.fimData}
                onChange={(e) => handleChange(index, "fimData", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="descricao" className="text-sm font-medium mb-1">
              Descrição da função e atividades
            </label>
            <textarea
              id="descricao"
              rows={3}
              className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
              value={experiencia.descricao}
              onChange={(e) => handleChange(index, "descricao", e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              className="flex items-center gap-2 bg-deepGreen text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              onClick={() => handleSave()}>
              <Save className="w-4 h-4" />
              <span>Salvar</span>
            </button>
            <button
              className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              onClick={() => setConfirmIndex(index)}
            >
              <Trash2 className="w-4 h-4" />
              <span>Excluir</span>
            </button>
          </div>
          </div>

        </div>


        ))}

       
        
      </div>
    </>
  );
}
