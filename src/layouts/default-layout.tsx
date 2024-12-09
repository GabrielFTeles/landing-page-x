import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NotificationBanner } from "@/components/notification-banner";
import { Outlet } from "react-router";

export const DefaultLayout: React.FC = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <NotificationBanner />
      <Header />

      <main className="relative flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
