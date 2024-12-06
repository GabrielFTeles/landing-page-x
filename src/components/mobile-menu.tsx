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

interface MobileMenuProps {
  className: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className={className}>
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
                <a href={link.href}>
                  <Button className="w-full rounded-sm">{link.label}</Button>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
