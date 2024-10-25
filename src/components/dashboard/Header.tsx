"use client";
import { MenubarDemo } from "@/demo/dashboard-demo/MenubarDemo";
import { SearchDialogDemo } from "@/demo/dashboard-demo/SearchDialogDemo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoSettings } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-72">
      <Link href={"/"}>
        <Image
          src="/assets/images/stidax-logo.png"
          alt="logo"
          width={118}
          height={40}
        />
      </Link>
      <MenubarDemo />
      <div className="flex items-center gap-10">
        <SearchDialogDemo />
        <button>
          <IoSettings size={27} />
        </button>
      </div>
    </div>
  );
};

export default Header;
