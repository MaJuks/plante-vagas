import { useState } from "react";
import { useNavigate } from "react-router";


const Etapas = () => {
  const [texto, setTexto] = useState("");
  const maxCaracteres = 5000;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <h1 className="text-2xl my-2">Preencha as etapas do processo seletivo</h1>
        <h2 className="text-xl my-2">Definição de etapas</h2>

        <span className="my-2 mb-10">Etapa 1</span>
        <div className="flex w-full my-4 gap-5">
          <div className="flex flex-col">
              <label>Nome da etapa</label>
              <input
                type="text"
                className="w-180 border-1 rounded-sm mt-1 p-1 pl-4 bg-white shadow-md"
              />
          </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label className="">Duração</label>
              <select name="" id="" className="bg-white shadow-md border-1 rounded-sm mt-1 p-1 pl-4">
                  <option>3 dias</option>
                  <option>7 dias</option>
                  <option>10 dias</option>
                  <option>15 dias</option>
                  <option>20 dias</option>
                  <option>30 dias</option>
              </select>
            </div>
        </div>

        <div className="flex flex-col w-full">
            <label className="">Descrição da etapa</label>
            <input
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              maxLength={maxCaracteres}
              type="text"
              className="w-full h-50 border-1 rounded-sm mt-1 p-1 pl-4 bg-white shadow-md"
              />
              <div className="text-right text-sm text-gray-500 mt-1">{texto.length}/{maxCaracteres}</div>
        </div>
        <button  onClick={() => {navigate("/empresa");}}  className="bg-deepGreen text-white px-6 py-3 rounded-lg  cursor-pointer hover:bg-green-900 font-PrimaryFont">
          FINALIZAR
        </button>

      </div>
    </>
  );
};

export default Etapas;
