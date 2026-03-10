"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { MouseEventHandler } from "react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      onClick: MouseEventHandler<HTMLButtonElement> | undefined;
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible cursor-pointer "
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}

                  <span
                    className="w-full text-left cursor-pointer"
                    onClick={item.onClick}
                  >
                    {item.title}
                  </span>

                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 cursor-pointer" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <button
                          type="button"
                          onClick={subItem.onClick}
                          className="w-full text-left cursor-pointer"
                        >
                          <span>{subItem.title}</span>
                        </button>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
