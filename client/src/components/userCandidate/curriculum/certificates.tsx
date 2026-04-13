import { PlusCircle, SaveAll, Trash2 } from "lucide-react";
import { useCurriculum } from "../curriculumContext";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";


const EMPTY_CERTIFICATE =  {nomeInstituicao: "", descricao: "", certificate_name: "" }

const normalizeCertificates = (list: any[]) =>
  list.map(({ nomeInstituicao, descricao, certificate_name }) => ({ nomeInstituicao, descricao, certificate_name }));

export default function Certificate() {

  const {curriculum, saveSection} = useCurriculum()

  const [certificates, setCertificates] = useState(curriculum.certificados.length > 0 ? normalizeCertificates(curriculum.certificados) : [EMPTY_CERTIFICATE] )
  const [confirmIndex, setConfirmIndex] = useState<number | null>(null)

  useEffect(() => {
  setCertificates(curriculum.certificados.length > 0 ? normalizeCertificates(curriculum.certificados) : [EMPTY_CERTIFICATE])
    }, [curriculum.certificados])

  const handleChange = async (index: number, field: string, value: string) => {
   const newList = [...certificates]
   newList[index] = {...certificates[index], [field]: value }
   setCertificates(newList)
  }

  const handleSave = async () => {
    const loadingToast = toast.loading("Salvando certificados...")
    try {
      await saveSection("certificados", normalizeCertificates(certificates))
      toast.success("certificado salvo com sucesso", { id: loadingToast })
    } catch {
      toast.error("Erro ao salvar certificados", { id: loadingToast })
    }
  }

  const handleDelete = async (index: number) => {
    const loadingToast = toast.loading("Excluindo Certificado...")
    try {
      const deletedList = certificates.filter((_, i) => i !== index)
      setCertificates(deletedList)
      await saveSection("certificados", normalizeCertificates(deletedList))
      toast.success("certificado excluído com sucesso!", { id: loadingToast })
    } catch {
      toast.error("Erro ao excluir certificados.", { id: loadingToast })
    }
  }

  return (
    <>
      <ConfirmDialog
        open={confirmIndex !== null}
        onOpenChange={(open) => { if (!open) setConfirmIndex(null) }}
        title="Excluir certificado"
        description="Tem certeza que deseja excluir este certificado? Esta ação não pode ser desfeita."
        onConfirm={() => { if (confirmIndex !== null) { handleDelete(confirmIndex); setConfirmIndex(null) } }}
      />
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr />
        <h1 className="text-xl mt-6 mb-4">Adicione seus certificados</h1>

        <div className="flex items-center mb-6">
          <button className="cursor-pointer flex items-center gap-4 text-deepGreen" onClick={() => setCertificates([...certificates, { nomeInstituicao: "" , descricao: "", certificate_name: "" }])}>
            <PlusCircle />
            <span>Adicionar certificado</span>
          </button>
        </div>
      {certificates.map((certificate, index) => (
        <div className="bg-paleGreen border border-deepGreen rounded-md p-6 mt-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="certificado">Certificado</label>
              <input
                type="text"
                id="certificado"
                className="bg-MediumGray border border-gray-300 rounded p-2 my-1"
                value={certificate.certificate_name}
                onChange={(e) => handleChange(index, "certificate_name", e.target.value )}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="instituicao">Nome da instituição</label>
              <input
                type="text"
                id="instituicao"
                className="bg-MediumGray border border-gray-300 rounded p-2 my-1"
                value={certificate.nomeInstituicao}
                onChange={(e) => handleChange(index, "nomeInstituicao", e.target.value )}
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              className="bg-MediumGray border border-gray-300 rounded p-2 my-1 h-28 resize-none"
              value={certificate.descricao}
              onChange={(e) => handleChange(index, "descricao", e.target.value )}
            ></textarea>
          </div>

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


      ))}
        
      </div>
    </>
  );
}
