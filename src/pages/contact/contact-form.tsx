import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <div className="p-8 rounded-lg h-full border shadow-sm bg-background">
      <form className="flex flex-col gap-4 h-full">
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Envie-nos uma mensagem</h3>
          <p className="text-muted-foreground">
            Use nosso formulário de contato para entrar em contato com
            perguntas, comentários, consultas de parceria, investimentos ou
            feedbacks construtivos.
          </p>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input placeholder="Nome" className="bg-muted dark:bg-zinc-900" />
            <Input
              placeholder="E-mail"
              type="email"
              className="bg-muted dark:bg-zinc-900"
            />
          </div>

          <Textarea
            placeholder="Mensagem"
            className="min-h-[80px] flex-1 bg-muted dark:bg-zinc-900"
          />

          <Button className="rounded w-full">Enviar Mensagem</Button>
        </div>
      </form>
    </div>
  );
};
