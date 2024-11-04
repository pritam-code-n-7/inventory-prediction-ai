'use client'
import { NavigationMenuDemo } from "@/demo/header-demo/NavigationMenuDemo";
import ButtonDemo from "@/demo/buttons/ButtonDemo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
const router = useRouter();

  return (
    <div className="flex items-center justify-center gap-96">
      <Link href={"/"}>
        <Image
          src="/assets/images/stidax-logo.png"
          alt="logo"
          width={118}
          height={40}
        />
      </Link>
      <NavigationMenuDemo />
      <ButtonDemo
      onClick={()=>router.push('/register')}
        name="Register here"
        type="button"
        className="h-10 rounded-lg bg-green-600 text-white font-bold shadow-md"
      />
    </div>
  );
};

export default Header;
