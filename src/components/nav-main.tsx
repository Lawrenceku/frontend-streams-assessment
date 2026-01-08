"use client";

import { ChevronDown, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export function NavMain({
  items,
  secondaryItems,
}: {
  items: NavItem[];
  secondaryItems?: NavItem[];
}) {
  const pathname = usePathname();
  const routesSplit = pathname.split("/");

  /**
   * eg runppermint.com/dashboard/reports/123
   * baseRoute = reports
   */
  const baseRoute = routesSplit[2];
  const isDashboard = routesSplit[2] === undefined;

  const isActive = (route: string) => {
    if (route === "/dashboard") {
      return isDashboard;
    }
    return baseRoute === route.split("/")[2];
  };

  const renderItem = (item: NavItem) => {
    const active = item.title === "Streams";
    return (
      <SidebarMenuItem key={item.title}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarMenuButton
              asChild
              className={cn(
                "justify-center w-full h-auto py-2 transition-all duration-200",
                active
                  ? "bg-[#F7F8F9] rounded-[12px]"
                  : "hover:bg-transparent"
              )}
            >
              <a href={item.url} className={cn("flex items-center justify-center", active && "gap-[10px]")}>
                {item.icon && (
                  <item.icon
                    className={cn(
                      "w-[40px] h-[40px] transition-colors duration-200",
                      active ? "text-[#625afa]" : "text-[#4B5563] hover:text-[#111928]"
                    )}
                  />
                )}
                <span className="sr-only">{item.title}</span>
                {active && (
                  <span className="text-[10px] text-[#625afa]">✦</span>
                )}
              </a>
            </SidebarMenuButton>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.title}</p>
          </TooltipContent>
        </Tooltip>
      </SidebarMenuItem>
    );
  };

  return (
    <SidebarGroup className="px-5 pt-[36px]">
      <SidebarMenu className="gap-[16px] place-items-center">
        {items.map(renderItem)}

        {secondaryItems && secondaryItems.length > 0 && (
          <>
            <div className="w-full px-2 py-2">
              <Separator className="bg-[#E5E7EB]" />
            </div>
            {secondaryItems.map(renderItem)}
          </>
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
