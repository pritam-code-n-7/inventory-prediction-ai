import { SIGNUP_BG_IMG } from "@/constant/Images";
import RegisterFormDemo from "@/demo/header-demo/RegisterFormDemo";
import React from "react";

const Page = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div
        className="h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${SIGNUP_BG_IMG})` }}
      ></div>
      <RegisterFormDemo />
    </div>
  );
};

export default Page;
