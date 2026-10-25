import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Rocket,
  Zap,
  Quote,
  BriefcaseBusiness,
  CalendarDays,
  Trophy,
  Award,
  ChevronDown,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

import {
  PROFILE,
  SOCIALS,
  STATS,
  BUILDS,
  TESTIMONIALS,
  PROJECTS,
  FILTERS,
  EXPERIENCE,
  ACHIEVEMENTS,
  CERTIFICATIONS,
} from "../data/Portfolio";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";


export default function Home() {
  const [filter, setFilter] = useState("all");

const [visibleCount, setVisibleCount] = useState(6);
const filteredProjects = PROJECTS.filter(
  (project) => filter === "all" || project.type === filter
);

const shown = filteredProjects.slice(0, visibleCount);

const handleFilterChange = (value) => {
  setFilter(value);
  setVisibleCount(6);
};

 
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

        /* Seamless, automatically scrolling tech-stack marquee */
        .hm-marquee { overflow: hidden; padding: .35rem 0 .85rem; position: relative; }
        .hm-marquee-track { display: flex; width: max-content; gap: .875rem; animation: hm-marquee 28s linear infinite; }
        .hm-marquee-track-achievements { display: flex; width: max-content; gap: .875rem; animation: hm-marquee 100s linear infinite; }
        .hm-marquee:hover .hm-marquee-track { animation-play-state: paused; }
        .hm-marquee-group { display: flex; flex: 0 0 auto; gap: .875rem; padding-right: .875rem; }
        @keyframes hm-marquee { to { transform: translateX(-50%); } }
        .hm-tile {
          flex: 0 0 8.5rem; aspect-ratio: 1 / 1.05; justify-content: space-between;
          background: linear-gradient(160deg, color-mix(in oklab, var(--t) 18%, var(--card)), color-mix(in oklab, var(--t) 4%, var(--card)));
          border-color: color-mix(in oklab, var(--t) 22%, var(--border));
          transition: transform .25s, box-shadow .25s;
        }
        .hm-tile:hover { transform: translateY(-4px); box-shadow: 0 16px 28px -16px var(--t); }
        .hm-tile-icon {
          display: grid; place-items: center; width: 3rem; height: 3rem; border-radius: 1rem;
          color: #fff; background: var(--t); align-self: flex-end;
        }

        /* Horizontally scrollable cards */
        .hm-horizontal { display: flex; gap: 1rem; overflow-x: auto; padding: .25rem .125rem 1rem; scroll-snap-type: x mandatory; scrollbar-width: thin; scrollbar-color: var(--border) transparent; }
        .hm-horizontal > * { flex: 0 0 min(85%, 23rem); scroll-snap-align: start; }
        .hm-testimonial { position: relative; display: flex; flex-direction: column; align-items: stretch; min-height: 16rem; gap: 1rem; padding: 1.4rem; white-space: normal; }
        .hm-testimonial-quote { color: var(--primary); opacity: .85; }
        .hm-testimonial-copy { flex: 1; font-size: .925rem; line-height: 1.7; color: var(--muted-foreground); }
        .hm-testimonial-person { display: flex; align-items: center; gap: .8rem; border-top: 1px solid var(--border); padding-top: 1rem; }
        .hm-testimonial-avatar { display: grid; place-items: center; width: 2.75rem; height: 2.75rem; flex: 0 0 auto; border-radius: 50%; background: var(--primary); color: var(--primary-foreground); font-weight: 700; }
        .hm-experience-card { position: relative; display: flex; flex-direction: column; gap: .9rem; min-height: 15rem; padding: 1.4rem; }
        .hm-experience-icon { display: grid; place-items: center; width: 2.75rem; height: 2.75rem; border-radius: .9rem; background: color-mix(in oklab, var(--primary) 12%, var(--card)); color: var(--primary); }
        .hm-experience-date { display: inline-flex; align-items: center; gap: .4rem; font-size: .8rem; color: var(--muted-foreground); }

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
          .hm-chip, .hm-dot, .hm-marquee-track { animation: none; }
          .hm-chip, .hm-dot, .hm-marquee-track-animation { animation: none; }
          .hm-tile, .hm-proj, .hm-preview-icon { transition: none; }
        }
          /* Achievement and certification cards */
// .hm-award-card {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   gap: 0.85rem;
//   min-height: 16rem;
//   padding: 1.35rem;
// }

.hm-award-card {
  display: flex;
  flex: 0 0 280px;
  width: 280px;
  height: 240px;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  overflow: hidden;
}

