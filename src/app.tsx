import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="sentry-x-lp-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
