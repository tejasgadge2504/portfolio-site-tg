import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Moon, Send, Sun } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { navItems } from "../../Routes";

function useTheme() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);
  return [dark, setDark];
}

export default function TopBar() {
  const { pathname } = useLocation();
  const [dark, setDark] = useTheme();
  const current = navItems.find((n) => n.to === pathname);

  return (
    <header
    className="sticky top-0 z-30 flex items-center gap-3 border-b bg-background/80 px-4 pb-3 backdrop-blur md:px-6"
    //   className="sticky top-0 z-30 flex items-center gap-3 border-b bg-card/80 px-4 pb-3 backdrop-blur md:px-8"
      style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.75rem)" }}
    >
      <SidebarTrigger className="hidden md:inline-flex" />
      <Separator orientation="vertical" className="hidden h-5 md:block" />

      {/* mobile brand */}
      <div className="flex items-center gap-2 md:hidden">
        <div
          className="grid size-8 place-items-center rounded-lg text-xs font-bold text-white"
          style={{ background: "linear-gradient(135deg, var(--primary), oklch(0.68 0.2 330))" }}
        >
          TG
        </div>
        <span className="text-sm font-bold">Tejas Gadge</span>
      </div>

      <h2 className="hidden text-sm font-semibold md:block">{current?.label ?? "Portfolio"}</h2>

      <div className="ml-auto flex items-center gap-2">
        <Badge variant="outline" className="hidden gap-2 rounded-full px-3 py-1 sm:inline-flex">
          <span className="size-2 animate-pulse rounded-full bg-green-500" />
          Available for work
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label="Toggle theme"
          onClick={() => setDark((d) => !d)}
        >
          {dark ? <Sun /> : <Moon />}
        </Button>
        <Button asChild className="rounded-full">
          <a href="mailto:you@example.com">
            <Send /> <span className="hidden sm:inline">Let's talk</span>
            <span className="sm:hidden">Hire</span>
          </a>
        </Button>
      </div>
    </header>
  );
}