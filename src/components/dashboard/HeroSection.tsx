import { BarGraphDemo } from "@/demo/dashboard-demo/BarGraphDemo";
import { LineChartDemo } from "@/demo/dashboard-demo/LineChartDemo";
import React from "react";

import {auth} from "@/auth"
import { redirect } from "next/navigation";
import Image from "next/image";

const HeroSection = async() => {

const session = await auth();

if(!session?.user) redirect("/login")

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="space-y-2">
        <h1 className="text-xl font-bold">Welcome, {session?.user?.name}</h1>
        <Image src={session?.user?.image || ''}
        alt={session?.user?.name || ''} 
        height={200}
        width={200}/>
        </div>
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
