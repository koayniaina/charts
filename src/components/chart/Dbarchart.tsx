"use client";

import { Bar, BarChart, CartesianGrid, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
 
  { desktop: 70, mobile: 5 },
  {  desktop: 37, mobile: 3 },
  {desktop: 40  , mobile: 15 },
  {desktop: 59, mobile: 8 },
  { desktop: 24, mobile: 10 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },

  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Dbarchart() {
  return (
    <main>
      <p>Double Chart</p>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-[370]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Bar
          dataKey="desktop"
          stackId="a"
          fill="#8884d8"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="mobile"
          stackId="a"
          fill="#82ca9d"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
    </main>
  );
}
