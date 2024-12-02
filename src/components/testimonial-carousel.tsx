import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { TestimonialCard } from "./testimonial-section";

export interface Testimonial {
  author: {
    name: string;
    title: string;
    role: string;
    company: string;
    image: {
      src: string;
      alt: string;
    };
  };
  content: string;
  highlight: string;
}

const testimonials: Array<Testimonial> = [
  {
    author: {
      name: "Ricardo Silva",
      title: "CEO",
      role: "Chief Executive Officer",
      company: "TechSolutions Brasil",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Ricardo Silva",
      },
    },
    content:
      "A plataforma revolucionou nossa análise de dados. O que antes levava dias da equipe de BI agora é feito em minutos. A capacidade de fazer perguntas complexas e obter visualizações profissionais instantaneamente mudou completamente nossa tomada de decisão.",
    highlight: "Redução de 85% no tempo de análise",
  },
  {
    author: {
      name: "Ana Santos",
      title: "Head de Marketing",
      role: "Head of Marketing",
      company: "E-commerce Solutions",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Ana Santos",
      },
    },
    content:
      "Para marketing digital, velocidade é crucial. A plataforma nos permite analisar campanhas em tempo real e fazer ajustes imediatos. A facilidade de criar dashboards personalizados sem conhecimento técnico transformou nossa equipe.",
    highlight: "ROI de marketing aumentou 125%",
  },
  {
    author: {
      name: "Carlos Mendes",
      title: "Diretor Financeiro",
      role: "Financial Director",
      company: "Grupo Inovare",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Carlos Mendes",
      },
    },
    content:
      "A IA realmente entende nossas necessidades financeiras. Conseguimos identificar padrões de gastos e oportunidades de economia que antes passavam despercebidos. A precisão das análises e projeções nos ajuda a tomar decisões mais assertivas.",
    highlight: "Economia de R$300mil em 3 meses",
  },
  {
    author: {
      name: "Juliana Lima",
      title: "Product Manager",
      role: "Gerente de Produto",
      company: "SoftTech",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Juliana Lima",
      },
    },
    content:
      "Como PM, preciso tomar decisões baseadas em dados constantemente. Esta ferramenta é como ter um analista de dados 24/7. A capacidade de fazer análises complexas com perguntas simples mudou completamente nossa velocidade de iteração.",
    highlight: "Lançamentos 70% mais rápidos",
  },
  {
    author: {
      name: "Rafael Torres",
      title: "CTO",
      role: "Chief Technology Officer",
      company: "DataDriven",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Rafael Torres",
      },
    },
    content:
      "A integração foi surpreendentemente simples e a segurança dos dados é impecável. Em poucas horas, conseguimos conectar todas nossas fontes de dados e começar a extrair insights valiosos. A conformidade com LGPD foi um diferencial importante.",
    highlight: "Setup completo em 24 horas",
  },
  {
    author: {
      name: "Mariana Costa",
      title: "Customer Success",
      role: "CS Manager",
      company: "ClientFirst",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Mariana Costa",
      },
    },
    content:
      "Conseguimos identificar padrões de comportamento dos clientes que nos ajudaram a reduzir o churn significativamente. A capacidade de prever possíveis cancelamentos nos permite agir preventivamente e melhorar a experiência do cliente.",
    highlight: "Redução de 40% no churn",
  },
  {
    author: {
      name: "Pedro Almeida",
      title: "Diretor Comercial",
      role: "Sales Director",
      company: "VendaMais",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Pedro Almeida",
      },
    },
    content:
      "As análises preditivas revolucionaram nossa abordagem de vendas. Conseguimos identificar leads com maior potencial de conversão e personalizar nossas estratégias com base em dados reais. O aumento nas vendas foi imediato.",
    highlight: "Aumento de 60% em conversão",
  },
  {
    author: {
      name: "Fernanda Souza",
      title: "Head de BI",
      role: "Business Intelligence Head",
      company: "Analytics Pro",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Fernanda Souza",
      },
    },
    content:
      "Como profissional de BI, estava cética no início, mas a plataforma superou todas as expectativas. Automatizamos processos que antes eram extremamente manuais e agora nossa equipe pode focar em análises mais estratégicas.",
    highlight: "Automação de 95% dos relatórios",
  },
  {
    author: {
      name: "Lucas Santos",
      title: "Gerente de Operações",
      role: "Operations Manager",
      company: "LogTech",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Lucas Santos",
      },
    },
    content:
      "A otimização das nossas operações melhorou drasticamente. A capacidade de analisar dados em tempo real e receber alertas automáticos sobre anomalias nos permite resolver problemas antes que afetem o negócio.",
    highlight: "Eficiência operacional +45%",
  },
  {
    author: {
      name: "Amanda Silva",
      title: "Growth Manager",
      role: "Growth Manager",
      company: "StartupGrow",
      image: {
        src: "/api/placeholder/64/64",
        alt: "Foto de Amanda Silva",
      },
    },
    content:
      "Para estratégias de crescimento, dados precisos são essenciais. A plataforma nos permite testar hipóteses rapidamente e identificar oportunidades de crescimento com confiança. Os insights gerados pela IA são verdadeiramente acionáveis.",
    highlight: "Crescimento MoM de 28%",
  },
];

export const TestimonialCarousel = () => {
  const [firstRowRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      AutoScroll({
        startDelay: 0,
        speed: 0.6,
        direction: "forward",
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  const [secondRowRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      AutoScroll({
        startDelay: 0,
        speed: 0.6,
        direction: "backward",
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="relative">
      <div className="space-y-4">
        <div ref={firstRowRef} className="overflow-hidden">
          <div className="flex -ml-4">
            {testimonials.map((testimonial) => (
              <div className="flex-[0_0_33%] min-w-0 pl-4">
                <TestimonialCard
                  key={testimonial.author.name}
                  {...testimonial}
                />
              </div>
            ))}
          </div>
        </div>

        <div ref={secondRowRef} className="overflow-hidden">
          <div className="flex -ml-4">
            {testimonials.map((testimonial) => (
              <div className="flex-[0_0_33%] min-w-0 pl-4">
                <TestimonialCard
                  key={testimonial.author.name}
                  {...testimonial}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F5F9FC] dark:from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F5F9FC] dark:from-background" />
    </div>
  );
};