.hm-award-icon {
  display: grid;
  place-items: center;
  width: 2.8rem;
  height: 2.8rem;
  flex: 0 0 auto;
  border-radius: 0.95rem;
  background: color-mix(
    in oklab,
    var(--primary) 12%,
    var(--card)
  );
  color: var(--primary);
}

.hm-award-description {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--muted-foreground);
  scrollbar-width: thin;
}

.hm-award-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--muted-foreground);
}

.hm-award-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  width: fit-content;
  color: var(--primary);
  font-size: 0.875rem;
  font-weight: 600;
}

.hm-award-link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .hm-award-card {
    flex-basis: 260px;
    width: 260px;
    height: 240px;
  }
}

/* Project Load More button */
.hm-load-more {
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
}
      `}</style>

      {/* ---------- Hero (full-width band) ---------- */}
      <section id="home" className="hm-hero">
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
              <Button asChild size="lg" className="hm-hire p-6">
                <a href={`mailto:${PROFILE.email}`}>
                   Hire me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hm-hire p-6">
                <a href={PROFILE.resume} download>
                   Resume
                </a>
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
            {/* <div className="hm-blob">
              <Avatar className="size-full rounded-[inherit]">
                <AvatarImage src={PROFILE.photo} alt={PROFILE.name} className="object-cover" />
                <AvatarFallback className="rounded-none bg-transparent text-6xl font-bold text-white">
                  TG
                </AvatarFallback>
              </Avatar>
            </div> */}
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

        {/* ---------- Tech-stack ---------- */}
        <section id="projects" className="space-y-4">
          <h2 className="border-l-4 border-primary pl-3 text-xl font-semibold">Tech Stack</h2>
          <div className="hm-marquee" aria-label="Tech stack, continuously scrolling">
            <div className="hm-marquee-track">
              {[0, 1].map((copy) => (
                <div className="hm-marquee-group" key={copy} aria-hidden={copy === 1}>
                  {BUILDS.map(({ label, icon: Icon, color }, index) => (
                    <Card key={`${copy}-${label}-${index}`} className="hm-tile gap-0 rounded-2xl p-4 shadow-none" style={{ "--t": color }}>
                      <p className="text-sm font-semibold">{label}</p>
                      <div className="hm-tile-icon"><Icon className="size-6" /></div>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        

{/* ---------- Recent Projects ---------- */}
<section className="space-y-5">
  <div className="flex flex-wrap items-center justify-between gap-3">
    <h2 className="text-2xl font-bold tracking-tight">
      My recent projects
    </h2>

    <Tabs
  value={filter}
  onValueChange={(value) => {
    setFilter(value);
    setVisibleCount(6);
  }}
>
      <TabsList className="rounded-full">
        {FILTERS.map((f) => (
          <TabsTrigger
            key={f.value}
            value={f.value}
            className="rounded-full px-4"
          >
            {f.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  </div>

  {/* Three columns on large screens */}
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {shown.map((p) => (
      // Keep your existing project Card JSX here.
      // Each card should use key={p.title}.
      <Card
        key={p.title}
        className="hm-proj gap-0 overflow-hidden rounded-2xl p-0"
      >
        <div
          className="hm-preview"
          style={{ "--g1": p.g1, "--g2": p.g2 }}
        >
          <div className="hm-preview-icon">
            <p.icon className="size-7" />
          </div>
        </div>

        <CardHeader className="gap-1 px-5 pt-4">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg">{p.title}</CardTitle>

            <Button
              asChild
              variant="secondary"
              size="icon"
              className="size-8 shrink-0 rounded-full"
            >
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title}`}
              >
                <ArrowUpRight />
              </a>
            </Button>
          </div>

          <CardDescription>{p.desc}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-1.5 px-5 pt-3 pb-5">
          {p.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </CardContent>
      </Card>
    ))}
  </div>

  {shown.length < filteredProjects.length && (
    <div className="hm-load-more">
      <Button
  variant="outline"
  className="gap-2 rounded-full px-6"
  onClick={() => setVisibleCount((count) => count + 6)}
>
  Load More Projects
  <ChevronDown className="size-4" />
</Button>
    </div>
  )}
