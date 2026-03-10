import { PlusCircle, Save, Trash2 } from "lucide-react";

export default function Language() {
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <hr />
        <br />
        <h1 className="text-xl">Adicione os idiomas que você fala</h1>
        <br />
        <br />
        <div className="flex items-center">
          <button className="cursor-pointer flex items-center gap-2 sm:gap-4 text-deepGreen">
            <PlusCircle />
            <span>Adicionar idioma</span>
          </button>
        </div>
        <br />
        <div className="bg-paleGreen border-1 bordder-deepGreen p-4 sm:p-15">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            <div className="flex flex-col w-full sm:w-auto">
              <label htmlFor="">Idioma</label>
              <select className="bg-MediumGray w-full sm:w-100 border-1 my-2">
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
            <div className="flex flex-col w-full sm:w-auto">
              <label htmlFor="">Nível</label>
              <select className="bg-MediumGray w-full sm:w-100 border-1 my-2">
                <option value=""></option>
                <option value="basico">Básico</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
                <option value="fluente">Fluente / Proficiência</option>
                <option value="nativo">Nativo</option>
              </select>
            </div>
          </div>
          <br />
          <div className="flex justify-end gap-3">
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
