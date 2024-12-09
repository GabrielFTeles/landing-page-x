import { Link } from "react-router";

interface NavigationItem {
  href: string;
  label: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks: Array<NavigationItem> = [
  { href: "/", label: "Início" },
  { href: "/", label: "Preços" },
  { href: "/", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

const NavigationItem = ({ href, label }: NavigationItem) => (
  <li>
    <Link className="opacity-70 hover:opacity-100 transition-opacity" to={href}>
      {label}
    </Link>
  </li>
);

export const Navigation = () => {
  return (
    <nav>
      <ul className="hidden lg:flex gap-8">
        {navLinks.map((link) => (
          <NavigationItem key={link.href} {...link} />
        ))}
      </ul>
    </nav>
  );
};
