import { cn } from "@/lib/utils";
import {
  ArrowUp,
  Brain,
  Clock,
  Lock,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import type { ComponentProps } from "react";

interface FeatureCardProps extends ComponentProps<"div"> {
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ className, children }) => {
  return (
    <div className={cn("bg-slate-900 p-6 rounded-xl shadow-sm", className)}>
      {children}
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="max-w-screen-2xl px-4 mx-auto py-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[0.75fr,0.75fr,1.5fr]">
        <FeatureCard className="sm:col-span-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="size-6 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">
              Análise Conversacional
            </h3>
          </div>

          <p className="text-slate-300 mb-4">
            Faça perguntas em linguagem natural e obtenha insights poderosos
            instantaneamente, sem necessidade de conhecimento técnico.
          </p>

          <div className="bg-slate-800 rounded-lg p-4 mt-auto">
            <code className="text-green-400">
              "Me mostre o faturamento dos últimos 4 meses comparado com 2022"
            </code>
          </div>
        </FeatureCard>

        <FeatureCard className="sm:col-span-2 lg:col-span-1 lg:row-span-3">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Resposta da IA</h3>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">
                  Análise de Crescimento
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Analisando seus últimos 4 meses de faturamento (Set-Dez/2024),
                observo um crescimento consistente em comparação com 2023. O
                último quadrimestre de 2024 teve um faturamento total de R$
                845.000, representando um aumento de 25% em relação ao mesmo
                período de 2023 (R$ 676.000).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-slate-400 text-sm mb-2">Melhor Mês</p>
                <p className="text-white font-semibold mb-1">Dezembro 2024</p>
                <div className="flex items-center gap-1">
                  <ArrowUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">R$ 250.000</span>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-slate-400 text-sm mb-2">Crescimento Médio</p>
                <p className="text-white font-semibold mb-1">Por Mês</p>
                <span className="text-green-400 text-sm">+21.6%</span>
              </div>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-slate-300 leading-relaxed">
                Recomendação: Mantenha as estratégias aplicadas no último
                trimestre, que resultaram em um crescimento expressivo. O mês de
                dezembro mostrou o melhor desempenho, sugerindo uma boa resposta
                às ações sazonais. Continue monitorando os fatores que
                contribuíram para este resultado.
              </p>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-400">
            Análise gerada em 0.8 segundos utilizando SynaPix.
          </div>
        </FeatureCard>

        <FeatureCard className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold text-white">IA Avançada</h3>
          </div>

          <p className="text-slate-300">
            Gráficos e visualizações gerados automaticamente pela IA, escolhendo
            sempre o melhor formato para seus dados.
          </p>
        </FeatureCard>

        <FeatureCard>
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-6 h-6 text-red-400" />
            <h3 className="text-xl font-semibold text-white">
              Segurança Total
            </h3>
          </div>

          <p className="text-slate-300">
            Seus dados protegidos com criptografia de ponta a ponta e controles
            de acesso avançados.
          </p>
        </FeatureCard>

        <FeatureCard className="sm:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-semibold text-white">Tempo Real</h3>
          </div>

          <p className="text-slate-300">
            Gráficos e visualizações gerados em tempo real. Sempre atualizados
            com os dados mais recentes da sua empresa, providos pelos usuários.
          </p>
        </FeatureCard>
      </div>
    </section>
  );
};
