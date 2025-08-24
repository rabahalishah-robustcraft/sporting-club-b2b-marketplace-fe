"use-client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import AdminHomeContent from "../components/AdminHomeContent";
import UsersContent from "../components/UsersContent";
import ListingsContent from "../components/ListingsContent";
import MessagesContent from "../components/MessagesContent";
import PagesContent from "../components/PagesContent";
import CategoriesContent from "../components/CategoriesContent";
import { useState } from "react";
import BusinessDetailContent from "../components/BusinessDetailContent";
import ClubDetailContent from "../components/ClubDetailContent";

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("Dashboard"); // Set initial state to 'Dashboard'

  const MainContent = ({ activeComponent }) => {
    switch (activeComponent) {
      case "Dashboard":
        return <AdminHomeContent />;
      case "Users":
        return <UsersContent />;
      case "Listings":
        return <ListingsContent />;
      case "Messages":
        return <MessagesContent />;
      case "Pages":
        return <PagesContent />;
      case "Categories":
        return <CategoriesContent />;
      case "BusinessDetailContent":
        return <BusinessDetailContent />;
      case "ClubDetailContent":
        return <ClubDetailContent />;
      // case "Logout":
      //   return <LogoutContent />;
      default:
        return <AdminHomeContent />; // Default content
    }
  };
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
        <MainContent activeComponent={activeComponent} />
      </SidebarInset>
    </SidebarProvider>
  );
}
