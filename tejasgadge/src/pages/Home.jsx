import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock3,
  Download,
  Globe,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Mail,
  MapPin,
  Puzzle,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

/* ---------- edit your data here ---------- */
const PROFILE = {
  name: "Tejas Gadge",
  role: "Computer Engineer",
  location: "Maharashtra, India",
  email: "you@example.com",
  resume: "/resume.pdf",
  photo: "/profile.jpg", // put your photo in /public, falls back to initials
  bio: "I build practical, real-world tools with clear user workflows, from admin dashboards to browser extensions and exam platforms.",
};

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/", label: "X" },
];

const STATS = [
  { icon: Rocket, value: "10+", label: "Projects shipped" },
  { icon: Clock3, value: "3+", label: "Years building" },
  { icon: Layers, value: "5+", label: "Stacks used" },
];

const BUILDS = [
  { label: "Web apps", icon: Globe, color: "#7c6cf0" },
  { label: "Dashboards", icon: LayoutDashboard, color: "#3b82f6" },
  { label: "Extensions", icon: Puzzle, color: "#f59e0b" },
  { label: "Exam tools", icon: GraduationCap, color: "#10b981" },
  { label: "PWAs", icon: Smartphone, color: "#ec4899" },
  { label: "APIs", icon: Server, color: "#06b6d4" },
];

const SERVICES = [
  { icon: Globe, title: "Full-stack web apps", desc: "React, Express and MongoDB, designed and built end to end." },
  { icon: LayoutDashboard, title: "Admin dashboards", desc: "Clean internal tools that make daily workflows faster." },
  { icon: Puzzle, title: "Extensions & PWAs", desc: "Chrome extensions and installable apps that feel native." },
];

const PROJECTS = [
  {
    title: "AirplaneMode",
    desc: "Test creation and management platform for Indian competitive exams.",
    type: "web",
    tags: ["React", "Express", "MongoDB"],
    icon: GraduationCap,
    g1: "#8b7cf6",
    g2: "#c4b5fd",
    href: "#",
  },
  {
    title: "ContextBridge",
    desc: "Chrome extension to export AI chat conversations.",
    type: "extension",
    tags: ["Chrome Extension", "JavaScript"],
    icon: Puzzle,
    g1: "#60a5fa",
    g2: "#bfdbfe",
    href: "#",
  },
  {
    title: "SenseAI",
    desc: "Field worker management app for healthcare teams.",
    type: "web",
    tags: ["React", "Node.js"],
    icon: Sparkles,
    g1: "#f472b6",
    g2: "#fbcfe8",
    href: "#",
  },
];

const FILTERS = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "extension", label: "Extensions" },
];
/* ----------------------------------------- */

