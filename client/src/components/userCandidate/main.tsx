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
import AcademicInfo from "./curriculum/infoAcademic";
import Language from "./curriculum/language";
import ProfessionalInfo from "./curriculum/infoProfessional";
import Certificate from "./curriculum/certificates";
import Differentiate from "./curriculum/differentiate";
import SelectionProcess from "./selectionProcess/selectionProcess";
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
      case "processos-seletivos":
        return <SelectionProcess />;
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
              <HeaderLogged />
            </header>

            <div className="w-full h-12 bg-paleGreen mt-20 flex items-center p-2">
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
