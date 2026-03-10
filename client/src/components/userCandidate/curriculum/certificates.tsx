import { PlusCircle, Save, Trash2 } from "lucide-react";

export default function Certificate() {
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr />
        <h1 className="text-xl mt-6 mb-4">Adicione seus certificados</h1>

        <div className="flex items-center mb-6">
          <button className="cursor-pointer flex items-center gap-4 text-deepGreen">
            <PlusCircle />
            <span>Adicionar certificado</span>
          </button>
        </div>

        <div className="bg-paleGreen border border-deepGreen rounded-md p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="certificado">Certificado</label>
              <input
                type="text"
                id="certificado"
                className="bg-MediumGray border border-gray-300 rounded p-2 my-1"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="instituicao">Nome da instituição</label>
              <input
                type="text"
                id="instituicao"
                className="bg-MediumGray border border-gray-300 rounded p-2 my-1"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              className="bg-MediumGray border border-gray-300 rounded p-2 my-1 h-28 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button className="text-deepGreen cursor-pointer">
              <Save />
            </button>
            <button className="text-red-900 cursor-pointer">
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
