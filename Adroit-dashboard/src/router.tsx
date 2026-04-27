import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

// Root component
const Root = () => (
  <div className="min-h-screen bg-slate-950 text-white font-sans">
    <Outlet />
  </div>
);

const rootRoute = createRootRoute({
  component: Root,
});

import { Index } from "./routes/index";
import { GithubCallback } from "./routes/github-callback";

// Index route (One-Pager)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

// GitHub callback route
const githubCallbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/github-callback",
  component: GithubCallback,
});

const routeTree = rootRoute.addChildren([indexRoute, githubCallbackRoute]);

export const router = createRouter({ routeTree });

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
