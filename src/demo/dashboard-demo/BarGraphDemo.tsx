"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import Data from "@/data/inventoryUsageData.json"

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80, },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

const chartConfig = {
  samsung: {
    label: "Samsung",
    // color: "#2563eb",
    color:"hsl(var(--chart-1))"
  },
  iphone: {
    label: "Iphone",
    // color: "#60a5fa",
    color:"hsl(var(--chart-2))"
  },
} satisfies ChartConfig;

export function BarGraphDemo() {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <BarChart accessibilityLayer data={Data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="samsung" fill="var(--color-samsung)" radius={4} />
        <Bar dataKey="iphone" fill="var(--color-iphone)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
