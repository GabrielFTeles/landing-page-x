import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    month: "Jul/23",
    analytics: 145000,
    automation: 95000,
  },
  {
    month: "Ago/23",
    analytics: 132000, // Queda sazonal
    automation: 108000,
  },
  {
    month: "Set/23",
    analytics: 188000, // Recuperação forte
    automation: 92000, // Queda inesperada
  },
  {
    month: "Out/23",
    analytics: 175000, // Leve retração
    automation: 156000, // Crescimento expressivo
  },
  {
    month: "Nov/23",
    analytics: 248000, // Black Friday
    automation: 189000, // Crescimento estável
  },
  {
    month: "Dez/23",
    analytics: 235000, // Leve queda pós Black Friday
    automation: 225000, // Pico de fim de ano
  },
];

const chartConfig = {
  analytics: {
    label: "Analytics IA",
    color: "hsl(var(--chart-3))",
  },
  automation: {
    label: "Automação IA",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const BarChartDemo = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[500px] w-full aspect-auto"
    >
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => `R$${value / 1000}k`}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              indicator="dot"
              formatter={(value, label) => (
                <>
                  <span className="text-muted-foreground">{label}</span>{" "}
                  <span className="font-medium">
                    {(value as number).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </>
              )}
            />
          }
        />
        <Bar
          dataKey="analytics"
          fill="var(--color-analytics)"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="automation"
          fill="var(--color-automation)"
          radius={[4, 4, 0, 0]}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </BarChart>
    </ChartContainer>
  );
};