</section>
{/* ---------- Experience ---------- */}
        <section id="experience" className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            <p className="text-sm text-muted-foreground">A few roles and teams I've worked with.</p>
          </div>
          <div className="hm-horizontal" aria-label="Experience timeline">
            {EXPERIENCE.map((item, index) => (
              <Card key={`${item.company}-${item.role}`} className="hm-experience-card rounded-2xl">
                <div className="flex items-start justify-between gap-3">
                  <div className="hm-experience-icon"><BriefcaseBusiness className="size-5" /></div>
                  <span className="hm-experience-date"><CalendarDays className="size-4" />{item.period} <span className="hm-experience-date">
                    {item.present && <span className="blinking-dot" />}
                  </span></span>
                  
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug">{item.role}</h3>
                  <p className="font-medium text-primary">{item.company} </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>



{/* ---------- Achievements ---------- */}
<section id="achievements" className="space-y-4">
  <div className="space-y-1">
    <h2 className="text-2xl font-bold tracking-tight">Achievements</h2>
    <p className="text-sm text-muted-foreground">
      Milestones, wins, and recognition along the way.
    </p>
  </div>

  <div
    className="hm-marquee"
    aria-label="Achievements, continuously scrolling"
  >
    <div className="hm-marquee-track-achievements">
      {[0, 1].map((copy) => (
        <div
          className="hm-marquee-group"
          key={copy}
          aria-hidden={copy === 1}
        >
          {ACHIEVEMENTS.map((item, index) => (
            <Card
              key={`${copy}-${item.title}-${item.organization}-${index}`}
              className="hm-award-card gap-0 rounded-2xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="hm-award-icon">
                  <Trophy className="size-5" />
                </div>

                {item.period && (
                  <span className="hm-award-meta">
                    <CalendarDays className="size-3.5" />
                    {item.period}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug">
                  {item.title}
                </h3>

                {item.organization && (
                  <p className="font-medium text-primary">
                    {item.organization}
                  </p>
                )}
              </div>

              {item.description && (
                <p className="hm-award-description min-h-0">
                  {item.description}
                </p>
              )}

              {item.link && item.link !== "#" && (
                <a
                  className="hm-award-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={copy === 1 ? -1 : undefined}
                >
                  View achievement
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </Card>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

{/* ---------- Certifications ---------- */}
<section id="certifications" className="space-y-4">
  <div className="space-y-1">
    <h2 className="text-2xl font-bold tracking-tight">
      Certifications
    </h2>
    <p className="text-sm text-muted-foreground">
      Courses and credentials that support my work.
    </p>
  </div>

  <div className="hm-horizontal" aria-label="Certifications">
    {CERTIFICATIONS.map((item, index) => (
      <Card
        key={`${item.title}-${item.issuer}-${index}`}
        className="hm-award-card rounded-2xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="hm-award-icon">
            <BadgeCheck className="size-5" />
          </div>

          {item.period && (
            <span className="hm-award-meta">
              <CalendarDays className="size-3.5" />
              {item.period}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-semibold leading-snug">
            {item.title}
          </h3>
          {item.issuer && (
            <p className="font-medium text-primary">
              {item.issuer}
            </p>
          )}
        </div>

        {item.description && (
          <p className="hm-award-description">
            {item.description}
          </p>
        )}

        {item.href && (
          <a
            className="hm-award-link"
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            View credential
            <ExternalLink className="size-3.5" />
          </a>
        )}
      </Card>
    ))}
  </div>
</section>

  {/* ---------- Testimonials ---------- */}
        <section id="testimonials" className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Testimonials</h2>
            <p className="text-sm text-muted-foreground">Kind words from people I've worked with.</p>
          </div>
          <div className="hm-horizontal" aria-label="Testimonials, horizontally scrollable">
            {TESTIMONIALS.map(({ title, subtitle, desc }, index) => (
              <Card key={`${title}-${index}`} className="hm-testimonial rounded-2xl">
                <Quote className="hm-testimonial-quote size-7" aria-hidden="true" />
                <p className="hm-testimonial-copy">“{desc}”</p>
                <div className="hm-testimonial-person">
                  <div className="hm-testimonial-avatar">{title.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase()}</div>
                  <div className="min-w-0">
                    <p className="font-semibold leading-snug">{title}</p>
                    {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

 {/* ---------- CTA ---------- */}
        <Card id="contact" className="hm-cta items-center gap-4 rounded-3xl p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Have a project in mind?</h2>
          <p className="max-w-md text-sm opacity-85">
            I'm open to freelance work and full-time roles. Tell me what you're building.
          </p>
          <Button asChild size="lg" variant="secondary" className="p-6 w-auto">
            <a href={`mailto:${PROFILE.email}`}>
               Let's talk
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
}