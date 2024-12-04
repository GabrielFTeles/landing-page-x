import { Button } from "./ui/button";
import WordRotate from "./ui/word-rotate";

export const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#214061] to-[#0b2541] dark:from-[#2c6db3] dark:to-[#0d3055] py-28 text-background shadow-inner px-4">
      <div className="flex flex-col items-center text-white mx-auto max-w-[600px] text-center gap-8">
        <h2 className="section-title">
          Pronto para transformar seus{" "}
          <span className="underline underline-offset-4">dados</span> em
          <WordRotate words={["Insigths", "Gráficos", "Análises"]} />?
        </h2>

        <div className="sm:flex-row w-full justify-center flex-col flex gap-4 items-center">
          <Button className="p-6 sm:w-fit w-full bg-transparent border-background dark:border-primary text-white border-2 hover:bg-white hover:text-primary dark:hover:text-background">
            Agendar demonstração
          </Button>

          <Button className="p-6 sm:w-fit w-full border-2 bg-slate-900 dark:text-primary hover:bg-slate-950 border-slate-900">
            Começar gratuitamente
          </Button>
        </div>
      </div>
    </section>
  );
};
