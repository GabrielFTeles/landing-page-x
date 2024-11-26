import { Button } from "./ui/button";

import heroImage from "../assets/hero-image.png";
import { Brain, ChartPie, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto pt-20 pb-10 px-8">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-6xl text-center font-bold">
          Análise empresarial com{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            IA
          </span>{" "}
          em segundos,{" "}
          <span className="whitespace-nowrap relative">
            não em dias.
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full transform scale-x-100" />
          </span>
        </h1>

        <p className="pt-6 text-center text-muted-foreground">
          Transforme dados em insights valiosos com a Sentry-x. Digite sua
          pergunta e nossa IA gera visualizações profissionais e análises
          comparativas instantâneas para impulsionar suas decisões estratégicas.
        </p>
      </div>

      <div className="mt-8 flex justify-center items-center gap-4">
        <Button variant="outline" size="lg">
          Agendar demonstração
        </Button>
        <Button size="lg">Experimente gratuitamente por 14 dias</Button>
      </div>

      <div className="mt-16 flex flex-col justify-center items-center gap-4">
        <div className="mx-auto max-w-screen-xl border p-4 rounded-xl">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>

      <div className="mt-12 flex justify-between gap-2 max-w-screen-xl mx-auto">
        <div className="flex gap-2 max-w-[350px]">
          <div className="p-4 bg-blue-500/80 rounded-lg h-fit">
            <Brain className="text-white size-8" />
          </div>

          <div>
            <h3 className="text-xl font-bold">Inteligência Artificial</h3>

            <p className="text-muted-foreground">
              Transforme perguntas simples em análises poderosas, com nossa IA
              que entende seu negócio.
            </p>
          </div>
        </div>

        <div className="flex gap-2 max-w-[350px]">
          <div className="p-4 bg-emerald-500/80 rounded-lg h-fit">
            <Zap className="text-white size-8" />
          </div>

          <div>
            <h3 className="text-xl font-bold">Respostas Instantâneas</h3>

            <p className="text-muted-foreground">
              Obtenha insights e visualizações em segundos, sem necessidade de
              configurações complexas.
            </p>
          </div>
        </div>
        <div className="flex gap-2 max-w-[350px]">
          <div className="p-4 bg-purple-500/80 rounded-lg h-fit">
            <ChartPie className="text-white size-8" />
          </div>

          <div>
            <h3 className="text-xl font-bold">Análise Avançada</h3>

            <p className="text-muted-foreground">
              Transforme perguntas simples em análises poderosas com nossa IA
              que entende seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
