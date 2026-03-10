import { useState } from "react";
import VagaData from "./vagaData/vagaData";
import Processselective from "./ProcessoSeletivo/ProcessoSeletivo";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import {  AppSidebarCreate } from "../ui/app-sidebar";
import HeaderCompany from "@/components/home-page/headers/headerCompany";
import Etapas from "./ProcessoSeletivo/etapas/etapas";


const MainCreateVaga = () => {
    const [activeTab, setActiveTab] = useState("criarVaga");
    console.log(activeTab);

    const renderContent = () => {
    switch (activeTab) {
      case "criarVaga":
        return <VagaData />;
      case "processoSeletivo":
        return <Processselective />;
      case "etapas":
        return <Etapas />;
      default:
        return;
    }
  };
  return (
   <SidebarProvider>
      <AppSidebarCreate activeTab={activeTab} setActiveTab={setActiveTab} />
      <SidebarInset>
 
        <header>
          <HeaderCompany/>
        </header>

        <div className="w-full h-12 mt-20 bg-paleGreen flex items-center p-2">
          <SidebarTrigger />
        </div>

        <div className=" items-center mt-30 ">
          <div className="w-full">{renderContent()}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainCreateVaga;
