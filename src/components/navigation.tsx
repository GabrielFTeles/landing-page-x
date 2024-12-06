interface NavigationItem {
  href: string;
  label: string;
}

export const navLinks: Array<NavigationItem> = [
  { href: "/", label: "Início" },
  { href: "#pricing", label: "Preços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

const NavigationItem = ({ href, label }: NavigationItem) => (
  <li>
    <a className="opacity-70 hover:opacity-100 transition-opacity" href={href}>
      {label}
    </a>
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
