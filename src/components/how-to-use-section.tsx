import { motion } from "motion/react";
import { useState } from "react";

import uploadArchiveImage from "../assets/upload-archive.png";
import secondStepImage from "../assets/print_01_solicitacao.png";

interface HowToUseStep {
  title: string;
  description: string;
  image: string;
  value: string;
}

const howToUseSteps: Array<HowToUseStep> = [
  {
    title: "Upload dos seus dados",
    description:
      "Faça o upload dos seus arquivos através da nossa plataforma. Seus dados são criptografados e protegidos com os mais altos padrões de segurança.",
    image: uploadArchiveImage,
    value: "upload",
  },
  {
    title: "Faça sua pergunta",
    description:
      "Digite sua pergunta, da mesma forma que pediria ao analista, como: 'Compare as vendas dos últimos 3 meses com o ano anterior'. Simples assim!",
    image: secondStepImage,
    value: "ask",
  },
  {
    title: "IA processa os dados",
    description:
      "Nossa IA avançada analisa seus dados instantaneamente, identificando padrões e gerando insights relevantes.",
    image: uploadArchiveImage,
    value: "process",
  },
  {
    title: "Visualize os resultados",
    description:
      "Receba gráficos profissionais e análises detalhadas automaticamente, prontos para decidir os próximos passos da sua empresa.",
    image: uploadArchiveImage,
    value: "visualize",
  },
];

const HowToUseTabs = () => {
  const [activeTab, setActiveTab] = useState(howToUseSteps[0]);

  return (
    <div className="flex gap-6 xl:flex-row max-w-screen-md xl:max-w-full mx-auto flex-col  xl:col-span-2 items-center">
      <div className="p-3 border bg-background shadow-sm rounded-2xl w-fit xl:w-1/2 h-fit mt-auto">
        <img src={activeTab.image} alt="" className="rounded-xl" />
      </div>

      <div className="xl:w-1/2">
        <ul className="flex flex-col gap-2">
          {howToUseSteps.map((step) => (
            <li className="relative flex gap-2" key={step.value}>
              {activeTab === step && (
                <motion.div
                  layoutId="active-how-to-use-tab"
                  className="min-w-1 max-w-1 flex-1 rounded-xl bg-indigo-600"
                ></motion.div>
              )}

              <motion.div
                onClick={() => setActiveTab(step)}
                layout
                data-state={activeTab === step ? "active" : "inactive"}
                className="p-4 w-full bg-background data-[state=active]:bg-indigo-300/40 dark:data-[state=active]:bg-blue-900 text-start rounded-lg border shadow-sm cursor-pointer select-none"
              >
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const HowToUseSection = () => {
  return (
    <section className="mx-auto py-16 px-4">
      <div className="space-y-8 max-w-screen-2xl mx-auto">
        <div>
          <h3 className="font-mono text-center uppercase tracking-tighter text-sm text-blue-800">
            Como funciona
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2">
          <h2 className="max-w-[600px] mx-auto xl:mx-0 section-title mb-8 xl:text-start text-center xl:col-start-2">
            Inicie sua análise de dados em 4 passos simples.
          </h2>

          <HowToUseTabs />
        </div>
      </div>
    </section>
  );
};
