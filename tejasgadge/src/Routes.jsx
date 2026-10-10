import { createBrowserRouter } from "react-router-dom";
import { House, FolderKanban, UserRound } from "lucide-react";

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
        path: "page-2",
        lazy: load(() => import("./pages/Page2.jsx")),
        handle: {
          nav: { label: "Page 2", to: "/page-2", icon: FolderKanban },
        },
      },
      {
        path: "page-3",
        lazy: load(() => import("./pages/Page3.jsx")),
        handle: {
          nav: { label: "Page 3", to: "/page-3", icon: UserRound },
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const navItems = routes[0].children
  .filter((route) => route.handle?.nav)
  .map((route) => route.handle.nav);