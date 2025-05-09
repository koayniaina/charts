"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { desktop: 120 },
  { desktop: 100 },
  { desktop: 89 },
  { desktop: 36 },
  { desktop: 58 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Barchart() {
  return (
    <main>
      <p>Barchart Simple</p>
      <ChartContainer config={chartConfig} className="min-h-[100px]">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <YAxis tickLine={false} axisLine={false} />

          <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" type="natural" fill="#8884d8" radius={4} />
        </BarChart>
      </ChartContainer>
    </main>
  );
}
