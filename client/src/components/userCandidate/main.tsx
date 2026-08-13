import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import HeaderLogged from "../home-page/headers/headerUserLogged";
import ProfileCard from "./profile/profilecard";
import { useState } from "react";
import MyData from "./profile/myData";
import Address from "./profile/address";
import InfoLogin from "./profile/infoLogin";
import PersonalInfo from "./curriculum/infoPersonal";
import CurriculumView from "./curriculum/curriculumView";
import AcademicInfo from "./curriculum/infoAcademic";
import Language from "./curriculum/language";
import ProfessionalInfo from "./curriculum/infoProfessional";
import Certificate from "./curriculum/certificates";
import Differentiate from "./curriculum/differentiate";
import OperacaoAgricola from "./curriculum/operacaoAgricola";
import OperacaoPecuaria from "./curriculum/operacaoPecuaria";
import OperacaoFlorestal from "./curriculum/operacaoFlorestal";
import Culturas from "./curriculum/culturas";
import Maquinas from "./curriculum/maquinas";
import Tecnologias from "./curriculum/tecnologias";
import SelectionProcess from "./selectionProcess/selectionProcess";
import ImportCurriculum from "./curriculum/importCurriculum";
import { CurriculumProvider } from "./curriculumContext";
export default function Page() {
  const [activeTab, setActiveTab] = useState("Perfil");
  console.log(activeTab);

  const renderContent = () => {
    switch (activeTab) {
      case "Perfil":
        return <ProfileCard />;
      case "meus-dados":
        return <MyData />;
      case "endereco":
        return <Address />;
      case "informacoes-login":
        return <InfoLogin />;
      case "visualizar-curriculo":
        return <CurriculumView />;
      case "informacoes-pessoais":
        return <PersonalInfo />;
      case "formacao-academica":
        return <AcademicInfo />;
      case "experiencia-profissional":
        return <ProfessionalInfo />;
      case "idioma":
        return <Language />;
      case "certificados":
        return <Certificate />;
      case "diferenciais":
        return <Differentiate />;
      case "operacoes-agricolas":
        return <OperacaoAgricola />;
      case "operacoes-pecuarias":
        return <OperacaoPecuaria />;
      case "operacoes-florestais":
        return <OperacaoFlorestal />;
      case "culturas":
        return <Culturas />;
      case "maquinas":
        return <Maquinas />;
      case "tecnologias":
        return <Tecnologias />;
      case "processos-seletivos":
        return <SelectionProcess />;
      case "importar-curriculo":
        return <ImportCurriculum />;
      default:
        return ;
    }
  };

  return (
    <SidebarProvider>
      <CurriculumProvider>
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarInset>
            <header>
              <HeaderLogged activeTab={activeTab} />
            </header>

            <div className="w-full h-12 bg-paleGreen mt-20 sticky top-20 z-10 flex items-center p-2">
              <SidebarTrigger />
            </div>

            <div className=" items-center mt-30 ">
              <div className="w-full">{renderContent()}</div>
            </div>
          </SidebarInset>
      </CurriculumProvider>
    </SidebarProvider>
  );
}
