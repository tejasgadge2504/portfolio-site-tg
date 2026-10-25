import { createBrowserRouter } from "react-router-dom";
import { House, FolderKanban, UserRound, Pen, Captions, GraduationCap } from "lucide-react";

const load = (importer) => async () => ({
  Component: (await importer()).default,
});

export const routes = [
  {
    path: "/",
    lazy: load(() => import("./components/layouts/AppLayout.jsx")),
    children: [
      {
        index: true,
        lazy: load(() => import("./pages/Home.jsx")),
        handle: { nav: { label: "Home", to: "/", icon: House } },
      },
      {
        path: "aimers-academy",
        lazy: load(() => import("./pages/AimersAcademy.jsx")),
        handle: {
          nav: { label: "Aimers Academy", to: "/aimers-academy", icon: GraduationCap},
        },
      },
      {
        path: "blogs",
        lazy: load(() => import("./pages/Blogs.jsx")),
        handle: {
          nav: { label: "Blogs", to: "/blogs", icon: UserRound },
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const navItems = routes[0].children
  .filter((route) => route.handle?.nav)
  .map((route) => route.handle.nav);