export default function Home() {
  const [filter, setFilter] = useState("all");
  const shown = PROJECTS.filter((p) => filter === "all" || p.type === filter);

  return (
    <div className="hm">
      <style>{`
        .hm { --hm-max: 80rem; }
        .hm-wrap { width: 100%; max-width: var(--hm-max); margin-inline: auto; padding-inline: 1rem; }
        @media (min-width: 768px) { .hm-wrap { padding-inline: 2rem; } }

        .hm-hero {
          position: relative; isolation: isolate; overflow: hidden;
          border-bottom: 1px solid var(--border);
          background: radial-gradient(60% 100% at 0% 0%, color-mix(in oklab, var(--primary) 14%, var(--background)), var(--background) 70%);
        }
        .hm-hero-grid { display: grid; gap: 2rem; align-items: center; padding-block: 2rem; }
        @media (min-width: 768px) {
          .hm-hero-grid { grid-template-columns: 1.15fr 0.85fr; padding-block: 3.5rem; }
        }
        .hm-body { display: grid; gap: 3rem; padding-block: 2.5rem 3rem; }
        .hm-body > * { min-width: 0; }

        .hm-grad {
          background: linear-gradient(90deg, var(--primary), oklch(0.68 0.2 330));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .hm-dot { width: .5rem; height: .5rem; border-radius: 50%; background: #22c55e; animation: hm-pulse 2s infinite; }
        @keyframes hm-pulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,.55); }
          70% { box-shadow: 0 0 0 .5rem rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        .hm-hire { box-shadow: 0 12px 24px -10px color-mix(in oklab, var(--primary) 70%, transparent); }

        .hm-visual { position: relative; display: grid; place-items: center; order: -1; padding: 1rem 0; }
        @media (min-width: 768px) { .hm-visual { order: 0; } }
        .hm-blob {
          position: relative; width: min(68%, 17rem); aspect-ratio: 4 / 5;
          border-radius: 999px 999px 2.5rem 2.5rem;
          background: linear-gradient(160deg, var(--primary), oklch(0.5 0.2 305));
          box-shadow: 0 30px 60px -25px color-mix(in oklab, var(--primary) 70%, transparent);
        }
        .hm-blob::before {
          content: ""; position: absolute; inset: -.9rem; border-radius: inherit;
          border: 1.5px solid color-mix(in oklab, var(--primary) 28%, transparent);
        }
        .hm-chip {
          position: absolute; gap: .4rem; padding: .45rem .8rem; border-radius: 999px;
          background: var(--card); color: var(--card-foreground);
          border: 1px solid var(--border);
          box-shadow: 0 10px 24px -12px rgba(0,0,0,.35);
          animation: hm-float 5s ease-in-out infinite;
        }
        .hm-chip-a { top: 10%; left: 2%; }
        .hm-chip-b { bottom: 12%; right: 0; animation-delay: -2.5s; }
        @keyframes hm-float { 50% { transform: translateY(-.5rem); } }

        .hm-tiles {
          display: flex; gap: .875rem; overflow-x: auto; padding: .25rem .125rem .75rem;
          scroll-snap-type: x mandatory; scrollbar-width: none;
        }
        .hm-tiles::-webkit-scrollbar { display: none; }
        .hm-tile {
          flex: 0 0 8.5rem; scroll-snap-align: start; aspect-ratio: 1 / 1.05;
          justify-content: space-between;
          background: linear-gradient(160deg, color-mix(in oklab, var(--t) 18%, var(--card)), color-mix(in oklab, var(--t) 4%, var(--card)));
          border-color: color-mix(in oklab, var(--t) 22%, var(--border));
          transition: transform .25s, box-shadow .25s;
        }
        .hm-tile:hover { transform: translateY(-4px); box-shadow: 0 16px 28px -16px var(--t); }
        .hm-tile-icon {
          display: grid; place-items: center; width: 3rem; height: 3rem; border-radius: 1rem;
          color: #fff; background: var(--t); align-self: flex-end;
        }

        .hm-row { transition: transform .25s, border-color .25s, box-shadow .25s; }
        .hm-row:hover {
          transform: translateX(4px);
          border-color: color-mix(in oklab, var(--primary) 40%, var(--border));
          box-shadow: 0 14px 28px -18px var(--primary);
        }
        .hm-row:hover .hm-arrow { background: var(--primary); color: var(--primary-foreground); }
        .hm-arrow { transition: background .2s, color .2s; }

        .hm-preview {
          position: relative; overflow: hidden; height: 9.5rem;
          display: grid; place-items: center;
          background: linear-gradient(135deg, var(--g1), var(--g2));
        }
        .hm-preview::before, .hm-preview::after {
          content: ""; position: absolute; border-radius: 50%; background: rgba(255,255,255,.28);
        }
        .hm-preview::before { width: 9rem; height: 9rem; top: -3.5rem; right: -2rem; }
        .hm-preview::after { width: 6rem; height: 6rem; bottom: -2.5rem; left: -1.5rem; }
        .hm-preview-icon {
          position: relative; z-index: 1; display: grid; place-items: center;
          width: 4rem; height: 4rem; border-radius: 1.25rem; color: var(--g1);
          background: rgba(255,255,255,.92); box-shadow: 0 14px 28px -12px rgba(0,0,0,.35);
          transition: transform .3s;
        }
        .hm-proj { transition: transform .25s, box-shadow .25s; }
        .hm-proj:hover { transform: translateY(-4px); box-shadow: 0 20px 36px -22px var(--primary); }
        .hm-proj:hover .hm-preview-icon { transform: scale(1.08) rotate(-4deg); }

        .hm-cta {
          background: linear-gradient(120deg, var(--primary), oklch(0.5 0.2 305));
          color: var(--primary-foreground); border: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .hm-chip, .hm-dot { animation: none; }
          .hm-tile, .hm-row, .hm-proj, .hm-preview-icon { transition: none; }
        }
      `}</style>

      {/* ---------- Hero (full-width band) ---------- */}
      <section className="hm-hero">
        <div className="hm-wrap hm-hero-grid">
          <div className="space-y-5">
            <Badge variant="secondary" className="gap-2 rounded-full px-3 py-1">
              <span className="hm-dot" /> Hello, welcome
            </Badge>

            <h1 className="text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl lg:text-6xl">
              I'm <span className="hm-grad">{PROFILE.name}</span>,
              <br />
              {PROFILE.role}
            </h1>

            <p className="max-w-md text-sm text-muted-foreground md:text-base">{PROFILE.bio}</p>

            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5" /> {PROFILE.location}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" className="hm-hire rounded-full px-6">
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail /> Hire me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={PROFILE.resume} download>
                  <Download /> Résumé
                </a>
              </Button>
              <Button asChild variant="link">
                <Link to="/page-2">See portfolio</Link>
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-medium text-muted-foreground">Follow me:</span>
              <div className="flex gap-2">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <Button key={label} asChild variant="secondary" size="icon" className="size-9 rounded-full">
                    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                      <Icon />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="hm-visual">
            <div className="hm-blob">
              <Avatar className="size-full rounded-[inherit]">
                <AvatarImage src={PROFILE.photo} alt={PROFILE.name} className="object-cover" />
                <AvatarFallback className="rounded-none bg-transparent text-6xl font-bold text-white">
                  TG
                </AvatarFallback>
              </Avatar>
            </div>
            <Badge className="hm-chip hm-chip-a">
              <Zap className="text-amber-500" /> Full-stack
            </Badge>
            <Badge className="hm-chip hm-chip-b">
              <Rocket className="text-primary" /> 10+ shipped
            </Badge>
          </div>
        </div>
      </section>

      <div className="hm-wrap hm-body">
        {/* ---------- Stats ---------- */}
        <section className="grid grid-cols-3 gap-3 md:gap-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <Card key={label} className="gap-2 p-4 md:flex-row md:items-center md:gap-4 md:p-5">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary md:size-12">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-2xl leading-none font-bold md:text-3xl">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">{label}</p>
              </div>
            </Card>
          ))}
        </section>

        {/* ---------- What I build (tiles) ---------- */}
        <section className="space-y-4">
          <h2 className="border-l-4 border-primary pl-3 text-xl font-semibold">What I build</h2>
          <div className="hm-tiles">
            {BUILDS.map(({ label, icon: Icon, color }) => (
              <Card key={label} className="hm-tile gap-0 rounded-2xl p-4 shadow-none" style={{ "--t": color }}>
                <p className="text-sm font-semibold">{label}</p>
                <div className="hm-tile-icon">
                  <Icon className="size-6" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ---------- What I do ---------- */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">What do I help with</h2>
            <p className="text-sm text-muted-foreground">
              From the first idea to something real people use every day.
            </p>
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="hm-row flex-row items-center gap-4 rounded-2xl p-4 md:p-5">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
                <div className="hm-arrow grid size-9 shrink-0 place-items-center rounded-full border">
                  <ArrowUpRight className="size-4" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ---------- Recent projects ---------- */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold tracking-tight">My recent projects</h2>
            <Tabs value={filter} onValueChange={setFilter}>
              <TabsList className="rounded-full">
                {FILTERS.map((f) => (
                  <TabsTrigger key={f.value} value={f.value} className="rounded-full px-4">
                    {f.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <Card key={p.title} className="hm-proj gap-0 overflow-hidden rounded-2xl p-0">
                <div className="hm-preview" style={{ "--g1": p.g1, "--g2": p.g2 }}>
                  <div className="hm-preview-icon">
                    <p.icon className="size-7" />
                  </div>
                </div>
                <CardHeader className="gap-1 px-5 pt-4">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                    <Button asChild variant="secondary" size="icon" className="size-8 shrink-0 rounded-full">
                      <a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                        <ArrowUpRight />
                      </a>
                    </Button>
                  </div>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5 px-5 pt-3 pb-5">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <Card className="hm-cta items-center gap-4 rounded-3xl p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Have a project in mind?</h2>
          <p className="max-w-md text-sm opacity-85">
            I'm open to freelance work and full-time roles. Tell me what you're building.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-6">
            <a href={`mailto:${PROFILE.email}`}>
              <Mail /> Let's talk
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
}