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
    month: "Jul",
    "2024": 178000,
    "2023": 145000,
  },
  {
    month: "Ago",
    "2024": 165000,
    "2023": 132000,
  },
  {
    month: "Set",
    "2024": 215000,
    "2023": 188000,
  },
  {
    month: "Out",
    "2024": 198000,
    "2023": 175000,
  },
  {
    month: "Nov",
    "2024": 278000,
    "2023": 248000,
  },
  {
    month: "Dez",
    "2024": 292000,
    "2023": 235000,
  },
];

const chartConfig = {
  "2024": {
    label: "2024",
    color: "hsl(var(--chart-3))",
  },
  "2023": {
    label: "2023",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const ComparisonChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[250px] md:h-[500px] w-full aspect-auto"
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
        <Bar dataKey="2024" fill="var(--color-2024)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="2023" fill="var(--color-2023)" radius={[4, 4, 0, 0]} />
        <ChartLegend content={<ChartLegendContent />} />
      </BarChart>
    </ChartContainer>
  );
};
