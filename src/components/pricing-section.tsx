import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface Plan {
  popular?: boolean;
  custom?: boolean;
  title: string;
  description: string;
  prices: {
    monthly: number;
    annual: number;
  };
  features: string[];
}

const plans: Array<Plan> = [
  {
    title: "Plano Gratuito",
    description: "Testes com nossas ferramentas.",
    prices: {
      monthly: 0,
      annual: 0,
    },
    features: [
      "1 usuário",
      "1 CNPJ",
      "Até 5.000 notas/mês",
      "Suporte por e-mail",
    ],
  },
  {
    title: "Plano Básico",
    description: "Para pequenas empresas e startups.",
    prices: {
      monthly: 399.99,
      annual: 4319.99,
    },
    features: [
      "3 usuários",
      "1 CNPJ",
      "Até 10.000 notas/mês",
      "Suporte por e-mail, chat e telefone",
    ],
  },
  {
    popular: true,
    title: "Plano Profissional",
    description: "Para empresas em crescimento.",
    prices: {
      monthly: 999.99,
      annual: 10799.99,
    },
    features: [
      "10 usuários",
      "3 CNPJs",
      "Até 20.000 notas/mês",
      "Suporte prioritário 24/7, via chat, e-mail e telefone",
      "Gerente de conta",
    ],
  },
  {
    title: "Plano Empresarial",
    description: "Para grandes empresas e corporações.",
    custom: true,
    prices: {
      monthly: 0,
      annual: 0,
    },
    features: [
      "Totalmente personalizado de acordo com a necessidade da empresa.",
      "Suporte prioritário 24/7, via chat, e-mail e telefone",
      "Gerente de conta",
    ],
  },
];

type PricingCardProps = {
  period: "monthly" | "annual";
} & Plan;

const PricingCard: React.FC<PricingCardProps> = ({
  period,
  popular,
  custom,
  title,
  description,
  prices,
  features,
}) => {
  const activePrice = custom
    ? "CONSULTAR"
    : period === "monthly"
    ? prices.monthly.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    : prices.annual.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

  return (
    <div
      className={cn(
        "p-8 pt-10 border flex flex-col rounded-xl relative shadow-sm",
        popular && "bg-[#1F1A1C] text-white"
      )}
    >
      {popular && (
        <span className="border border-white text-white py-2 px-3 text-sm rounded uppercase font-medium left-1/2 -top-4 -translate-x-1/2 inline-block bg-blue-800 absolute">
          Mais popular
        </span>
      )}

      {custom && (
        <span className="border border-white text-white py-2 px-3 text-sm rounded uppercase font-medium left-1/2 -top-4 -translate-x-1/2 inline-block bg-emerald-600 absolute">
          Personalizado
        </span>
      )}

      <h3 className="font-bold text-xl">{title}</h3>
      <p className={cn("mt-2 text-sm opacity-90", popular && "text-white")}>
        {description}
      </p>

      <h4 className={cn("mt-8 text-primary/80", popular && "text-white")}>
        <span
          className={cn(
            "text-4xl text-primary font-bold",
            popular && "text-white"
          )}
        >
          {activePrice}
        </span>{" "}
        {!custom && <span>/ {period === "monthly" ? "mês" : "ano"}</span>}
      </h4>

      <Separator className="my-6" />

      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex gap-1 items-start">
            <Check className="min-w-4 w-4 h-4 text-blue-600" />
            <p className="leading-none">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="flex-1 flex items-end">
        <Button
          className={cn(
            "mt-8 rounded-lg w-full p-4 hover:ring-offset-2 hover:ring-blue-500 dark:bg-blue-400 bg-blue-500 hover:bg-blue-500 hover:ring-2 transition-all duration-200",
            popular && "ring-offset-[#1F1A1C]"
          )}
        >
          {custom ? "Agendar consulta" : "Escolher plano"}
        </Button>
      </div>
    </div>
  );
};

interface TogglePeriodButtonProps {
  period: "monthly" | "annual";
  setPeriod: (period: "monthly" | "annual") => void;
}

const TogglePeriodButton: React.FC<TogglePeriodButtonProps> = ({
  period,
  setPeriod,
}) => {
  return (
    <div className="w-fit flex gap-1 mx-auto bg-muted border p-2 rounded-full">
      <button
        data-active={period === "monthly"}
        onClick={() => setPeriod("monthly")}
        className="relative p-2 px-3 rounded-full group font-medium"
      >
        <span className="relative z-10 group-data-[active=true]:text-white dark:group-data-[active=true]:text-black transition-colors">
          Mensal
        </span>

        {period === "monthly" && (
          <motion.div
            layoutId="active-period-pill"
            style={{
              borderRadius: "9999px",
            }}
            className="inset-0 absolute bg-primary z-0"
          />
        )}
      </button>

      <button
        data-active={period === "annual"}
        onClick={() => setPeriod("annual")}
        className="relative p-2 rounded-full group flex gap-2 items-center font-medium"
      >
        <span className="relative z-10 group-data-[active=true]:text-white dark:group-data-[active=true]:text-black transition-colors">
          Anual
        </span>
        <span className="relative z-10 inline-block rounded-full text-emerald-600 font-medium text-sm">
          10% OFF
        </span>

        {period === "annual" && (
          <motion.div
            layoutId="active-period-pill"
            style={{
              borderRadius: "9999px",
            }}
            className="inset-0 absolute bg-primary z-0"
          />
        )}
      </button>
    </div>
  );
};

export const PricingSection = () => {
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      className="scroll-mt-16 py-20 dark:pt-10 dark:pb-20 space-y-14 max-w-screen-2xl mx-auto px-4"
    >
      <div className="flex flex-col items-center">
        <h3 className="font-mono uppercase tracking-tighter text-sm text-blue-800">
          Vá para o próximo nível
        </h3>

        <h2 className="section-title pt-6">Preços & Planos</h2>

        <p className="pt-4 max-w-[500px] text-center text-muted-foreground">
          Economize milhares em ferramentas complexas de BI. Nossa IA faz o
          mesmo, mais rápido e por muito menos.
        </p>
      </div>

      <TogglePeriodButton period={period} setPeriod={setPeriod} />

      <div className="grid grid-cols-1 gap-8 mt-20 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard
            key={plan.title}
            period={period}
            popular={plan.popular}
            custom={plan.custom}
            title={plan.title}
            description={plan.description}
            prices={plan.prices}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
};
