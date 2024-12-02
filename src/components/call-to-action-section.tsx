import { Button } from "./ui/button";
import WordRotate from "./ui/word-rotate";

export const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-800 py-28 text-background shadow-inner px-4">
      <div className="flex flex-col items-center mx-auto max-w-[600px] text-center gap-8">
        <h2 className="text-5xl font-bold">
          Pronto para transformar seus{" "}
          <span className="underline underline-offset-4">dados</span> em
          <WordRotate words={["Insigths", "Gráficos", "Análises"]} />?
        </h2>

        <div className="flex gap-4 items-center">
          <Button className="p-6 bg-transparent border-background border-2 hover:bg-white hover:text-primary">
            Agendar demonstração
          </Button>

          <Button className="p-6 border-2 border-primary">
            Começar gratuitamente
          </Button>
        </div>
      </div>
    </section>
  );
};
