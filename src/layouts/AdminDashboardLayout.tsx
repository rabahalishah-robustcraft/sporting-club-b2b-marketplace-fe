"use-client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard"); // Set initial state to 'Dashboard'

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
          backgroundColor: "#e2e8f0", // slate-200
        } as React.CSSProperties
      }
    >
      <AppSidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
        className="bg-slate-200"
        variant="inset"
      />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminDashboardLayout;
