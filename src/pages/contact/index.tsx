import {
  Mail,
  MessageSquareMore,
  MoveUpRight,
  PhoneOutgoing,
  type LucideIcon,
} from "lucide-react";
import { ContactForm } from "./contact-form";
import DotPattern from "@/components/ui/dot-pattern";

interface ContactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  description,
  href,
  icon: Icon,
  title,
}) => {
  return (
    <a href={href} target="_blank">
      <div className="flex p-4 border bg-background rounded-lg gap-4 items-center shadow-sm">
        <div className="p-4 bg-muted dark:bg-zinc-900 h- rounded border">
          <Icon />
        </div>

        <div>
          <h3 className="text-muted-foreground">{title}</h3>
          <span>{description}</span>
        </div>

        <div className="ml-auto rounded-full border h-fit p-3 bg-muted dark:bg-zinc-900">
          <MoveUpRight />
        </div>
      </div>
    </a>
  );
};

export const Contact = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-28 px-4 lg:grid-cols-2 grid grid-cols-1 gap-8 xl:gap-16 relative">
      <DotPattern className="-z-10 opacity-20 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Entre em contato</h2>
          <p className="text-muted-foreground">
            Entre em contato conosco para dúvidas, suporte ou oportunidades de
            parceria. Estamos aqui para ajudar você!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ContactCard
            title="Entre em contato pelo E-mail"
            description="contato@sentryx.com.br"
            href="mailto:contato@sentryx.com.br"
            icon={Mail}
          />

          <ContactCard
            title="Entre em contato pelo E-mail"
            description="contato@sentryx.com.br"
            href="https://wa.me/556198680610?text=Ol%C3%A1!%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20sentry-x,%20gostaria%20de%20agendar%20uma%20liga%C3%A7%C3%A3o,%20poderiamos%20conversar."
            icon={PhoneOutgoing}
          />

          <ContactCard
            title="Entre em contato pelo chat"
            description="Em breve..."
            href="#"
            icon={MessageSquareMore}
          />
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </section>
  );
};
