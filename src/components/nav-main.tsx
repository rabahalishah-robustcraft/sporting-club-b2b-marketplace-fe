import { type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useParams } from "react-router-dom";

export function NavMain({
  activeComponent,
  setActiveComponent,
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const params = useParams();

  console.log("params: ", params);

  const path = params["*"];

  const activeTab = path.split("/").pop();

  items.map((item) => {
    console.log("title: ", item.title);
  });

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <Link to={item.url}>
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={
                    item.title.toLowerCase() == activeTab
                      ? "bg-primary text-white rounded-lg p-6 hover:bg-primary/80 hover:text-white"
                      : ""
                  }
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
