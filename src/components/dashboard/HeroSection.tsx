'use client'
import { BarGraphDemo } from "@/demo/dashboard-demo/BarGraphDemo";
import { LineChartDemo } from "@/demo/dashboard-demo/LineChartDemo";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-5xl font-bold">Admin Dashboard</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 p-20 space-x-10">
        <BarGraphDemo />
        <LineChartDemo />
      </div>
    </div>
  );
};

export default HeroSection;
