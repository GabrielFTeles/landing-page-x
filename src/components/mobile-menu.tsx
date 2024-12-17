import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navLinks } from "./navigation";
import { Link } from "react-router";
import { useState } from "react";

interface MobileMenuProps {
  className: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={openMenu}
          size="icon"
          variant="outline"
          className={className}
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu de Navegação</SheetTitle>
          <SheetDescription>
            Selecione uma das opções abaixo para navegar pelo site.
          </SheetDescription>
        </SheetHeader>

        <nav className="mt-6">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li>
                {link.useReactRouter ? (
                  <Link onClick={closeMenu} to={link.href}>
                    <Button className="w-full rounded-sm">{link.label}</Button>
                  </Link>
                ) : (
                  <a onClick={closeMenu} href={link.href}>
                    <Button className="w-full rounded-sm">{link.label}</Button>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
