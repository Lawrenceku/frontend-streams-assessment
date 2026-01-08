import * as React from "react";
import {
  Users,
  Home,
  Binoculars,
  Waves,
  Settings,
  PanelRightClose,
  Form,
  Blocks,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { cn } from "@/lib/utils";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Insights",
      url: "/dashboard/tests",
      icon: Binoculars,
    },
    {
      title: "Forms",
      url: "/dashboard/forms",
      icon: Form,
    },
    {
      title: "Blocks",
      url: "/dashboard/blocks",
      icon: Blocks,
    },
    {
      title: "Streams",
      url: "/dashboard/streams",
      icon: Waves,
    },
  ],
  navSecondary: [
    {
      title: "Team",
      url: "/dashboard/team",
      icon: Users,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, setOpen } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="pt-3 mb-6">
        <div className={cn("px-2")}>
          <PanelRightClose

            className="cursor-pointer mx-auto rotate-180 w-[24px] h-[38px] text-sidebar-primary-foreground/40"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} secondaryItems={data.navSecondary} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar >
  );
}
