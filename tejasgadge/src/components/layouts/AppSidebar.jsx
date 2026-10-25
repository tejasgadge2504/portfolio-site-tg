import { NavLink, useLocation } from "react-router-dom";
import { Download, Mail, Send, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { navItems } from "../../Routes";
import {
  PROFILE,
  SOCIALS,
  STATS,
  BUILDS,
  TESTIMONIALS,
  PROJECTS,
  FILTERS,
  EMAIL
} from "../../data/Portfolio";



export default function AppSidebar() {
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon">
      <style>{`
        .sb-brand { display: flex; align-items: center; gap: .75rem; min-width: 0; }
        .sb-row { display: flex; align-items: center; gap: .75rem; width: 100%; min-width: 0; }
        .sb-row > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .sb-row-center { justify-content: center; gap: .5rem; }

        .sb-mark { background: linear-gradient(135deg, var(--primary), oklch(0.68 0.2 330)); }
        .sb-cta {
          border: 1.5px solid transparent;
          background:
            linear-gradient(var(--sidebar), var(--sidebar)) padding-box,
            linear-gradient(120deg, var(--primary), oklch(0.7 0.2 330)) border-box;
          box-shadow: 0 8px 20px -10px color-mix(in oklab, var(--primary) 60%, transparent);
        }
      `}</style>

      <SidebarHeader className="gap-4 p-4 group-data-[collapsible=icon]:p-2">
        <div className="sb-brand">
          <div className="sb-mark grid size-10 shrink-0 place-items-center rounded-xl text-sm font-bold text-white group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:text-xs">
            TG
          </div>
          <div className="min-w-0 leading-tight group-data-[collapsible=icon]:hidden">
            <p className="truncate text-base font-bold">Tejas Gadge</p>
            <p className="truncate text-xs text-muted-foreground">Computer Engineer</p>
          </div>
        </div>

        <div className="group-data-[collapsible=icon]:hidden">
          <Button asChild variant="outline" className="sb-cta h-11 w-full rounded-full font-semibold">
            <a href={`mailto:${EMAIL}`}>
              <span className="sb-row sb-row-center">
                <Send className="size-4 shrink-0" />
                <span>Hire me</span>
              </span>
            </a>
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {navItems.map(({ label, to, icon: Icon }) => (
              <SidebarMenuItem key={to}>
                <SidebarMenuButton
                  asChild
                  size="lg"
                  tooltip={label}
                  isActive={pathname === to}
                  className="rounded-xl text-[0.95rem] data-[active=true]:bg-primary/10 data-[active=true]:font-semibold data-[active=true]:text-primary"
                >
                  <NavLink to={to} end>
                    <span className="sb-row">
                      <Icon className="size-4 shrink-0" />
                      <span className="group-data-[collapsible=icon]:hidden">{label}</span>
                    </span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-3 p-3">
        <div className="grid gap-2 group-data-[collapsible=icon]:hidden">
          <Card className="gap-1 rounded-xl bg-sidebar-accent/60 p-3 shadow-none">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Open for freelance</p>
              <Sparkles className="size-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Have an idea? Let's build it together.</p>
          </Card>
          <Card className="gap-1 rounded-xl bg-sidebar-accent/60 p-3 shadow-none">
            <a href="/resume.pdf" download className="block">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Download résumé</p>
                <Download className="size-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">Grab my CV as a PDF.</p>
            </a>
          </Card>
        </div>

        <div className="flex justify-center gap-1 group-data-[collapsible=icon]:flex-col">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <Button key={label} variant="ghost" size="icon" className="rounded-full" asChild>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            </Button>
          ))}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}