"use client"
import { Area, AreaChart, CartesianGrid, XAxis , YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { number: "1", desktop: 186, mobile: 80 },
  { number: "2", desktop: 300, mobile: 80 },
  { number: "3", desktop: 16, mobile: 230 },
  { number: "4", desktop: 186, mobile: 80 },
  { number: "5", desktop: 66, mobile: 80 },
  { number: "6", desktop: 186, mobile: 80 },
  { number: "7", desktop: 186, mobile: 120 },
  { number: "8", desktop: 186, mobile: 80 },
  { number: "9", desktop: 186, mobile: 200 },
  { number: "10", desktop: 16, mobile: 450 },
  { number: "11", desktop: 186, mobile: 80 },
  { number: "12", desktop: 186, mobile: 230 },
  { number: "13", desktop: 86, mobile: 240 },
  { number: "14", desktop: 120, mobile: 300 },
  { number: "15", desktop: 206, mobile: 430 },
  { number: "16", desktop: 206, mobile: 180 },
  { number: "17", desktop: 186, mobile: 560 },
  { number: "18", desktop: 200, mobile: 200 },
  { number: "19", desktop: 282, mobile: 600 },
  { number: "20", desktop: 186, mobile: 640 },
  { number: "21", desktop: 486, mobile: 80 },
  { number: "22", desktop: 286, mobile: 250 },
  { number: "23", desktop: 186, mobile: 260 },
  { number: "24", desktop: 186, mobile: 40 },
  { number: "25", desktop: 706, mobile: 160 },
  { number: "26", desktop: 186, mobile: 80 },
  { number: "27", desktop: 186, mobile: 80 },
  { number: "28", desktop: 150, mobile: 120 },
  { number: "29", desktop: 150, mobile: 90 },
  { number: "30", desktop: 150, mobile: 120 },

 
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Areachart() {
  return (
        <main className="main">
          <p> Showing </p>
        <ChartContainer config={chartConfig} className="h-[270px] w-full">
          <AreaChart
            data={chartData}
         
          >
            <CartesianGrid vertical={false} />
            <YAxis 
              tickLine={false}
              axisLine={false}

              />
            <XAxis
              dataKey="number"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
             
              tickFormatter={(value) => value.slice(0, 2)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent />}
            />
            <Area
              dataKey="mobile"
              type="natural"
               fill="#8884d8"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="1"
          
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="#82ca9d"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="1"
            />
          </AreaChart>
        </ChartContainer>
        </main>
  )
}
