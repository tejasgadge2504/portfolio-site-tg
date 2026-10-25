import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Moon, Send, Sun } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { navItems } from "../../Routes";
import { EMAIL } from "../../data/Portfolio";
import { getPageSections } from "../../data/Portfolio";

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
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, hash } = location;

  const [dark, setDark] = useTheme();
  const [activeSection, setActiveSection] = useState("");

  const current = navItems.find((item) => item.to === pathname);
  const sections = getPageSections(pathname);

  useEffect(() => {
    if (!sections.length) {
      setActiveSection("");
      return;
    }

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let active = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element && element.getBoundingClientRect().top <= marker) {
          active = section.id;
        }
      }

      setActiveSection(active);
    };

    // Handle direct URLs and navigation with a hash.
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ block: "start" });
        setActiveSection(id);
      }
    } else {
      updateActiveSection();
    }

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [pathname, hash, sections]);

  const handleSectionClick = (id) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      navigate(`${pathname}#${id}`, { replace: true });
      setActiveSection(id);
    } else {
      navigate(`${pathname}#${id}`);
    }
  };

  return (
    <header
      className="sticky top-0 z-30 flex items-center gap-3 border-b bg-background/90 px-3 pb-3 backdrop-blur-xl md:px-6"
      style={{
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.75rem)",
      }}
    >
      <style>{`
        .tb-sections {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          min-width: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .tb-sections::-webkit-scrollbar {
          display: none;
        }

        .tb-section-link {
          flex-shrink: 0;
          white-space: nowrap;
          border: 0;
          border-radius: 9999px;
          padding: 0.45rem 0.65rem;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--muted-foreground);
          background: transparent;
          cursor: pointer;
          transition: color 180ms ease, background 180ms ease;
        }

        .tb-section-link:hover {
          color: var(--foreground);
          background: var(--accent);
        }

        .tb-section-link.active {
          color: var(--primary);
          background: var(--accent);
          font-weight: 700;
        }

        html {
          scroll-padding-top: 100px;
        }

        @media (max-width: 1023px) {
          .tb-sections {
            display: none;
          }
        }
      `}</style>

      <SidebarTrigger className="hidden md:inline-flex" />
      <Separator orientation="vertical" className="hidden h-5 md:block" />

      {/* Mobile brand */}
      <div className="flex items-center gap-2 md:hidden">
        <div
          className="grid size-8 place-items-center rounded-lg text-xs font-bold text-white"
          style={{
            background:
              "linear-gradient(135deg, var(--primary), oklch(0.68 0.2 330))",
          }}
        >
          TG
        </div>
        <span className="text-sm font-bold">Tejas Gadge</span>
      </div>

      {/* Current route title */}
      <h2 className="hidden shrink-0 text-sm font-semibold md:block">
        {current?.label ?? "Portfolio"}
      </h2>

      {/* Sections for the current page only */}
      {sections.length > 0 && (
        <nav
          aria-label={`${current?.label ?? "Page"} sections`}
          className="tb-sections"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSectionClick(section.id)}
              aria-current={
                activeSection === section.id ? "location" : undefined
              }
              className={`tb-section-link ${
                activeSection === section.id ? "active" : ""
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      )}

      <div className="ml-auto flex shrink-0 items-center gap-2">
        <Badge
          variant="outline"
          className="hidden gap-2 rounded-full px-3 py-1 xl:inline-flex"
        >
          <span className="size-2 animate-pulse rounded-full bg-green-500" />
          Available for work
        </Badge>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label="Toggle theme"
          onClick={() => setDark((value) => !value)}
        >
          {dark ? <Sun /> : <Moon />}
        </Button>

        <Button asChild className="rounded-full">
          <a href={`mailto:${EMAIL}`}>
            <span className="inline-flex items-center gap-2">
              <Send className="size-4" />
              <span className="hidden sm:inline">Let's talk</span>
              <span className="sm:hidden">Hire</span>
            </span>
          </a>
        </Button>
      </div>
    </header>
  );
}