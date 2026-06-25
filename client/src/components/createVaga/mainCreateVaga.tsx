import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import VagaData from "./vagaData/vagaData";
import Processselective from "./ProcessoSeletivo/ProcessoSeletivo";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebarCreate } from "../ui/app-sidebar";
import HeaderCompany from "@/components/home-page/headers/headerCompany";
import Etapas from "./ProcessoSeletivo/etapas/etapas";
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
        beneficio: vaga.beneficios[0]?.nome ?? "",
        etapas: vaga.etapas.map((e) => ({ nome: e.nome, descricao: e.descricao })),
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
      <div className="flex justify-center items-center h-screen font-SecondFont">
        <p>Carregando dados da vaga...</p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebarCreate activeTab={activeTab} setActiveTab={setActiveTab} />
      <SidebarInset>
        <header>
          <HeaderCompany />
        </header>

        <div className="w-full h-12 mt-20 bg-paleGreen flex items-center p-2">
          <SidebarTrigger />
        </div>

        <div className="items-center mt-30">
          <div className="w-full">{renderContent()}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

const MainCreateVaga = () => (
  <VagaCreateProvider>
    <MainCreateVagaInner />
  </VagaCreateProvider>
);

export default MainCreateVaga;
