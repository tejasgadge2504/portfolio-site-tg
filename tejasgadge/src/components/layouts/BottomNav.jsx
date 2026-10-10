import { NavLink } from "react-router-dom";
import { navItems } from "../../Routes";

export default function BottomNav() {
  return (
    <nav className="bn-root" aria-label="Primary">
      <style>{`
        .bn-root {
          position: fixed; z-index: 50;
          left: 0.75rem; right: 0.75rem;
          bottom: calc(env(safe-area-inset-bottom, 0px) + 0.75rem);
          background: color-mix(in oklab, var(--card) 85%, transparent);
          backdrop-filter: blur(14px);
          border: 1px solid var(--border);
          border-radius: 1.5rem;
          box-shadow: 0 12px 32px -12px color-mix(in oklab, var(--primary) 50%, transparent);
        }
        @media (min-width: 768px) { .bn-root { display: none; } }
        .bn-root ul { display: flex; list-style: none; margin: 0; padding: 0.375rem; }
        .bn-root li { flex: 1; }
        .bn-link {
          display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
          padding: 0.3rem 0; font-size: 0.6875rem; font-weight: 500;
          color: var(--muted-foreground); text-decoration: none;
          transition: color 0.2s;
        }
        .bn-pill {
          display: grid; place-items: center;
          width: 3.5rem; height: 2rem; border-radius: 999px;
          transition: background 0.25s, transform 0.25s;
        }
        .bn-link[aria-current="page"] { color: var(--primary); font-weight: 600; }
        .bn-link[aria-current="page"] .bn-pill {
          background: color-mix(in oklab, var(--primary) 15%, transparent);
          transform: translateY(-1px);
        }
        .bn-link:active .bn-pill { transform: scale(0.92); }
      `}</style>

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
  );
}