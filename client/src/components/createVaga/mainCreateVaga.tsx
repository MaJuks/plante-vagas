import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Loader2 } from "lucide-react";
import VagaData from "./vagaData/vagaData";
import Processselective from "./ProcessoSeletivo/ProcessoSeletivo";
import HeaderCompany from "@/components/home-page/headers/headerCompany";
import Etapas from "./ProcessoSeletivo/etapas/etapas";
import Stepper from "./Stepper";
import { VagaCreateProvider, useVagaCreate } from "./VagaCreateContext";
import { getVagaById } from "@/services/vaga";


const MainCreateVagaInner = () => {
  const [activeTab, setActiveTab] = useState("criarVaga");
  const [searchParams] = useSearchParams();
  const vagaId = searchParams.get("vagaId");
  const { setData } = useVagaCreate();
  const [loading, setLoading] = useState(!!vagaId);

  useEffect(() => {
    if (!vagaId) return;
    getVagaById(Number(vagaId)).then((vaga) => {
      setData({
        nome: vaga.nome,
        cargo: vaga.cargo,
        descricao: vaga.descricao,
        salario: vaga.salario ? String(vaga.salario) : "",
        beneficios: vaga.beneficios.map((b) => b.nome),
        requisitos: vaga.requisitos.map((r) => r.nome),
        etapas: vaga.etapas.map((e) => ({ nome: e.nome, descricao: e.descricao })),
        processoSeletivo: vaga.processoSeletivo
          ? {
              nome: vaga.processoSeletivo.nome,
              descricao: vaga.processoSeletivo.descricao,
              dataInicio: vaga.processoSeletivo.dataInicio.slice(0, 10),
              duracaoDias: vaga.processoSeletivo.duracaoDias,
            }
          : { nome: "", descricao: "", dataInicio: "", duracaoDias: 7 },
      });
    }).finally(() => setLoading(false));
  }, [vagaId]);

  const renderContent = () => {
    switch (activeTab) {
      case "criarVaga":
        return <VagaData onProximo={() => setActiveTab("processoSeletivo")} vagaId={vagaId ? Number(vagaId) : undefined} />;
      case "processoSeletivo":
        return <Processselective onProximo={() => setActiveTab("etapas")} />;
      case "etapas":
        return <Etapas vagaId={vagaId ? Number(vagaId) : undefined} />;
      default:
        return;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen font-SecondFont text-gray-500 gap-3">
        <Loader2 size={32} className="animate-spin text-mediumGreen" aria-hidden="true" />
        Carregando dados da vaga...
      </div>
    );
  }

  return (
    <>
      <header>
        <HeaderCompany />
      </header>

      <main className="pt-20">
        <Stepper activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </main>
    </>
  );
};

const MainCreateVaga = () => (
  <VagaCreateProvider>
    <MainCreateVagaInner />
  </VagaCreateProvider>
);

export default MainCreateVaga;
