import { Link } from "react-router";

interface NavigationItem {
  href: string;
  label: string;
  useReactRouter: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks: Array<NavigationItem> = [
  { href: "/", label: "Início", useReactRouter: true },
  { href: "#pricing", label: "Preços", useReactRouter: false },
  { href: "/", label: "Sobre", useReactRouter: true },
  { href: "/contato", label: "Contato", useReactRouter: true },
];

const NavigationItem = ({
  href,
  label,
  useReactRouter = true,
}: NavigationItem) => (
  <li>
    {useReactRouter ? (
      <Link
        className="opacity-70 hover:opacity-100 transition-opacity"
        to={href}
      >
        {label}
      </Link>
    ) : (
      <a
        className="opacity-70 hover:opacity-100 transition-opacity"
        href={href}
      >
        {label}
      </a>
    )}
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
