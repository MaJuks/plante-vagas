import * as React from "react";
import { LogOut, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { NavMain, type NavItem } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";

import { Sidebar, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";
import { clearSession } from "@/services/api";

export function AppSidebar({
  items,
  activeTab,
  onSelectTab,
  ...props
}: {
  items: NavItem[];
  activeTab: string;
  onSelectTab: (value: string) => void;
} & React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearSession();
    navigate("/login");
  };
  return (
    <Sidebar
      className="flex top-20 h-[calc(100svh-5rem)] font-SecondFont border-r border-gray-100"
      collapsible="icon"
      {...props}
    >
      <SidebarContent>
        {items.length > 0 && <NavMain items={items} activeTab={activeTab} onSelect={onSelectTab} />}
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => navigate("/pesquisa-de-vagas")}
              className="bg-deepGreen text-white hover:bg-mediumGreen hover:text-white font-medium"
              tooltip="Buscar Vagas"
            >
              <Search size={16} />
              <span>Buscar Vagas</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut />
              Sair da conta
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
