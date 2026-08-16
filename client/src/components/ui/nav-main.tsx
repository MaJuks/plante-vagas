"use client";

import type { LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export type NavItem = {
  value: string;
  title: string;
  icon?: LucideIcon;
};

export function NavMain({
  items,
  activeTab,
  onSelect,
}: {
  items: NavItem[];
  activeTab: string;
  onSelect: (value: string) => void;
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.value}>
            <SidebarMenuButton
              tooltip={item.title}
              isActive={item.value === activeTab}
              onClick={() => onSelect(item.value)}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
