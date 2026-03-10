import { useState } from "react";


const VagaData = () => {
  const [texto, setTexto] = useState("");
  const maxCaracteres = 5000;
  return (
    <>
      <div className="flex flex-col p-8  md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <h1 className="text-2xl my-4">Preencha os dados do processo seletivo</h1>
        
        <div className="flex flex-col my-8">
          <div className="flex flex-col w-full my-8">
              <label>Nome do processo</label>
              <input
                type="text"
                className="w-full border-1 rounded-sm mt-1 p-1 pl-4 bg-white shadow-md"
              />
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col w-full md:w-1/3">
              <label className="">Data de início</label>
              <input
                type="date"  
                className="w-full bg-white shadow-md border-1 rounded-sm mt-1 p-1 pl-4"
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
        </div>
        <hr className="my-8" />

        <div className="flex flex-col w-full">
            <label className="">Descrição do processo seletivo</label>
            <input
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              maxLength={maxCaracteres}
              type="text"
              className="w-full h-50 border-1 rounded-sm mt-1 p-1 pl-4 bg-white shadow-md"
              />
              <div className="text-right text-sm text-gray-500 mt-1">{texto.length}/{maxCaracteres}</div>
        </div>
      </div>
    </>
  );
};

export default VagaData;
