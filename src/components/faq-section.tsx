import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FaqItemType {
  question: string;
  answer: string;
}

const faqItems: Array<FaqItemType> = [
  {
    question: "Como a IA entende minhas perguntas sobre os dados?",
    answer:
      "Nossa IA é treinada para compreender desde pessoas leigas, até analistas profissionais. Você pode fazer perguntas como faria a um analista, por exemplo: 'Qual foi o faturamento do último trimestre?' ou 'Compare as vendas deste ano com o ano passado'. A IA processa sua pergunta, identifica os dados relevantes e gera visualizações e insights apropriados.",
  },
  {
    question: "Preciso ter conhecimento técnico para usar a plataforma?",
    answer:
      "Não! Nossa plataforma foi projetada para ser intuitiva e fácil de usar. Se você sabe fazer perguntas sobre seus dados, já está pronto para começar. A IA cuida de toda a parte técnica, desde a análise até a criação de visualizações.",
  },
  // {
  //   question: "Quais tipos de dados posso conectar à plataforma?",
  //   answer:
  //     "Nossa plataforma aceita diversas fontes de dados, incluindo: planilhas Excel, CSV, bancos de dados SQL, Google Sheets, ferramentas de CRM como Salesforce, e APIs personalizadas. Se você tem uma fonte de dados específica, entre em contato conosco.",
  // },
  {
    question: "Meus dados estão seguros na plataforma?",
    answer:
      "Sim! Segurança é nossa prioridade. Utilizamos criptografia, seguimos as melhores práticas de segurança, e somos compatíveis com LGPD e GDPR. Seus dados nunca são compartilhados ou utilizados para outros fins.",
  },
  {
    question: "Posso começar gratuitamente?",
    answer:
      "Sim! Oferecemos um período de teste gratuito de 7 dias com acesso a nossa plataforma. Você pode experimentar funcionalidades sem compromisso e escolher o plano ideal após o período de teste.",
  },
  {
    question: "Quanto tempo leva para começar a usar?",
    answer:
      "Você pode começar a usar a plataforma imediatamente após o cadastro, basta escolher o seu plano, colocar seus dados e já estará utilizando nossa IA. O processo leva minutos. Para integrações mais complexas, nossa equipe oferece suporte dedicado para garantir uma implementação rápida e eficiente.",
  },
  {
    question: "Há limite de usuários, notas ou CNPJs?",
    answer:
      "Cada plano tem seus próprios limites. O plano Básico começa com 3 usuários, 10.000 notas/mês e 1 CNPJ. O Profissional oferece 10 usuários, 20.000 notas/mês e 3 CNPJs, e para necessidades maiores, temos planos Empresarial personalizados.",
  },
  {
    question: "Que tipo de suporte está incluído?",
    answer:
      "Todos os planos incluem suporte por email e documentação completa. Planos Profissional e Empresarial também têm acesso a suporte prioritário por chat em tempo real, telefone e gerente de conta dedicado.",
  },
];

interface FaqItemProps extends FaqItemType {
  value: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ value, question, answer }) => {
  return (
    <AccordionItem
      value={value}
      className="shadow-sm dark:data-[state=open]:bg-[#1F1A1C]"
    >
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  );
};

export const FaqSection = () => {
  return (
    <section className="pb-28 bg-secondary dark:bg-background pt-14 mx-auto px-4">
      <div className="max-w-screen-md mx-auto flex flex-col items-center">
        <h3 className="font-mono uppercase tracking-tight text-sm text-blue-800">
          FAQ
        </h3>

        <h2 className="section-title text-center mt-4">Perguntas frequentes</h2>

        <Accordion type="single" collapsible className="w-full mt-10 space-y-2">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              value={index.toString()}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
