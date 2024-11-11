"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

import LoginButton from "../buttons/LoginButton";
import { Input } from "@/components/ui/input";
import { doCredentialLogin, doSocialLogin } from "../../app/actions/index";
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
    } catch (error) {
      console.error(error);
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
          autoComplete="email"
          required
          style={{ height: "48px" }}
        />

        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="password"
          required
          style={{ height: "48px" }}
        />

        <LoginButton name="Login" />
      </form>
      <div className="flex flex-col items-center gap-10">
        {/* seperator */}
        <div className="flex items-center gap-2 justify-center">
          <hr className="border-2 border-gray-600 w-7" />
          <span>Or</span>
          <hr className="border-2 border-gray-600 w-7" />
        </div>
        <form action={doSocialLogin}>
          <CustomButton
            name="action"
            value="google"
            btnname="Continue with Google"
            type="submit"
            icon={<RiGoogleFill size={27} />}
          />
        </form>
        <div className="flex items-center gap-2 justify-center">
          <p style={{ color: "gray" }}>Dont have an account?</p>
          <Link
            href={"/register"}
            style={{ color: "black" }}
            className="font-bold"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginFormDemo;
