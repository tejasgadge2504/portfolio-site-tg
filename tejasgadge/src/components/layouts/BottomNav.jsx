import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Check, X } from "lucide-react";
import { navItems } from "../../Routes";
import { getPageSections } from "../../data/Portfolio";

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, hash } = location;

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = getPageSections(pathname);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ block: "start" });
        setActiveSection(id);
      } else {
        updateActiveSection();
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

  const handleSectionSelect = (id) => {
    setMenuOpen(false);

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

  const selectedSection =
    sections.find((section) => section.id === activeSection) ??
    sections[0];

  return (
    <>
      <style>{`
        .bn-root {
          position: fixed;
          z-index: 50;
          left: 0.75rem;
          right: 0.75rem;
          bottom: calc(env(safe-area-inset-bottom, 0px) + 0.75rem);
          background: color-mix(in oklab, var(--card) 88%, transparent);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border);
          border-radius: 1.5rem;
          box-shadow: 0 12px 32px -12px color-mix(in oklab, var(--primary) 40%, transparent);
        }

        .bn-section-picker {
          position: fixed;
          z-index: 49;
          left: 0.75rem;
          right: 0.75rem;
          bottom: calc(env(safe-area-inset-bottom, 0px) + 5.7rem);
        }

        @media (min-width: 768px) {
          .bn-root,
          .bn-section-picker {
            display: none !important;
          }
        }

        .bn-root ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0.375rem;
        }

        .bn-root li {
          flex: 1;
          min-width: 0;
        }

        .bn-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          padding: 0.3rem 0;
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--muted-foreground);
          text-decoration: none;
          transition: color 0.2s;
        }

        .bn-pill {
          display: grid;
          place-items: center;
          width: 3.5rem;
          height: 2rem;
          border-radius: 999px;
          transition: background 0.25s, transform 0.25s;
        }

        .bn-link[aria-current="page"] {
          color: var(--primary);
          font-weight: 600;
        }

        .bn-link[aria-current="page"] .bn-pill {
          background: color-mix(in oklab, var(--primary) 15%, transparent);
          transform: translateY(-1px);
        }

        .bn-link:active .bn-pill {
          transform: scale(0.92);
        }

        .bn-section-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: color-mix(in oklab, var(--card) 94%, transparent);
          color: var(--foreground);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 28px -12px color-mix(in oklab, var(--primary) 35%, transparent);
          text-align: left;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .bn-section-menu {
          position: absolute;
          left: 0;
          right: 0;
          bottom: calc(100% + 0.5rem);
          max-height: min(55vh, 24rem);
          overflow-y: auto;
          padding: 0.4rem;
          border: 1px solid var(--border);
          border-radius: 1rem;
          background: var(--card);
          box-shadow: 0 12px 36px -12px color-mix(in oklab, var(--primary) 35%, transparent);
        }

        .bn-section-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0.75rem;
          margin-bottom: 0.25rem;
          border-bottom: 1px solid var(--border);
          color: var(--foreground);
        }

        .bn-section-close {
          display: grid;
          place-items: center;
          width: 2rem;
          height: 2rem;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: var(--muted-foreground);
          cursor: pointer;
        }

        .bn-section-close:hover {
          background: var(--accent);
          color: var(--foreground);
        }

        .bn-section-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.75rem 0.85rem;
          border: 0;
          border-radius: 0.7rem;
          background: transparent;
          color: var(--muted-foreground);
          text-align: left;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .bn-section-option:hover,
        .bn-section-option.active {
          background: var(--accent);
          color: var(--primary);
        }

        .bn-section-option.active {
          font-weight: 600;
        }
      `}</style>

      {/* Page-specific section picker */}
      {sections.length > 0 && (
        <div className="bn-section-picker">
          {menuOpen && (
            <div
              className="bn-section-menu"
              role="listbox"
              aria-label="Choose page section"
            >
              <div className="bn-section-menu-header">
                <span className="text-sm font-semibold">
                  {navItems.find((item) => item.to === pathname)?.label ??
                    "Page"}{" "}
                  sections
                </span>

                <button
                  type="button"
                  className="bn-section-close"
                  aria-label="Close section menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  role="option"
                  aria-selected={selectedSection?.id === section.id}
                  className={`bn-section-option ${
                    selectedSection?.id === section.id ? "active" : ""
                  }`}
                  onClick={() => handleSectionSelect(section.id)}
                >
                  <span>{section.label}</span>
                  {selectedSection?.id === section.id && (
                    <Check size={16} />
                  )}
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            className="bn-section-trigger"
            aria-expanded={menuOpen}
            aria-haspopup="listbox"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>
              <span className="block text-xs font-normal text-muted-foreground">
                Jump to section
              </span>
              <span>{selectedSection?.label ?? "Select section"}</span>
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}

      {/* Primary route navigation */}
      <nav className="bn-root" aria-label="Primary">
        <ul>
          {navItems.map(({ label, to, icon: Icon }) => (
            <li key={to}>
              <NavLink to={to} end className="bn-link">
                <span className="bn-pill">
                  <Icon size={20} />
                </span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}