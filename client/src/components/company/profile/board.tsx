import { useEffect, useState } from "react";
import feather from "feather-icons";
import medalha from "../../../assets/icon/medalha.png";
import AboutCompany from "./aboutCompanyProfile/aboutCompany";
import VagasCompanyProfile from "./vagasCompanyProfile/vagasCompanyProfile";

const Board = (props: {
  name: string;
  imagem: any;
  descricao_curta: string;
  descricao_longa: string;
  vagas: any;
}) => {
  useEffect(() => {
    feather.replace(); // Substitui os ícones no DOM
  }, []);
  const [activeTab, setActiveTabe] = useState("vaga");

  return (
    <div className="flex flex-col bg-MediumGray p-6 sm:p-10 font-SecondFont">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
        <div className="flex justify-center items-center">
          <img
            src={props.imagem}
            alt="Logo da empresa"
            className="w-24 h-24 sm:w-38 sm:h-38 object-contain"
          />
        </div>

        <div className="flex flex-col gap-2 sm:w-[60%] text-center sm:text-left items-center sm:items-start">
          <p className="text-xl sm:text-2xl font-semibold">
            Um pouco sobre nós
          </p>
          <p className="text-sm">{props.descricao_curta}</p>
        </div>

        <div className="flex justify-center items-center gap-2 text-center sm:text-left">
          <img src={medalha} className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="text-sm">
            Essa empresa já contratou usando o Plante Vagas
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <span className="text-xl sm:text-2xl font-bold">{props.name}</span>
        <hr className="border-t-2 mt-2" />

        <div className="flex flex-wrap gap-4 mt-4">
          <button
            className={`px-4 py-2 transition-colors rounded ${
              activeTab === "vaga"
                ? "bg-oliveGreen text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTabe("vaga")}
          >
            VAGAS
          </button>
          <button
            className={`px-4 py-2 transition-colors rounded ${
              activeTab === "empresa"
                ? "bg-oliveGreen text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTabe("empresa")}
          >
            EMPRESA
          </button>
        </div>
      </div>

      <div className="py-10">
        {activeTab === "vaga" ? (
          <VagasCompanyProfile vagas={props.vagas} />
        ) : (
          <AboutCompany descricao_longa={props.descricao_longa} />
        )}
      </div>
    </div>
  );
};

export default Board;
