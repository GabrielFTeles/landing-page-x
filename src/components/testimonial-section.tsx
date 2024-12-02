import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { TestimonialCarousel, type Testimonial } from "./testimonial-carousel";

type TestimonialCardProps = Testimonial;

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  content,
  highlight,
}) => {
  return (
    <div className="rounded-2xl p-6 bg-background shadow-sm border flex flex-col gap-4 h-full">
      <div className="flex gap-1 text-yellow-400">
        <Star className="fill-yellow-400" />
        <Star className="fill-yellow-400" />
        <Star className="fill-yellow-400" />
        <Star className="fill-yellow-400" />
        <Star className="fill-yellow-400" />
      </div>

      <div className="space-y-2">
        <h3 className="font-bold">{highlight}</h3>
        <p className="text-muted-foreground">"{content}"</p>
      </div>

      <div className="items-end flex flex-1 gap-2">
        <Avatar>
          <AvatarImage src={author.image.src} alt={author.image.alt} />
          <AvatarFallback>{author.name.slice(0, 1)}</AvatarFallback>
        </Avatar>

        <div>
          <h4 className="font-medium">{author.name}</h4>
          <p className="text-muted-foreground text-sm">
            {author.role}, {author.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <section
      className="pt-16 pb-48 bg-[#F5F9FC]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
      }}
    >
      <div className="flex flex-col items-center max-w-[500px] mx-auto text-center">
        <h3 className="font-mono uppercase tracking-tighter text-sm text-blue-800">
          Depoimentos
        </h3>

        <h2 className="text-5xl font-bold">
          Amados por equipes de todos os tamanhos
        </h2>

        <p className="text-muted-foreground mt-4">
          Descubra como empresas estão transformando dados em resultados com
          nossa plataforma
        </p>
      </div>

      <div className="max-w-screen-2xl mt-14 mx-auto px-4 space-y-4">
        <TestimonialCarousel />
      </div>
    </section>
  );
};
