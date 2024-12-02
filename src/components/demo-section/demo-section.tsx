import { ComparisonChart } from "./comparison-chart";

export const DemoSection = () => {
  return (
    <section
      className="px-4 pt-16 pb-60 bg-[#0B2540]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto ">
        <div className="text-center max-w-[600px] mx-auto">
          <h3 className="font-mono uppercase tracking-tighter text-sm text-blue-400">
            Simples & Fácil
          </h3>

          <h2 className="text-5xl font-bold text-white mt-2">
            Multiplique seus{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Insights
            </span>
            ,{" "}
            <span className="underline underline-offset-4 decoration-red-500">
              não
            </span>{" "}
            sua Equipe
          </h2>

          <p className="mt-4 text-white/85 max-w-[500px] mx-auto">
            Por que contratar um time inteiro, quando você pode contar com o
            poder analítico de um departamento completo em uma única plataforma?
            Faça mais com menos.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <div className="p-4 bg-[#0B2E4E] shadow-sm rounded-lg col-span-2">
            <p className="p-2 bg-muted rounded-lg">
              "Me mostre o faturamento dos últimos 6 meses de 2024, comparado
              com 2023."
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-background">
            <ComparisonChart />
          </div>

          {/* <div className="p-6 border rounded-lg bg-muted"></div> */}
        </div>
      </div>
    </section>
  );
};
