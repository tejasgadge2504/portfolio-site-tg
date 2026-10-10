import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "../ui/sidebar";
import AppSidebar from "../layouts/AppSidebar";
import TopBar from "../layouts/ToolBar";
import BottomNav from "../layouts/BottomNav";

export default function AppLayout() {
  return (
    <SidebarProvider className="app-shell" style={{ "--sidebar-width": "16.5rem" }}>
      <style>{`
        /* Safety net against leftover Vite template CSS. Safe to delete once App.css / #root rules are gone. */
        html, body, #root { max-width: none !important; margin: 0 !important; padding: 0 !important; text-align: left !important; }
        body { display: block !important; min-height: 100svh; }

        /* Anchors rendered via <Button asChild> / <SidebarMenuButton asChild> must stay flex rows */
        .app-shell a[class~="inline-flex"] { display: inline-flex; }
        .app-shell a[class~="flex"] { display: flex; }
      `}</style>

      <AppSidebar />
      <SidebarInset className="min-w-0 bg-background">
        <TopBar />
        <div className="flex-1 pb-28 md:pb-0">
          <Outlet />
        </div>
      </SidebarInset>
      <BottomNav />
    </SidebarProvider>
  );
}