'use client'
import { BG_IMG } from "@/constant/Images";
import ButtonDemo from "@/demo/buttons/ButtonDemo";
import { useRouter } from "next/navigation";
import React from "react";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-5">
      <div className="flex flex-col items-center gap-2 text-8xl font-semibold text-gray-800">
        <p>Lorem ipsum dolor</p>
        <p>sit amet</p>
      </div>
      <p className="font-bold text-gray-500 text-2xl">
        consectetur adipiscing elit
      </p>
      <ButtonDemo
        name="Sign up for free"
        type="button"
        onClick={()=>router.push('/register')}
        className="py-7 px-10 rounded-lg bg-green-600 text-white font-bold shadow-md"
        
      />
      <div
        className="w-screen h-[500px]"
        style={{ backgroundImage: `url(${BG_IMG})` }}
      ></div>
    </div>
  );
};

export default HeroSection;
