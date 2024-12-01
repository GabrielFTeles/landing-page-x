import { ComparisonChart } from "./comparison-chart";

export const DemoSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center max-w-[600px] mx-auto">
        <h3 className="font-mono uppercase tracking-tighter text-sm text-blue-800">
          Simples & Fácil
        </h3>

        <h2 className="text-5xl font-bold mt-2">
          Multiplique seus{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Insights
          </span>
          ,{" "}
          <span className="underline underline-offset-4 decoration-red-600">
            não
          </span>{" "}
          sua Equipe
        </h2>

        <p className="mt-4 text-muted-foreground max-w-[500px] mx-auto">
          Por que contratar um time inteiro, quando você pode contar com o poder
          analítico de um departamento completo em uma única plataforma? Faça
          mais com menos.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="p-4 bg-background shadow-sm border rounded-lg col-span-2">
          <p className="p-2 bg-muted rounded-lg">
            "Me mostre o faturamento dos últimos 6 meses de 2024, comparado com
            2023."
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <ComparisonChart />
        </div>

        <div className="p-6 border rounded-lg bg-muted"></div>
      </div>
    </section>
  );
};
