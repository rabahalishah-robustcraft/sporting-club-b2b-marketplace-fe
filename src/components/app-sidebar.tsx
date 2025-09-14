import * as React from "react";
import {
  IconMessage,
  IconHome,
  IconBookmark,
  IconLogout,
  IconTags,
  IconFiles,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Robbie",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: IconHome,
    },
    {
      title: "Users",
      url: "/admin/dashboard/users",
      icon: IconUsers,
    },
    {
      title: "Listings",
      url: "/admin/dashboard/listings",
      icon: IconBookmark,
    },
    {
      title: "Messages",
      url: "/admin/dashboard/messages",
      icon: IconMessage,
    },
    {
      title: "Pages",
      url: "/admin/dashboard/pages",
      icon: IconFiles,
    },
    {
      title: "Categories",
      url: "/admin/dashboard/categories",
      icon: IconTags,
    },
  ],
  navSecondary: [
    {
      title: "Logout",
      url: "/admin/login",
      icon: IconLogout,
    },
  ],
};

export function AppSidebar({
  activeComponent,
  setActiveComponent,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="bg-slate-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <img
              src="/src/assets/logo/SPORTS_CORP_LOGO.webp"
              alt="Sport Corp Logo"
              className="h-12"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-slate-200">
        <NavMain
          items={data.navMain}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="bg-slate-200">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
