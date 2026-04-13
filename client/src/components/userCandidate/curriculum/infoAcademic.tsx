import { PlusCircle, SaveAll, Trash2 } from "lucide-react";
import { useCurriculum } from "../curriculumContext";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

const toDateInput = (iso: string) => iso ? iso.slice(0, 10) : ""

const normalizeFormacoes = (list: any[]) =>
  list.map(({ nivelFormacao, grauFormacao, curso, nomeInstituicao, status, inicioData, fimData }) => ({
    nivelFormacao,
    grauFormacao,
    curso,
    nomeInstituicao,
    status,
    inicioData: toDateInput(inicioData),
    fimData: toDateInput(fimData ?? ""),
  }))

const EMPTY_FORMACAO = { nivelFormacao: "", grauFormacao: "", curso: "", nomeInstituicao: "", status: "", inicioData: "", fimData: "" }

export default function AcademicInfo() {
  const { curriculum, saveSection } = useCurriculum()
  const [confirmIndex, setConfirmIndex] = useState<number | null>(null)
  const [infoAcademics, setInfoacademics] = useState(
    curriculum.formacoes.length > 0 ? normalizeFormacoes(curriculum.formacoes) : [EMPTY_FORMACAO]
  )

  useEffect(() => {
    setInfoacademics(curriculum.formacoes.length > 0 ? normalizeFormacoes(curriculum.formacoes) : [EMPTY_FORMACAO])
  }, [curriculum.formacoes])

  const handleChange = (index: number, field: string, value: any) => {
    const newList = [...infoAcademics]
    newList[index] = { ...newList[index], [field]: value }
    setInfoacademics(newList)
  }

  const formatFormacoes = (list: typeof infoAcademics) =>
    list.map(({ nivelFormacao, grauFormacao, curso, nomeInstituicao, status, inicioData, fimData }) => ({
      nivelFormacao,
      grauFormacao,
      curso,
      nomeInstituicao,
      status,
      inicioData: new Date(inicioData).toISOString(),
      fimData: fimData ? new Date(fimData).toISOString() : undefined,
    }))

  const handleSave = async () => {
    const loadingToast = toast.loading("Salvando Informacão Acadademica")
    try {
      await saveSection("formacoes", formatFormacoes(infoAcademics))
      toast.success("Informacoes academicas salvas com sucesso", { id: loadingToast })
    } catch {
      toast.error("Falha ao salvar experiencias", { id: loadingToast })
    }
  }

  const handleDelete = async (index: number) => {
    const loadingToast = toast.loading("Excluindo formação...")
    try {
      const deletedList = infoAcademics.filter((_, i) => i !== index)
      setInfoacademics(deletedList)
      await saveSection("formacoes", formatFormacoes(deletedList))
      toast.success("Informacoes acadeicas excluídas com sucesso!", { id: loadingToast })
    } catch {
      toast.error("Erro ao excluir experiência.", { id: loadingToast })
    }
  }

  return (
    <>
      <ConfirmDialog
        open={confirmIndex !== null}
        onOpenChange={(open) => { if (!open) setConfirmIndex(null) }}
        title="Excluir formação"
        description="Tem certeza que deseja excluir esta formação acadêmica? Esta ação não pode ser desfeita."
        onConfirm={() => { if (confirmIndex !== null) { handleDelete(confirmIndex); setConfirmIndex(null) } }}
      />
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr className="w-full" />
        <div className="my-6">
          <h1 className="text-xl md:text-2xl font-medium">
            Adicione suas informações acadêmicas
          </h1>
        </div>

        <div className="flex items-center mb-6">
          <button className="flex items-center gap-2 text-deepGreen hover:text-opacity-80 transition-colors" onClick={() => setInfoacademics([ ...infoAcademics  ,{ nivelFormacao: "", grauFormacao: "", curso: "", nomeInstituicao: "", status: "", inicioData: "", fimData: "" }])} >
            <PlusCircle className="w-5 h-5" />
            <span>Adicionar suas formações acadêmicas</span>
          </button>
        </div>
        {infoAcademics.map((infoAcademic, index) => (

          <div key={index}>
            <div className="bg-paleGreen border border-deepGreen rounded-md p-4 md:p-6 shadow-sm mt-10">
              {/* Primeira linha - Nível e Grau */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="education-level"
                    className="text-sm font-medium mb-1"
                    
                  >
                    Nível de formação
                  </label>
                  <select
                    id="education-level"
                    
                    className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                    value={infoAcademic.nivelFormacao}
                     onChange={(e) => handleChange(index, "nivelFormacao", e.target.value)}
                  >
                    <option value="fundamental_incompleto">
                      Ensino Fundamental Incompleto
                    </option>
                    <option value="fundamental_completo">
                      Ensino Fundamental Completo
                    </option>
                    <option value="medio_incompleto">
                      Ensino Médio Incompleto
                    </option>
                    <option value="medio_completo">Ensino Médio Completo</option>
                    <option value="tecnico_incompleto">
                      Curso Técnico Incompleto
                    </option>
                    <option value="tecnico_completo">Curso Técnico Completo</option>
                    <option value="superior_incompleto">
                      Ensino Superior Incompleto
                    </option>
                    <option value="superior_completo">
                      Ensino Superior Completo
                    </option>
                    <option value="pos_graduacao">
                      Pós-graduação (Especialização)
                    </option>
                    <option value="mestrado">Mestrado</option>
                    <option value="doutorado">Doutorado</option>
                    <option value="pos_doutorado">Pós-doutorado</option>
                  </select>
                </div>

                <div className="flex flex-col flex-1">
                  <label htmlFor="degree-type" className="text-sm font-medium mb-1">
                    Grau de formação
                  </label>
                  <select
                    id="degree-type"
                    className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                    value={infoAcademic.grauFormacao}
                    onChange={(e) => handleChange(index, "grauFormacao", e.target.value)}


                  >
                    <option value=""></option>
                    <option value="tecnologo">Tecnólogo</option>
                    <option value="licenciatura">Licenciatura</option>
                    <option value="bacharelado">Bacharelado</option>
                    <option value="especializacao">
                      Pós-graduação (Especialização / MBA)
                    </option>
                    <option value="mestrado">Mestrado</option>
                    <option value="doutorado">Doutorado</option>
                    <option value="pos_doutorado">Pós-doutorado</option>
                  </select>
                </div>
              </div>

              {/* Segunda linha - Status e Curso */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                <div className="flex flex-col md:w-1/3">
                  <label htmlFor="status" className="text-sm font-medium mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                    value={infoAcademic.status}
                    onChange={(e) => handleChange(index, "status", e.target.value)}
                  >
                    <option value=""></option>
                    <option value="concluido">Concluído</option>
                    <option value="em_andamento">Em andamento</option>
                    <option value="trancado">Trancado</option>
                    <option value="interrompido">Interrompido</option>
                    <option value="nao_iniciado">Não iniciado</option>
                  </select>
                </div>

                <div className="flex flex-col flex-1">
                  <label htmlFor="course" className="text-sm font-medium mb-1">
                    Curso
                  </label>
                  <input
                    type="text"
                    id="course"
                    className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                    value={infoAcademic.curso}
                    onChange={(e) => handleChange(index, "curso", e.target.value)}
               />
                </div>
              </div>

              {/* Terceira linha - Nome da instituição */}
              <div className="flex flex-col mb-4">
                <label htmlFor="institution" className="text-sm font-medium mb-1">
                  Nome da instituição
                </label>
                <input
                  type="text"
                  id="institution"
                  className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                  value={infoAcademic.nomeInstituicao}
                  onChange={(e) => handleChange(index, "nomeInstituicao", e.target.value)}


                />
              </div>

              {/* Quarta linha - Datas */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
                <div className="flex flex-col flex-1">
                  <label htmlFor="start-date" className="text-sm font-medium mb-1">
                    Início
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                    value={infoAcademic.inicioData}
                    onChange={(e) => handleChange(index, "inicioData", e.target.value)}


                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label htmlFor="end-date" className="text-sm font-medium mb-1">
                    Fim
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    className="bg-MediumGray border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-deepGreen"
                    value={infoAcademic.fimData}
                    onChange={(e) => handleChange(index, "fimData", e.target.value)}
                  />
                </div>
              </div>

              {/* Botões */}
              <div className="flex justify-end gap-3 mt-6">
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
          </div>
        ))}

      </div>
    </>
  );
}
