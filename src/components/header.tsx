import { useState } from "react";
import { Navigation } from "./navigation";
import { Button } from "./ui/button";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cva } from "class-variance-authority";
import { ModeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { Link } from "react-router";

const headerVariants = cva(
  "sticky top-0 px-2 py-4 bg-background dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/80 border-b transition-colors z-50",
  {
    variants: {
      scrolled: {
        true: "border-border",
        false: "border-transparent",
      },
    },
  }
);

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <motion.header className={headerVariants({ scrolled: hasScrolled })}>
      <div className="flex gap-4 justify-between items-center max-w-screen-2xl mx-auto px-8 xl:px-4">
        <Link to="/">
          <h1 className="font-bold text-xl">🧠 Sentry-X</h1>
        </Link>

        <Navigation />

        <div className="flex gap-2">
          <ModeToggle />

          <MobileMenu className="lg:hidden initial" />

          <div className="hidden lg:flex gap-2">
            <Button variant="ghost">Entrar</Button>
            <Button>Começar grátis</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
