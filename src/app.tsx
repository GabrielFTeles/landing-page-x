import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { DefaultLayout } from "./layouts/default-layout";
import { Contact } from "./pages/contact";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="sentry-x-lp-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
