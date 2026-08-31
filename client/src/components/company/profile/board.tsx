import { useState } from "react";
import { Briefcase, Building2 } from "lucide-react";
import AboutCompany from "./aboutCompanyProfile/aboutCompany";
import VagasCompanyProfile from "./vagasCompanyProfile/vagasCompanyProfile";
import { Vaga } from "@/services/vaga";

const Board = (props: {
  name: string;
  descricao_longa: string;
  vagas: Vaga[];
  loadingVagas?: boolean;
  onVagaExcluida?: (id: number) => void;
  logoUrl?: string | null;
  bannerUrl?: string | null;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  linkedinUrl?: string | null;
  websiteUrl?: string | null;
}) => {
  const [activeTab, setActiveTab] = useState("vaga");

  const tabs = [
    { id: "vaga", label: "Vagas", icon: Briefcase },
    { id: "empresa", label: "Empresa", icon: Building2 },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden font-SecondFont">
      {/* Banner */}
      <div className="h-24 sm:h-32 bg-gray-100 border-b border-gray-200 overflow-hidden">
        {props.bannerUrl && (
          <img
            src={props.bannerUrl}
            alt="Banner da empresa"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Header */}
      <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-b border-gray-100">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center -mt-10 sm:-mt-12 mb-4 border-2 border-white overflow-hidden">
          {props.logoUrl ? (
            <img
              src={props.logoUrl}
              alt="Logo da empresa"
              className="w-full h-full object-cover"
            />
          ) : (
            <Building2 size={32} className="text-gray-400" aria-hidden="true" />
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-deepGreen font-PrimaryFont">
          {props.name}
        </h1>
      </div>

      {/* Tabs */}
      <div className="px-6 sm:px-8 pt-4 border-b border-gray-100">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-SecondFont font-medium
                       transition-all duration-300 relative ${
                         activeTab === tab.id
                           ? "bg-paleGreen text-deepGreen"
                           : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                       }`}
            >
              <tab.icon size={18} aria-hidden="true" />
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-deepGreen" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {activeTab === "vaga" ? (
          props.loadingVagas
            ? <p className="text-gray-500 text-center py-8">Carregando vagas...</p>
            : <VagasCompanyProfile vagas={props.vagas} onVagaExcluida={props.onVagaExcluida} />
        ) : (
          <AboutCompany
            descricao_longa={props.descricao_longa}
            facebookUrl={props.facebookUrl}
            instagramUrl={props.instagramUrl}
            linkedinUrl={props.linkedinUrl}
            websiteUrl={props.websiteUrl}
          />
        )}
      </div>
    </section>
  );
};

export default Board;
