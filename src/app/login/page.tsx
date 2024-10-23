import { SIGNUP_BG_IMG } from "@/constant/Images";
import LoginFormDemo from "@/demo/header-demo/LoginFormDemo";
import React from "react";

const Page = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div
        className="h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${SIGNUP_BG_IMG})` }}
      ></div>
     <LoginFormDemo />
    </div>
  );
};

export default Page;
