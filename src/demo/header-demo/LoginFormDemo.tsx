"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

import LoginButton from "../buttons/LoginButton";
import { Input } from "@/components/ui/input";
import { doCredentialLogin } from "../../app/actions/index";
import { useRouter } from "next/navigation";
import CustomButton from "../buttons/CustomButton";
import { RiGoogleFill } from "react-icons/ri";

const LoginFormDemo = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/dashboard");
      }

      // if(response.ok){
      //   router.push('/')
      // }
      // if(!!response.error){
      //   setError(response.error.message);
      // }
    } catch (error) {
      throw new Error("login error" + error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <Image
          src="/assets/images/stidax-logo.png"
          alt="image"
          width={118}
          height={40}
        />
      </Link>
      <p className="font-semibold" style={{ fontSize: "50px" }}>
        Login Now
      </p>
      <p className="font-medium text-gray-600">please enter your details</p>
      <div className="text-red-500">{error}</div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col p-20 gap-5">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          style={{ height: "48px" }}
        />

        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          style={{ height: "48px" }}
        />

        <LoginButton name="Login" />
        <CustomButton
          name="Login with Google"
          type="submit"
          icon={<RiGoogleFill size={27} />}
        />
        <Link
          href={"/register"}
          style={{ color: "blue" }}
          className="text-sm font-semibold hover:underline flex justify-center "
        >
          Do not have an account! please Register.
        </Link>
      </form>
    </div>
  );
};

export default LoginFormDemo;
